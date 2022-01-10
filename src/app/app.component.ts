import { Place } from './models/place';
import { Area } from './models/area';
import { BackendService } from './services/backend.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [BackendService],
})
export class AppComponent implements OnInit {
  constructor(private backendService: BackendService) {}
  title = 'Shawn';

  places: {
    [key: string]: any;
  }[] = [
    {
      en_name: 'Shibuya',
      jp_name: '渋谷',
      attribute_labels: ['young'],
      coffee: 4,
      young_fancy: 5,
      alcohol: 5,
    },
    {
      en_name: 'Shinjuku',
      jp_name: '新宿',
      coffee: 2,
      nature: 2,
      young_fancy: 5,
      alcohol: 5,
    },
    {
      en_name: 'Harajuku',
      jp_name: '原宿',
      coffee: 4,
      nature: 3,
      young_fancy: 5,
    },
    { en_name: 'Shimokitazawa', jp_name: '下北沢', coffee: 5, alcohol: 4 },
    { en_name: 'Hiroo', jp_name: '広尾', coffee: 2, alcohol: 2 },
    {
      en_name: 'Ginza',
      jp_name: '銀座',
      coffee: 2,
      young_fancy: 3,
    },
    { en_name: 'Ebisu', jp_name: '恵比寿', coffee: 5, alcohol: 4 },
    { en_name: 'Kouenji', jp_name: '高円寺', alcohol: 4 },
    { en_name: 'Kichijoji', jp_name: '吉祥寺', alcohol: 4, young_fancy: 5 },
    {
      en_name: 'Jiyugaoka',
      jp_name: '自由が丘',
      alcohol: 3,
      coffee: 3,
      young_fancy: 4,
    },
    { en_name: 'Tamagawa', jp_name: '多摩川', nature: 5, detox: 5 },
    {
      en_name: 'Yokohama',
      jp_name: '横浜',
      coffee: 3,
      nature: 4,
      alcohol: 4,
      detox: 4,
    },
    {
      en_name: 'Hakone',
      jp_name: '箱根',
      coffee: 1,
      nature: 5,
      alcohol: 0,
      detox: 5,
    },
    {
      en_name: 'Kamakura/Enoshima',
      jp_name: '鎌倉・江ノ島',
      nature: 5,
      detox: 5,
    },
  ];

  //todo rename ; basically "places",
  placesForRandom: Place[]  = [];

  allAreas: Area[] = [];
  allPlaces: Place[] = [];
  randomAreaName: string = '';
  suggestions: any = [];
  selected_attr: string = 'random';
  lang = 'JP';
  userPosition: string = '';

  ngOnInit() {
    this.backendService.getAreas().subscribe((areas) => {
      this.allAreas = areas;
      this.setRandomArea();
    });
    this.backendService.getAllPlaces().subscribe((places) => {
      this.allPlaces = places;
    });
  }

  updatePostion(position: string) {
    this.userPosition = position;
  }

  setRandomArea() {
    this.selected_attr = 'random';
    do {
      var new_random_area = this.getRandomArea(this.allAreas);
    } while (this.randomAreaName == new_random_area.area_name);
    this.randomAreaName = new_random_area.area_name;
    this.filterPlacesByArea(new_random_area);
  }

  getRandomArea(list: any) {
    const random_place = list[Math.floor(Math.random() * list.length)];
    return random_place;
  }

  filterPlacesByArea(area: Area){
    this.placesForRandom= this.allPlaces.filter(
      place=> Math.abs(area.longitude - place.longitude) < 0.01
        && Math.abs(area.latitude - place.latitude) < 0.01
    )
  }

  choose_place_by_attribute(attr: string) {
    this.selected_attr = attr;
    this.suggestions = this.places
      .filter((place) => place[attr] && place[attr] >= 3)
      .sort((a, b) => b[attr] - a[attr])
      .slice(0, 5);
  }



  getSuggestionClass(suggestion: any): string {
    if (suggestion[this.selected_attr] == 5) {
      return 'first-pick-suggestion';
    }
    if (suggestion[this.selected_attr] == 4) {
      return 'second-pick-suggestion';
    }
    if (suggestion[this.selected_attr]) {
      return 'third-pick-suggestion';
    } else {
      return '';
    }
  }

  selectLang(lang: string) {
    this.lang = lang;
  }

  getTitle(): string {
    return this.lang == 'JP' ? '今日はとこへ行く?' : 'Where to today?';
  }
  suggestionName(suggestion: any): string {
    if (this.lang == 'EN') {
      return suggestion.en_name;
    }
    if (this.lang == 'JP') {
      return suggestion.jp_name;
    } else {
      return suggestion.en_name;
    }
  }
}
