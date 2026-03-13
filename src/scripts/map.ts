import mapboxgl from 'mapbox-gl';
import type { MapConfig } from '../types/map-types';

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

  // display safe locations as pins on the map
  if (config.pins && config.pins.length > 0) {
    config.pins.forEach((pin) => {

      // Create custom marker element with marker.svg
      const markerEl = document.createElement('div');
      markerEl.className = 'custom-marker-icon';
      markerEl.innerHTML = `<img src="/assets/icons/marker.svg" alt="Location marker" class="w-8 h-8" />`;

      new mapboxgl.Marker({ element: markerEl })
        .setLngLat([pin.longitude, pin.latitude])
        .addTo(map);
    });
  }

  return map;
}
