import { MyInterface } from './interface';

export interface Place extends MyInterface {
  place_name: string;
  google_maps_url: string;
  longitude: number;
  latitude: number;
  asian: boolean;
  mexican: boolean;
  italian: boolean;
  drinks: boolean;
  middle_east: boolean;
  western: boolean;
}
