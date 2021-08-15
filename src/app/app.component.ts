import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
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
    { en_name: 'Kouenji', jp_name: '高円寺', alcohol: 4,  },
    { en_name: 'Kichijoji', jp_name: '吉祥寺', alcohol: 4, young_fancy: 5 },
    { en_name: 'Tamagawa', jp_name: '多摩川', nature: 5 },
    { en_name: 'Yokohama', jp_name: '横浜', coffee: 3, nature: 4, alcohol: 4 },
    { en_name: 'Hakone', jp_name: '箱根', coffee: 1, nature: 5, alcohol: 0 },
  ];
  suggestions: any = [this.places];
  selected_attr: string = 'random';
  lang = 'EN';
  ngInit() {
    this.choose_place();
  }
  choose_place() {
    this.selected_attr = 'random';
    do {
      var new_random_place = this.get_random(this.places);
    } while (this.suggestions[0]['en_name'] == new_random_place[0]['en_name']);
    this.suggestions = new_random_place;
  }
  choose_place_by_attribute(attr: string) {
    this.selected_attr = attr;
    this.suggestions = this.places
      .filter((place) => place[attr] && place[attr] >= 3)
      .sort((a, b) => b[attr] - a[attr])
      .slice(0, 5);
  }
  get_random(list: any) {
    const random_place = list[Math.floor(Math.random() * list.length)];
    return Array.of(random_place);
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

  getTitle():string{
    return this.lang=='JP'?'今日はとこへ行く?':'Where to today?';
  }
  suggestionName(suggestion:any):string{
    if (this.lang=='EN'){
      return suggestion.en_name
    }
    if (this.lang=='JP'){
      return suggestion.jp_name
    }
    else{
      return suggestion.en_name
    }
  }
}
