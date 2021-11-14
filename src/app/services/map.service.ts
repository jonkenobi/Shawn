import { HttpClient } from '@angular/common/http';
import { Injectable, Input } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
//not used now
export class MapService {
  NEARBY_STATIONS_URL =
    'google-maps/place/nearbysearch/json?radius=2000&type=train_station&key=key';
  constructor(private http: HttpClient) {}
  getNearbyPlaces(position: string) {
    return this.http.get(this.NEARBY_STATIONS_URL + '&location=' + position);
  }
}

const sampleResponse = {
  "html_attributions" : [],
  "next_page_token" : "Aap_uEDJ4IqluQe0EkDOFJeeEbpNPU66LcU-483Wwf2n4r8jlWdjlFrPxszmqxpWOESpf2gVFUhhtXij5k2gpeSDVlWYP2NMSSRhuUyhQTM6O7SYfxrlPuoAYSyYLfIQoLNhy9ZJa_QSkKSIhTmBg8TOb6EhTJvj4KjetiWimD0qQSqqotfn7dnEmygUYiVyQd1GCFD5B-yIh3XbvxO8f7fuBXM6NhT-n1ydiHj5UV1qZ4_9UFq0i60MxlvZoChgliqYAU8PXKZd1latK38m7eQ3Cg9NzkFa5_BfSwh33U0geY38vv4D63iPJxTGnQJNYCQ90VygkeThp59d6ypfDv-p4vt5jzFU-NQCrf1X2V_1OlMwEcgiJAC8Tph1o-lmS9zuU1ZvE1yCGYuLvJSF6HkrTTqc45Km3Q-Qk4gSRe24IFtzXJQyFPrpqeIoZSC0Bdwe2YzVZIE",
  "results" : [
     {
        "business_status" : "OPERATIONAL",
        "geometry" : {
           "location" : {
              "lat" : 35.6922806,
              "lng" : 139.6974213
           },
           "viewport" : {
              "northeast" : {
                 "lat" : 35.69362958029149,
                 "lng" : 139.6987702802915
              },
              "southwest" : {
                 "lat" : 35.69093161970849,
                 "lng" : 139.6960723197085
              }
           }
        },
        "icon" : "https://maps.gstatic.com/mapfiles/place_api/icons/v1/png_71/cafe-71.png",
        "icon_background_color" : "#FF9E67",
        "icon_mask_base_uri" : "https://maps.gstatic.com/mapfiles/place_api/icons/v2/cafe_pinlet",
        "name" : "星巴克",
        "opening_hours" : {
           "open_now" : true
        },
        "photos" : [
           {
              "height" : 1536,
              "html_attributions" : [
                 "\u003ca href=\"https://maps.google.com/maps/contrib/112612627707684479896\"\u003eS H\u003c/a\u003e"
              ],
              "photo_reference" : "Aap_uECUMv_f_JUaciGinxSYnIN8UtswBeoRpZLgyIpxEvuqTplAFp4vnXVUumuKm3fHX89vXPiwtiYnBQ5lLUFPf3fpzhsU0RnhZh48S-E2shRl9w8iMwkwrn-r2aSKC6QCkkXA8wsn8UsVz99JknzpBxWks_qtuBnul9ccwxpuRwXXq5Gr",
              "width" : 2048
           }
        ],
        "place_id" : "ChIJxeYJktaMGGAR1yXmiIGOV1k",
        "plus_code" : {
           "compound_code" : "MMRW+WX 日本東京都新宿區",
           "global_code" : "8Q7XMMRW+WX"
        },
        "price_level" : 2,
        "rating" : 3.7,
        "reference" : "ChIJxeYJktaMGGAR1yXmiIGOV1k",
        "scope" : "GOOGLE",
        "types" : [
           "meal_takeaway",
           "cafe",
           "restaurant",
           "food",
           "point_of_interest",
           "store",
           "establishment"
        ],
        "user_ratings_total" : 294,
        "vicinity" : "Shinjuku L Tower, 1-chōme-6-1 Nishishinjuku, Shinjuku City"
     },
     {
        "business_status" : "OPERATIONAL",
        "geometry" : {
           "location" : {
              "lat" : 35.690456,
              "lng" : 139.694012
           },
           "viewport" : {
              "northeast" : {
                 "lat" : 35.69153943029151,
                 "lng" : 139.6953109802915
              },
              "southwest" : {
                 "lat" : 35.68884146970851,
                 "lng" : 139.6926130197085
              }
           }
        },
        "icon" : "https://maps.gstatic.com/mapfiles/place_api/icons/v1/png_71/restaurant-71.png",
        "icon_background_color" : "#FF9E67",
        "icon_mask_base_uri" : "https://maps.gstatic.com/mapfiles/place_api/icons/v2/restaurant_pinlet",
        "name" : "Jurin",
        "opening_hours" : {
           "open_now" : true
        },
        "photos" : [
           {
              "height" : 1367,
              "html_attributions" : [
                 "\u003ca href=\"https://maps.google.com/maps/contrib/106058114416464385004\"\u003e樹林\u003c/a\u003e"
              ],
              "photo_reference" : "Aap_uEC16eG2nY3tAuKtInhyy_TzAad9RztTv5E_yw9NnyZmnj2qUfARgH-d2G9s9p4d5YDjYebPLgn9BmVvlapH1dJgMNmrFPqRv52yZpQnHascUDhd423VjulJ63H9iHYVfZFiTs6XYPAagxmT9aAH9JNTfofGDNRjbcbLDtcuNWSfH8ox",
              "width" : 2048
           }
        ],
        "place_id" : "ChIJE2tqZtSMGGARt24OI2Lv-MA",
        "plus_code" : {
           "compound_code" : "MMRV+5J 日本東京都新宿區",
           "global_code" : "8Q7XMMRV+5J"
        },
        "price_level" : 3,
        "rating" : 4.2,
        "reference" : "ChIJE2tqZtSMGGARt24OI2Lv-MA",
        "scope" : "GOOGLE",
        "types" : [
           "restaurant",
           "meal_takeaway",
           "cafe",
           "food",
           "point_of_interest",
           "establishment"
        ],
        "user_ratings_total" : 709,
        "vicinity" : "Keio Plaza Hotel, 本館2階, 2-chōme-2−１ Nishishinjuku, Shinjuku City"
     },
     {
        "business_status" : "OPERATIONAL",
        "geometry" : {
           "location" : {
              "lat" : 35.692216,
              "lng" : 139.697522
           },
           "viewport" : {
              "northeast" : {
                 "lat" : 35.6934900802915,
                 "lng" : 139.6984202302915
              },
              "southwest" : {
                 "lat" : 35.6907921197085,
                 "lng" : 139.6957222697085
              }
           }
        },
        "icon" : "https://maps.gstatic.com/mapfiles/place_api/icons/v1/png_71/restaurant-71.png",
        "icon_background_color" : "#FF9E67",
        "icon_mask_base_uri" : "https://maps.gstatic.com/mapfiles/place_api/icons/v2/restaurant_pinlet",
        "name" : "薩莉亞 Saizeriya 新宿L塔店",
        "opening_hours" : {
           "open_now" : true
        },
        "photos" : [
           {
              "height" : 3024,
              "html_attributions" : [
                 "\u003ca href=\"https://maps.google.com/maps/contrib/105891994908457452610\"\u003eT kauto\u003c/a\u003e"
              ],
              "photo_reference" : "Aap_uECcAhYfdFop1IGS-_rivFjOOlHXOUqG2lNJcqAzCfJG9Uof5CRRKxiT3zxVDSiJ7SXOZAXk5WpM0m2qoNiZ9nH0QD-9fpRHEK2NAiFKs-hyYFWCjpWKCthmXl3Art7nhw8kLXyxAQT4EJWe2ZEodwQDfHOP_bRjhWv4N_Hly-CYVm2I",
              "width" : 4032
           }
        ],
        "place_id" : "ChIJoRP9jdaMGGARPeKYDa9z7wA",
        "plus_code" : {
           "compound_code" : "MMRX+V2 日本東京都新宿區",
           "global_code" : "8Q7XMMRX+V2"
        },
        "price_level" : 1,
        "rating" : 3.6,
        "reference" : "ChIJoRP9jdaMGGARPeKYDa9z7wA",
        "scope" : "GOOGLE",
        "types" : [ "restaurant", "food", "point_of_interest", "establishment" ],
        "user_ratings_total" : 556,
        "vicinity" : "Shinjuku L Tower, B2F, 1-chōme-6−１ Nishishinjuku, Shinjuku City"
     },
     {
        "business_status" : "OPERATIONAL",
        "geometry" : {
           "location" : {
              "lat" : 35.7015581,
              "lng" : 139.6981016
           },
           "viewport" : {
              "northeast" : {
                 "lat" : 35.7029476302915,
                 "lng" : 139.6994554302915
              },
              "southwest" : {
                 "lat" : 35.7002496697085,
                 "lng" : 139.6967574697085
              }
           }
        },
        "icon" : "https://maps.gstatic.com/mapfiles/place_api/icons/v1/png_71/restaurant-71.png",
        "icon_background_color" : "#FF9E67",
        "icon_mask_base_uri" : "https://maps.gstatic.com/mapfiles/place_api/icons/v2/restaurant_pinlet",
        "name" : "Tenkazushi",
        "opening_hours" : {
           "open_now" : true
        },
        "photos" : [
           {
              "height" : 3265,
              "html_attributions" : [
                 "\u003ca href=\"https://maps.google.com/maps/contrib/107804304792480228126\"\u003eさへきひろのぶ\u003c/a\u003e"
              ],
              "photo_reference" : "Aap_uEA6prH7ucf4YEImaHUyrFybKVBYz_6S6VOvaRuq41CD6kKiCDx4SToREHm_haEvUfWVrbDVJTJEVcSuo4LSVhzBergtcyBR1ByvB2Ymno8DXPSlxrzu8ALvlvpGcGUbkTIOG0BE2fzTzIZo3ASU0Vh8l99Atvxff2l6r-fH7qP-76kw",
              "width" : 4898
           }
        ],
        "place_id" : "ChIJ17NC7y6NGGARrRUgSGfEnnQ",
        "plus_code" : {
           "compound_code" : "PM2X+J6 日本東京都新宿區",
           "global_code" : "8Q7XPM2X+J6"
        },
        "price_level" : 1,
        "rating" : 4.1,
        "reference" : "ChIJ17NC7y6NGGARrRUgSGfEnnQ",
        "scope" : "GOOGLE",
        "types" : [ "restaurant", "food", "point_of_interest", "establishment" ],
        "user_ratings_total" : 386,
        "vicinity" : "1 Chome-17-10 Hyakunincho, Shinjuku City"
     },
     {
        "business_status" : "OPERATIONAL",
        "geometry" : {
           "location" : {
              "lat" : 35.6989027,
              "lng" : 139.6832963
           },
           "viewport" : {
              "northeast" : {
                 "lat" : 35.7003371302915,
                 "lng" : 139.6845991802915
              },
              "southwest" : {
                 "lat" : 35.6976391697085,
                 "lng" : 139.6819012197085
              }
           }
        },
        "icon" : "https://maps.gstatic.com/mapfiles/place_api/icons/v1/png_71/restaurant-71.png",
        "icon_background_color" : "#FF9E67",
        "icon_mask_base_uri" : "https://maps.gstatic.com/mapfiles/place_api/icons/v2/restaurant_pinlet",
        "name" : "バーミヤン 中野坂上店",
        "opening_hours" : {
           "open_now" : true
        },
        "photos" : [
           {
              "height" : 1125,
              "html_attributions" : [
                 "\u003ca href=\"https://maps.google.com/maps/contrib/109126491186643890613\"\u003eZangyo- Ninja com\u003c/a\u003e"
              ],
              "photo_reference" : "Aap_uEAD2Qn9xA1qUtrIY6jsgIO-euYEPJKPFkXM54GPJISGb3AM2tZwqFruGKZRwnsn7nNAufdNgpPO-9wwOhY6tw4IYBYJePr9LJjKttOeYy75ZVpq-2Ujz-Amg6cFqrzEkXJ2uvMX2nNWwsshSOmpsBLCEt2oQ1UnUrKmWyC-Tc-6f-0O",
              "width" : 1500
           }
        ],
        "place_id" : "ChIJ3x-Q08_yGGARPDpaUUpY_ko",
        "plus_code" : {
           "compound_code" : "MMXM+H8 日本東京都中野區",
           "global_code" : "8Q7XMMXM+H8"
        },
        "price_level" : 1,
        "rating" : 3.5,
        "reference" : "ChIJ3x-Q08_yGGARPDpaUUpY_ko",
        "scope" : "GOOGLE",
        "types" : [ "restaurant", "food", "point_of_interest", "establishment" ],
        "user_ratings_total" : 499,
        "vicinity" : "1-chōme-42-10 Chūō, Nakano City"
     },
     {
        "business_status" : "OPERATIONAL",
        "geometry" : {
           "location" : {
              "lat" : 35.69791379999999,
              "lng" : 139.7005753
           },
           "viewport" : {
              "northeast" : {
                 "lat" : 35.69932348029149,
                 "lng" : 139.7018983802915
              },
              "southwest" : {
                 "lat" : 35.69662551970849,
                 "lng" : 139.6992004197085
              }
           }
        },
        "icon" : "https://maps.gstatic.com/mapfiles/place_api/icons/v1/png_71/restaurant-71.png",
        "icon_background_color" : "#FF9E67",
        "icon_mask_base_uri" : "https://maps.gstatic.com/mapfiles/place_api/icons/v2/restaurant_pinlet",
        "name" : "北京",
        "opening_hours" : {
           "open_now" : true
        },
        "photos" : [
           {
              "height" : 2160,
              "html_attributions" : [
                 "\u003ca href=\"https://maps.google.com/maps/contrib/118252634782609753961\"\u003e奈塚Q弥\u003c/a\u003e"
              ],
              "photo_reference" : "Aap_uEA-DiR9z5V9UzQWCHpCpWQT2XOOoXpT0JOUmCRGztNPLIW3_pzlGs1--_eVvQQmOQi5sHrfvCOAQ8o4TFmzyV6fHf-Q59P_3g93z4dZl6Ay8Hrzj0-MNS1A5jDgReA6djXfZzcB4zyIhS_NowOFK40XAQZwyobGateGpFO8bK6JYXL1",
              "width" : 3840
           }
        ],
        "place_id" : "ChIJneaa4teMGGAR1WtQmxA2mqQ",
        "plus_code" : {
           "compound_code" : "MPX2+56 日本東京都新宿區",
           "global_code" : "8Q7XMPX2+56"
        },
        "price_level" : 2,
        "rating" : 3.9,
        "reference" : "ChIJneaa4teMGGAR1WtQmxA2mqQ",
        "scope" : "GOOGLE",
        "types" : [ "restaurant", "food", "point_of_interest", "establishment" ],
        "user_ratings_total" : 156,
        "vicinity" : "第3平沢ビル １F-B, 2-chōme-46−７ Kabukichō, Shinjuku City"
     },
     {
        "business_status" : "OPERATIONAL",
        "geometry" : {
           "location" : {
              "lat" : 35.69478839999999,
              "lng" : 139.6982026
           },
           "viewport" : {
              "northeast" : {
                 "lat" : 35.69615933029149,
                 "lng" : 139.6996240302915
              },
              "southwest" : {
                 "lat" : 35.69346136970849,
                 "lng" : 139.6969260697085
              }
           }
        },
        "icon" : "https://maps.gstatic.com/mapfiles/place_api/icons/v1/png_71/restaurant-71.png",
        "icon_background_color" : "#FF9E67",
        "icon_mask_base_uri" : "https://maps.gstatic.com/mapfiles/place_api/icons/v2/restaurant_pinlet",
        "name" : "烏龍麵 東京麺通団",
        "opening_hours" : {
           "open_now" : true
        },
        "photos" : [
           {
              "height" : 720,
              "html_attributions" : [
                 "\u003ca href=\"https://maps.google.com/maps/contrib/114618255880498048786\"\u003e東京麺通団\u003c/a\u003e"
              ],
              "photo_reference" : "Aap_uEBIydKUFn5XvXf17jDDFiuz7HjRmr5Jl5ECSm8SkTiZJ-tUPGGW4oQEEp1YCUaa4zAOjb7NXsv8wcHHCePwIEpKD8kqhjJGjkfTvmkAUZdLQ9290JCyEZFnORv2Fjc5BpKgGSwvG9WSiuFU1KeI71gbi3f8-nGDgbzsJ-6iO3uO6SpR",
              "width" : 1280
           }
        ],
        "place_id" : "ChIJubHyMNaMGGARFRSq4A7C3Uo",
        "plus_code" : {
           "compound_code" : "MMVX+W7 日本東京都新宿區",
           "global_code" : "8Q7XMMVX+W7"
        },
        "price_level" : 1,
        "rating" : 3.9,
        "reference" : "ChIJubHyMNaMGGARFRSq4A7C3Uo",
        "scope" : "GOOGLE",
        "types" : [ "restaurant", "food", "point_of_interest", "establishment" ],
        "user_ratings_total" : 1026,
        "vicinity" : "新宿ダイカンプラザ ビジネス清田ビル, 7-chōme-9−１５ Nishishinjuku, Shinjuku City"
     },
     {
        "business_status" : "OPERATIONAL",
        "geometry" : {
           "location" : {
              "lat" : 35.6897463,
              "lng" : 139.6859117
           },
           "viewport" : {
              "northeast" : {
                 "lat" : 35.69109528029149,
                 "lng" : 139.6872606802915
              },
              "southwest" : {
                 "lat" : 35.68839731970849,
                 "lng" : 139.6845627197085
              }
           }
        },
        "icon" : "https://maps.gstatic.com/mapfiles/place_api/icons/v1/png_71/restaurant-71.png",
        "icon_background_color" : "#FF9E67",
        "icon_mask_base_uri" : "https://maps.gstatic.com/mapfiles/place_api/icons/v2/restaurant_pinlet",
        "name" : "拉麵 山田屋",
        "opening_hours" : {
           "open_now" : true
        },
        "photos" : [
           {
              "height" : 3024,
              "html_attributions" : [
                 "\u003ca href=\"https://maps.google.com/maps/contrib/117067248880908303542\"\u003eMASATO Null\u003c/a\u003e"
              ],
              "photo_reference" : "Aap_uEAbGU35cUXrFBX0oMepLyk3scePg5hiJRxAd_c7o9-vuR-2gOf83opkijc8BiJJAoAIwhs4Uh29A6bWzwhUdAEypIJhWpnVQwTHp67CKia1DLQimYui2yn5Q-LqUFWG2Tpuacw9Q5mtPidoeGZy4EOMWxWPGBR47Ah3WAckE7daPfo5",
              "width" : 4032
           }
        ],
        "place_id" : "ChIJdUFk9inzGGARVx9UtikMlU4",
        "plus_code" : {
           "compound_code" : "MMQP+V9 日本東京都新宿區",
           "global_code" : "8Q7XMMQP+V9"
        },
        "price_level" : 2,
        "rating" : 3.9,
        "reference" : "ChIJdUFk9inzGGARVx9UtikMlU4",
        "scope" : "GOOGLE",
        "types" : [ "restaurant", "food", "point_of_interest", "establishment" ],
        "user_ratings_total" : 106,
        "vicinity" : "4-chōme-11-18 Nishishinjuku, Shinjuku City"
     },
     {
        "business_status" : "OPERATIONAL",
        "geometry" : {
           "location" : {
              "lat" : 35.6940574,
              "lng" : 139.701433
           },
           "viewport" : {
              "northeast" : {
                 "lat" : 35.69538498029149,
                 "lng" : 139.7028789802915
              },
              "southwest" : {
                 "lat" : 35.69268701970849,
                 "lng" : 139.7001810197085
              }
           }
        },
        "icon" : "https://maps.gstatic.com/mapfiles/place_api/icons/v1/png_71/restaurant-71.png",
        "icon_background_color" : "#FF9E67",
        "icon_mask_base_uri" : "https://maps.gstatic.com/mapfiles/place_api/icons/v2/restaurant_pinlet",
        "name" : "Osaka Family Iron Plate-Grilled Pancakes",
        "opening_hours" : {
           "open_now" : true
        },
        "photos" : [
           {
              "height" : 5184,
              "html_attributions" : [
                 "\u003ca href=\"https://maps.google.com/maps/contrib/108053607789531729259\"\u003e大阪家\u003c/a\u003e"
              ],
              "photo_reference" : "Aap_uEDtsPGqjf2zh6U7hu23LiT-zDNCblij8tVf5rG4FhBlqP04P1uFsQyJFiWL11p3C7N4fB9e1VvaTdIVE9_w_WbBauMM-Qzyp5tWmEaxoTOBF2AN5Wt13tndHgm7WE35djhB3lZ1VoSRDmCZeb4sY_4-Mg6r2zqOX77MQwYeB2J5DNZ9",
              "width" : 3456
           }
        ],
        "place_id" : "ChIJDXBI1tmMGGARE6So742HD_s",
        "plus_code" : {
           "compound_code" : "MPV2+JH 日本東京都新宿區",
           "global_code" : "8Q7XMPV2+JH"
        },
        "price_level" : 2,
        "rating" : 3.9,
        "reference" : "ChIJDXBI1tmMGGARE6So742HD_s",
        "scope" : "GOOGLE",
        "types" : [ "restaurant", "food", "point_of_interest", "establishment" ],
        "user_ratings_total" : 375,
        "vicinity" : "浅川ビル B1F, 1-chōme-17−１２ Kabukichō, Shinjuku City"
     },
     {
        "business_status" : "OPERATIONAL",
        "geometry" : {
           "location" : {
              "lat" : 35.70150919999999,
              "lng" : 139.6850887
           },
           "viewport" : {
              "northeast" : {
                 "lat" : 35.7028397802915,
                 "lng" : 139.6864552302915
              },
              "southwest" : {
                 "lat" : 35.7001418197085,
                 "lng" : 139.6837572697085
              }
           }
        },
        "icon" : "https://maps.gstatic.com/mapfiles/place_api/icons/v1/png_71/restaurant-71.png",
        "icon_background_color" : "#FF9E67",
        "icon_mask_base_uri" : "https://maps.gstatic.com/mapfiles/place_api/icons/v2/restaurant_pinlet",
        "name" : "Ataka",
        "opening_hours" : {
           "open_now" : true
        },
        "photos" : [
           {
              "height" : 1080,
              "html_attributions" : [
                 "\u003ca href=\"https://maps.google.com/maps/contrib/104870120807976851126\"\u003e下樂晃弘\u003c/a\u003e"
              ],
              "photo_reference" : "Aap_uECs828so5oLmJTqI4J6I_779w7PI8pLQxwISoLlk6AtkmrmaTL7TnPhUZIOhHS5it0UFyY4qMt27-G8ghEKrBZx1MRv8rBQJuqd0Hr8Ik_cpI_2wLp3sFC8JqNM-EpYSwWO05vhE3Sdw9PEzbCXkzVPmOg-uSlPZpF0KXeyVk3xfuU-",
              "width" : 1920
           }
        ],
        "place_id" : "ChIJ3xeKYc7yGGARTWdXsxvmF2A",
        "plus_code" : {
           "compound_code" : "PM2P+J2 日本東京都中野區",
           "global_code" : "8Q7XPM2P+J2"
        },
        "price_level" : 1,
        "rating" : 3.7,
        "reference" : "ChIJ3xeKYc7yGGARTWdXsxvmF2A",
        "scope" : "GOOGLE",
        "types" : [ "restaurant", "food", "point_of_interest", "establishment" ],
        "user_ratings_total" : 70,
        "vicinity" : "フォレスト東中野, 1-chōme-6−１２ Higashinakano, Nakano City"
     },
     {
        "business_status" : "OPERATIONAL",
        "geometry" : {
           "location" : {
              "lat" : 35.69169659999999,
              "lng" : 139.6873447
           },
           "viewport" : {
              "northeast" : {
                 "lat" : 35.69304558029149,
                 "lng" : 139.6886936802915
              },
              "southwest" : {
                 "lat" : 35.69034761970849,
                 "lng" : 139.6859957197085
              }
           }
        },
        "icon" : "https://maps.gstatic.com/mapfiles/place_api/icons/v1/png_71/restaurant-71.png",
        "icon_background_color" : "#FF9E67",
        "icon_mask_base_uri" : "https://maps.gstatic.com/mapfiles/place_api/icons/v2/restaurant_pinlet",
        "name" : "KHANA Indian Restaurant",
        "opening_hours" : {
           "open_now" : true
        },
        "photos" : [
           {
              "height" : 2160,
              "html_attributions" : [
                 "\u003ca href=\"https://maps.google.com/maps/contrib/118252634782609753961\"\u003e奈塚Q弥\u003c/a\u003e"
              ],
              "photo_reference" : "Aap_uEDAUOuu0qkKJjLW8po3LItr81KPsvWZvD5UaP_S3ZC32nBSxKQAAc7Clt3jnMyYhlkWwgzD0__fbD7BSYguVccwgphhLIw___TxAfHh7I5pftsfp2amY1RHPhJm5ThCkLhnCK2xK4pbcolqpAY-ONVkSA7VgtFRnErambtUdBXfWrPQ",
              "width" : 3840
           }
        ],
        "place_id" : "ChIJAQBfjdXyGGARKUPAKzH-oro",
        "plus_code" : {
           "compound_code" : "MMRP+MW 日本東京都新宿區",
           "global_code" : "8Q7XMMRP+MW"
        },
        "price_level" : 2,
        "rating" : 4.3,
        "reference" : "ChIJAQBfjdXyGGARKUPAKzH-oro",
        "scope" : "GOOGLE",
        "types" : [
           "meal_delivery",
           "meal_takeaway",
           "restaurant",
           "food",
           "point_of_interest",
           "establishment"
        ],
        "user_ratings_total" : 292,
        "vicinity" : "6-chōme-16-12 Nishishinjuku, Shinjuku City"
     },
     {
        "business_status" : "OPERATIONAL",
        "geometry" : {
           "location" : {
              "lat" : 35.69527269999999,
              "lng" : 139.7013329
           },
           "viewport" : {
              "northeast" : {
                 "lat" : 35.6964578302915,
                 "lng" : 139.7026337302915
              },
              "southwest" : {
                 "lat" : 35.6937598697085,
                 "lng" : 139.6999357697085
              }
           }
        },
        "icon" : "https://maps.gstatic.com/mapfiles/place_api/icons/v1/png_71/bar-71.png",
        "icon_background_color" : "#FF9E67",
        "icon_mask_base_uri" : "https://maps.gstatic.com/mapfiles/place_api/icons/v2/bar_pinlet",
        "name" : "新宿天空ビアガーデン2021",
        "opening_hours" : {
           "open_now" : true
        },
        "photos" : [
           {
              "height" : 480,
              "html_attributions" : [
                 "\u003ca href=\"https://maps.google.com/maps/contrib/107063034661805349444\"\u003e新宿天空ビアガーデン2021\u003c/a\u003e"
              ],
              "photo_reference" : "Aap_uEDKfD_vGyKfCu4PAFZmhRWkAUq7R1E7rLD4PBVstGXPVptmZpMX24hafH6-a9mFhRd8XIbi5yidXjQ6MNUe5oS6x2MbLVBPPQPr8MDeOTKjff9Afn-NKgdjzU27YToxIUBiLsL7RTT9Fofv9Kzrvh2kOGqTcZccXNBdzLNrsnqPwc0",
              "width" : 480
           }
        ],
        "place_id" : "ChIJi5jlideMGGAROxZtsJ8y5I0",
        "plus_code" : {
           "compound_code" : "MPW2+4G 日本東京都新宿區",
           "global_code" : "8Q7XMPW2+4G"
        },
        "price_level" : 2,
        "rating" : 2.9,
        "reference" : "ChIJi5jlideMGGAROxZtsJ8y5I0",
        "scope" : "GOOGLE",
        "types" : [ "bar", "restaurant", "food", "point_of_interest", "establishment" ],
        "user_ratings_total" : 311,
        "vicinity" : "第二東亜会館, 屋上, 1-chōme-21−１ Kabukichō, Shinjuku City"
     },
     {
        "business_status" : "OPERATIONAL",
        "geometry" : {
           "location" : {
              "lat" : 35.6930515,
              "lng" : 139.6934308
           },
           "viewport" : {
              "northeast" : {
                 "lat" : 35.69440048029151,
                 "lng" : 139.6947797802915
              },
              "southwest" : {
                 "lat" : 35.69170251970851,
                 "lng" : 139.6920818197085
              }
           }
        },
        "icon" : "https://maps.gstatic.com/mapfiles/place_api/icons/v1/png_71/restaurant-71.png",
        "icon_background_color" : "#FF9E67",
        "icon_mask_base_uri" : "https://maps.gstatic.com/mapfiles/place_api/icons/v2/restaurant_pinlet",
        "name" : "Ootoya Shinjuku i-LAND Tower",
        "opening_hours" : {
           "open_now" : true
        },
        "photos" : [
           {
              "height" : 480,
              "html_attributions" : [
                 "\u003ca href=\"https://maps.google.com/maps/contrib/107150848226652365783\"\u003e早川瑞穂\u003c/a\u003e"
              ],
              "photo_reference" : "Aap_uEDc3Wl5Qp0NL2PjTdGgfMylJ8v2o2zIcJTdCEiFDkrQZQEBVOJLK0TfasMbp62m0IgZQ1X2q-ejM0DDvrDNw3brT0nVHDuqzrToGD29MXBRUBMQqcrocOrDJGAFOMHlpJ5Xz0K2UTtd1bvtxRS9zDF8X5j1ubbMBgB_v-1O1uiaPmvu",
              "width" : 640
           }
        ],
        "place_id" : "ChIJzfxOY9WMGGARrzxKs-TVwUM",
        "plus_code" : {
           "compound_code" : "MMVV+69 日本東京都新宿區",
           "global_code" : "8Q7XMMVV+69"
        },
        "price_level" : 2,
        "rating" : 3.7,
        "reference" : "ChIJzfxOY9WMGGARrzxKs-TVwUM",
        "scope" : "GOOGLE",
        "types" : [
           "meal_takeaway",
           "restaurant",
           "food",
           "point_of_interest",
           "store",
           "establishment"
        ],
        "user_ratings_total" : 214,
        "vicinity" : "新宿アイランドタワ B1F, 6-chōme-5−１ Nishishinjuku, Shinjuku City"
     },
     {
        "business_status" : "OPERATIONAL",
        "geometry" : {
           "location" : {
              "lat" : 35.6913342,
              "lng" : 139.6994139
           },
           "viewport" : {
              "northeast" : {
                 "lat" : 35.6926930802915,
                 "lng" : 139.7006342802915
              },
              "southwest" : {
                 "lat" : 35.6899951197085,
                 "lng" : 139.6979363197085
              }
           }
        },
        "icon" : "https://maps.gstatic.com/mapfiles/place_api/icons/v1/png_71/restaurant-71.png",
        "icon_background_color" : "#FF9E67",
        "icon_mask_base_uri" : "https://maps.gstatic.com/mapfiles/place_api/icons/v2/restaurant_pinlet",
        "name" : "銀座天一",
        "opening_hours" : {
           "open_now" : true
        },
        "photos" : [
           {
              "height" : 3265,
              "html_attributions" : [
                 "\u003ca href=\"https://maps.google.com/maps/contrib/117352006655415748002\"\u003et7 s\u003c/a\u003e"
              ],
              "photo_reference" : "Aap_uEAZ0vR4v2XD7bY4v97IQl8xdAmgc6Mrm9vAPMg9mdWX4nKvJJoS1FfgE6M30PLiz203CNgKIHR4-4FozLOZlnTfurCvpLjwEWR5yW0JdSD3dAYUI_e6pUvdXK6g0oAZ2RD3NzAeNDU00qQ7ihT5SVQFoT45xFubS3DF67ebCvuu_bi2",
              "width" : 4898
           }
        ],
        "place_id" : "ChIJ4egVzdCMGGARpVhed5AiWow",
        "plus_code" : {
           "compound_code" : "MMRX+GQ 日本東京都新宿區",
           "global_code" : "8Q7XMMRX+GQ"
        },
        "price_level" : 3,
        "rating" : 3.4,
        "reference" : "ChIJ4egVzdCMGGARpVhed5AiWow",
        "scope" : "GOOGLE",
        "types" : [ "restaurant", "food", "point_of_interest", "establishment" ],
        "user_ratings_total" : 41,
        "vicinity" : "小田急百貨店本館１２F, 1-chōme-1−３ Nishishinjuku, Shinjuku City"
     },
     {
        "business_status" : "OPERATIONAL",
        "geometry" : {
           "location" : {
              "lat" : 35.69225960000001,
              "lng" : 139.689624
           },
           "viewport" : {
              "northeast" : {
                 "lat" : 35.6936360802915,
                 "lng" : 139.6912395302915
              },
              "southwest" : {
                 "lat" : 35.69093811970851,
                 "lng" : 139.6885415697085
              }
           }
        },
        "icon" : "https://maps.gstatic.com/mapfiles/place_api/icons/v1/png_71/cafe-71.png",
        "icon_background_color" : "#FF9E67",
        "icon_mask_base_uri" : "https://maps.gstatic.com/mapfiles/place_api/icons/v2/cafe_pinlet",
        "name" : "星巴克 新宿綠色塔大樓店",
        "opening_hours" : {
           "open_now" : true
        },
        "photos" : [
           {
              "height" : 2160,
              "html_attributions" : [
                 "\u003ca href=\"https://maps.google.com/maps/contrib/109099987218626527192\"\u003eMCZ Archives\u003c/a\u003e"
              ],
              "photo_reference" : "Aap_uEDqrrfDJ6CDxnglWvu0q2Z3s_xy0ns7P76ej2rh6wukZ_fsQej6SP0O3SC-995y8aFAqp617GDJ_h724u-PN6LCqs9NkvZTm2Okd7NHCAt4RIPkJ0ezzAlRJNoRmRmxh1RLAqBMMyb67w1wQPXjN6BnFOhsN_i5K44bydfEwZK4f7d5",
              "width" : 3840
           }
        ],
        "place_id" : "ChIJBZNaZ9XyGGARvKKg2t4b0w4",
        "plus_code" : {
           "compound_code" : "MMRQ+WR 日本東京都新宿區",
           "global_code" : "8Q7XMMRQ+WR"
        },
        "price_level" : 2,
        "rating" : 4,
        "reference" : "ChIJBZNaZ9XyGGARvKKg2t4b0w4",
        "scope" : "GOOGLE",
        "types" : [
           "meal_takeaway",
           "cafe",
           "restaurant",
           "food",
           "point_of_interest",
           "store",
           "establishment"
        ],
        "user_ratings_total" : 290,
        "vicinity" : "新宿グリーンタワ, 6-chōme-14−１ Nishishinjuku, Shinjuku City"
     },
     {
        "business_status" : "OPERATIONAL",
        "geometry" : {
           "location" : {
              "lat" : 35.6964745,
              "lng" : 139.684464
           },
           "viewport" : {
              "northeast" : {
                 "lat" : 35.6978868302915,
                 "lng" : 139.6858446302915
              },
              "southwest" : {
                 "lat" : 35.6951888697085,
                 "lng" : 139.6831466697085
              }
           }
        },
        "icon" : "https://maps.gstatic.com/mapfiles/place_api/icons/v1/png_71/restaurant-71.png",
        "icon_background_color" : "#FF9E67",
        "icon_mask_base_uri" : "https://maps.gstatic.com/mapfiles/place_api/icons/v2/restaurant_pinlet",
        "name" : "Inagaki store",
        "opening_hours" : {
           "open_now" : true
        },
        "photos" : [
           {
              "height" : 2448,
              "html_attributions" : [
                 "\u003ca href=\"https://maps.google.com/maps/contrib/107804304792480228126\"\u003eさへきひろのぶ\u003c/a\u003e"
              ],
              "photo_reference" : "Aap_uEB152FhmqD1XMTWLm4dAjVxJKsc5BoyGH5M2IOhZQatk6yyacT6UmNx02_Le-NF239DmojzSRbSat3r8dFyVQ7TkKMWIy8_R9vml0KpYjhNOzJ3-PJ23nazHWGd-nZWl0QS_ylhDWjQe2jZ2JVbF36GhT5_XLDiZl77xiwJo8zXGQFN",
              "width" : 3264
           }
        ],
        "place_id" : "ChIJNc7eCNHyGGAR_m3vl2Sc8Pk",
        "plus_code" : {
           "compound_code" : "MMWM+HQ 日本東京都中野區",
           "global_code" : "8Q7XMMWM+HQ"
        },
        "price_level" : 1,
        "rating" : 3.3,
        "reference" : "ChIJNc7eCNHyGGAR_m3vl2Sc8Pk",
        "scope" : "GOOGLE",
        "types" : [
           "meal_takeaway",
           "restaurant",
           "food",
           "point_of_interest",
           "establishment"
        ],
        "user_ratings_total" : 31,
        "vicinity" : "1-chōme-32-27 Honchō, Nakano City"
     },
     {
        "business_status" : "OPERATIONAL",
        "geometry" : {
           "location" : {
              "lat" : 35.69315469999999,
              "lng" : 139.7016053
           },
           "viewport" : {
              "northeast" : {
                 "lat" : 35.6944887302915,
                 "lng" : 139.7029148302915
              },
              "southwest" : {
                 "lat" : 35.6917907697085,
                 "lng" : 139.7002168697085
              }
           }
        },
        "icon" : "https://maps.gstatic.com/mapfiles/place_api/icons/v1/png_71/restaurant-71.png",
        "icon_background_color" : "#FF9E67",
        "icon_mask_base_uri" : "https://maps.gstatic.com/mapfiles/place_api/icons/v2/restaurant_pinlet",
        "name" : "Shinjuku acacia",
        "opening_hours" : {
           "open_now" : true
        },
        "photos" : [
           {
              "height" : 1512,
              "html_attributions" : [
                 "\u003ca href=\"https://maps.google.com/maps/contrib/105309277159680654377\"\u003e洋食アカシア 新宿本店\u003c/a\u003e"
              ],
              "photo_reference" : "Aap_uEDT_T-jMrmhTZrSkzflAc7W5rkug1DCdhwu1KUGrwGu7QLIfsRqFEJ3UCwTjucqdiy96_vDEaReBC2aAr7elbkX4epCRPPo7PpT96ZZK9r3PHZ7qgjZoAAt5miDrBQCUyPSOyad3kowwrjcd_FFRir5dLtXP58tQdMSjD1Jx5pKs0gH",
              "width" : 2016
           }
        ],
        "place_id" : "ChIJW9hh4dmMGGARol7uFgcnYHg",
        "plus_code" : {
           "compound_code" : "MPV2+7J 日本東京都新宿區",
           "global_code" : "8Q7XMPV2+7J"
        },
        "price_level" : 2,
        "rating" : 4,
        "reference" : "ChIJW9hh4dmMGGARol7uFgcnYHg",
        "scope" : "GOOGLE",
        "types" : [
           "meal_delivery",
           "meal_takeaway",
           "restaurant",
           "food",
           "point_of_interest",
           "establishment"
        ],
        "user_ratings_total" : 1758,
        "vicinity" : "3-chōme-22-10 Shinjuku, Shinjuku City"
     },
     {
        "business_status" : "OPERATIONAL",
        "geometry" : {
           "location" : {
              "lat" : 35.7017833,
              "lng" : 139.6973053
           },
           "viewport" : {
              "northeast" : {
                 "lat" : 35.70313228029149,
                 "lng" : 139.6986542802915
              },
              "southwest" : {
                 "lat" : 35.7004343197085,
                 "lng" : 139.6959563197085
              }
           }
        },
        "icon" : "https://maps.gstatic.com/mapfiles/place_api/icons/v1/png_71/restaurant-71.png",
        "icon_background_color" : "#FF9E67",
        "icon_mask_base_uri" : "https://maps.gstatic.com/mapfiles/place_api/icons/v2/restaurant_pinlet",
        "name" : "Fukushin",
        "opening_hours" : {
           "open_now" : true
        },
        "photos" : [
           {
              "height" : 2448,
              "html_attributions" : [
                 "\u003ca href=\"https://maps.google.com/maps/contrib/107804304792480228126\"\u003eさへきひろのぶ\u003c/a\u003e"
              ],
              "photo_reference" : "Aap_uEDShH0mfnRB5NJVeLlZknTzb30uPe4M6I4-IEBb-HNjr901ztsyCoX6DwM8-dRRaWWoTOIFlw2eeH4vZBh0786z2UXawE9kdo5CPJwaSH2eArDem3Lb861cI-xERns0Z0A73QgZUwqF4lVBzq8NfJwrPwmKBZDk3YzpNx401Ote6NQ8",
              "width" : 3264
           }
        ],
        "place_id" : "ChIJMbi7iy6NGGARiBeFSJ6Vj9k",
        "plus_code" : {
           "compound_code" : "PM2W+PW 日本東京都新宿區",
           "global_code" : "8Q7XPM2W+PW"
        },
        "price_level" : 1,
        "rating" : 3.6,
        "reference" : "ChIJMbi7iy6NGGARiBeFSJ6Vj9k",
        "scope" : "GOOGLE",
        "types" : [
           "meal_takeaway",
           "restaurant",
           "food",
           "point_of_interest",
           "establishment"
        ],
        "user_ratings_total" : 199,
        "vicinity" : "2-chōme-21-3 Hyakuninchō, Shinjuku City"
     },
     {
        "business_status" : "OPERATIONAL",
        "geometry" : {
           "location" : {
              "lat" : 35.6999228,
              "lng" : 139.6965083
           },
           "viewport" : {
              "northeast" : {
                 "lat" : 35.7012267302915,
                 "lng" : 139.6977793802915
              },
              "southwest" : {
                 "lat" : 35.69852876970851,
                 "lng" : 139.6950814197085
              }
           }
        },
        "icon" : "https://maps.gstatic.com/mapfiles/place_api/icons/v1/png_71/restaurant-71.png",
        "icon_background_color" : "#FF9E67",
        "icon_mask_base_uri" : "https://maps.gstatic.com/mapfiles/place_api/icons/v2/restaurant_pinlet",
        "name" : "Pangyo Naengmyeon",
        "opening_hours" : {
           "open_now" : true
        },
        "photos" : [
           {
              "height" : 6936,
              "html_attributions" : [
                 "\u003ca href=\"https://maps.google.com/maps/contrib/116078370079347795998\"\u003eGalaxy Frog\u003c/a\u003e"
              ],
              "photo_reference" : "Aap_uEDF7NpGvo_lS_fyN2nJpHSRj3rcjaw-pQvZCy-AFqTVr78N2oahjzJxIKf0kMsAluXc4xCyyESU13YHXfGvxpE5j8qGCJs21tgpW2HV6SRYdMA0e2t-hhdnS1GScBLzaZPrabsQCcPgupruNyvG0gN88JgM4ghcCGvWcbN91YnYg-6u",
              "width" : 9248
           }
        ],
        "place_id" : "ChIJp2qyqC6NGGARqUCc1KouWEU",
        "plus_code" : {
           "compound_code" : "MMXW+XJ 日本東京都新宿區",
           "global_code" : "8Q7XMMXW+XJ"
        },
        "price_level" : 2,
        "rating" : 3.8,
        "reference" : "ChIJp2qyqC6NGGARqUCc1KouWEU",
        "scope" : "GOOGLE",
        "types" : [ "restaurant", "food", "point_of_interest", "establishment" ],
        "user_ratings_total" : 196,
        "vicinity" : "1-chōme-21-4 Hyakuninchō, Shinjuku City"
     },
     {
        "business_status" : "OPERATIONAL",
        "geometry" : {
           "location" : {
              "lat" : 35.6973355,
              "lng" : 139.6976346
           },
           "viewport" : {
              "northeast" : {
                 "lat" : 35.6986844802915,
                 "lng" : 139.6989835802915
              },
              "southwest" : {
                 "lat" : 35.6959865197085,
                 "lng" : 139.6962856197085
              }
           }
        },
        "icon" : "https://maps.gstatic.com/mapfiles/place_api/icons/v1/png_71/restaurant-71.png",
        "icon_background_color" : "#FF9E67",
        "icon_mask_base_uri" : "https://maps.gstatic.com/mapfiles/place_api/icons/v2/restaurant_pinlet",
        "name" : "漢堡王 新宿小滝橋店",
        "opening_hours" : {
           "open_now" : true
        },
        "photos" : [
           {
              "height" : 3024,
              "html_attributions" : [
                 "\u003ca href=\"https://maps.google.com/maps/contrib/116905243062296463439\"\u003eRado Odar\u003c/a\u003e"
              ],
              "photo_reference" : "Aap_uEC6YgFKYYh9XmTm14iYwD4CDXjeQpPxdVbBFx0yfjE7hEeM7Kjn-aVEfyvAJ6YRQMg3WT0V1p7RA-rlagVKYwkgFecJiTYr-P5UfYOjigMaVUV5865JD4ORr9n8dB_qLf_8KVBo1-vGH-vkMzF-VkKqp4WV6ZOyDDghGQtbfiQmwgZG",
              "width" : 4032
           }
        ],
        "place_id" : "ChIJibzFoSmNGGARKC5SIluT9Wc",
        "plus_code" : {
           "compound_code" : "MMWX+W3 日本東京都新宿區",
           "global_code" : "8Q7XMMWX+W3"
        },
        "price_level" : 2,
        "rating" : 3.6,
        "reference" : "ChIJibzFoSmNGGARKC5SIluT9Wc",
        "scope" : "GOOGLE",
        "types" : [ "restaurant", "food", "point_of_interest", "establishment" ],
        "user_ratings_total" : 478,
        "vicinity" : "第一守徳ビル 1F, 7-chōme-7−２７ Nishishinjuku, Shinjuku City"
     }
  ],
  "status" : "OK"
}
