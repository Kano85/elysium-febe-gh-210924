import React, { useRef, useEffect, useState } from 'react';
import mapboxgl from 'mapbox-gl';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';

interface ContactMapProps { address: string; }

const ContactMap: React.FC<ContactMapProps> = ({ address }) => {
  const mapContainer = useRef<HTMLDivElement>(null);
  const [lngLat, setLngLat] = useState<[number, number]>([0, 0]);
  const [zoom] = useState(14);

  useEffect(() => {
    mapboxgl.accessToken = process.env.NEXT_PUBLIC_MAPBOX_ACCESS_TOKEN || '';
    const geocode = async () => {
      const res = await fetch(
        `https://api.mapbox.com/geocoding/v5/mapbox.places/${encodeURIComponent(
          address
        )}.json?access_token=${mapboxgl.accessToken}`
      );
      const data = await res.json();
      if (data.features?.length) {
        const [lng, lat] = data.features[0].center;
        setLngLat([lng, lat]);
      }
    };
    geocode();
  }, [address]);

  useEffect(() => {
    if (!mapContainer.current || (lngLat[0] === 0 && lngLat[1] === 0)) return;
    const map = new mapboxgl.Map({
      container: mapContainer.current,
      style: 'mapbox://styles/mapbox/streets-v11',
      center: lngLat,
      zoom,
    });
    new mapboxgl.Marker().setLngLat(lngLat).addTo(map);
    return () => map.remove();
  }, [lngLat, zoom]);

  return (
    <Card className="mt-8">
      <CardHeader>
        <CardTitle>Our Location</CardTitle>
      </CardHeader>
      <CardContent>
        <div ref={mapContainer} className="w-full h-64 rounded-lg" />
      </CardContent>
    </Card>
  );
};

export default ContactMap;
