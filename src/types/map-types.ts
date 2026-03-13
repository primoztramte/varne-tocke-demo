export interface Pin {
  id: string;
  latitude: number;
  longitude: number;
  name: string;
  title: string;
  address: string;
}

export interface MapConfig {
  containerId: string;
  center: [number, number];
  zoom: number;
  pins?: Pin[];
}
