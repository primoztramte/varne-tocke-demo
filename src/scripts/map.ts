import mapboxgl from 'mapbox-gl';

export interface MapConfig {
  containerId: string;
  center: [number, number];
  zoom: number;
}

export function initializeMap(config: MapConfig): mapboxgl.Map | null {
  const mapEl = document.getElementById(config.containerId);

  if (!mapEl) {
    console.error(`Element with id "${config.containerId}" not found`);
    return null;
  }

  mapboxgl.accessToken = import.meta.env.PUBLIC_MAPBOX_ACCESS_TOKEN;

  const map = new mapboxgl.Map({
    container: config.containerId,
    center: config.center,
    style: 'mapbox://styles/mapbox/streets-v12',
    zoom: config.zoom,
    cooperativeGestures: true,
  });

  map.addControl(
    new mapboxgl.NavigationControl({
      showCompass: false,
    })
  );

  map.addControl(new mapboxgl.FullscreenControl());

  return map;
}
