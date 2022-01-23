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

  allAreas: [{ [key: string]: any }] = [{}];
  allPlaces: Place[] = [];
  randomArea: any = {}; //actually Area type
  suggestions: any = [];
  selected_attr: string = 'random';
  lang = 'JP';
  userPosition: string = '';
  places: Place[] = [];

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
    } while (this.randomArea == new_random_area.area_name);
    this.randomArea = new_random_area;
  }

  getRandomArea(list: any) {
    const random_place = list[Math.floor(Math.random() * list.length)];
    return random_place;
  }

  filterPlacesByArea(area: Area): Place[]  {
    return this.allPlaces.filter(
      (place) =>
        Math.abs(area.longitude - place.longitude) < 0.01 &&
        Math.abs(area.latitude - place.latitude) < 0.01
    );
  }

  choose_place_by_attribute(attr: string) {
    this.selected_attr = attr;
    this.suggestions = this.allAreas
      .filter((area: any) => area[attr] && area[attr] >= 1)
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
    return suggestion.area_name;
    // if (this.lang == 'EN') {
    //   return suggestion.en_name;
    // }
    // if (this.lang == 'JP') {
    //   return suggestion.jp_name;
    // } else {
    //   return suggestion.en_name;
    // }
  }
}
