import React, { useEffect, useRef, useState } from "react";
import {
  YMaps,
  Map,
  Placemark,
  SearchControl,
  TypeSelector
} from "@pbe/react-yandex-maps";
const API_KEY = "042f111e-950a-4c61-8423-0f8edc7c8731";

const constCenter = [62.02816609650112,129.7302186550424];

const images = [...Array(5)].map((n, i) => {
  const letter = String.fromCharCode(i + 97);
  return `https://img.icons8.com/ios-filled/2x/marker-${letter}.png`;
});

const MapPage = (props) => {
  const ref = useRef();
  const ref2 = useRef();
  const ymaps = React.useRef(null);

  const [newCoords, setNewCoords] = useState([
    constCenter
  ]);

  const [address, setAddress] = useState("");
  const [value, setValue] = useState("");
  const [options, setOptions] = useState([]);

  useEffect(() => {
    (async () => {
      try {
        if (value) {
          const res = await fetch(
            `https://api-maps.yandex.ru/2.1/?apikey=042f111e-950a-4c61-8423-0f8edc7c8731&lang=ru_RU`
          );
          const data = await res.json();
          const collection = data.response.GeoObjectCollection.featureMember.map(
            (item) => item.GeoObject
          );
          setOptions(() => collection);
        }
      } catch (e) {
        console.log(e);
      }
    })();
  }, [value]);

  return (
    <YMaps
      query={{
        load: "package.full",
        apikey: API_KEY
      }}
    >
      <Map
        instanceRef={ref2}
        state={{
          center: constCenter,
          zoom: 9,
          controls: ["zoomControl"]
        }}
        onLoad={(e) => {
          ymaps.current = e;
          const points = [
            [48.024402067130715, 39.85466330972504],
            [46.780699672601415, 39.807971415195674]
          ];
          const bounds = e.util.bounds.fromPoints(points);
          const pos = e.util.bounds.getCenterAndZoom(bounds, [700, 700]);
          ref2.current.setZoom(pos.zoom);
          ref2.current.setCenter(pos.center);
          ref2.current.setBounds(bounds, { checkZoomRange: true });

          e.geocode(newCoords).then((res) => {
            const firstGeoObject = res.geoObjects.get(0);
            const newAddress = [
              firstGeoObject.getLocalities().length
                ? firstGeoObject.getLocalities()
                : firstGeoObject.getAdministrativeAreas(),
              firstGeoObject.getThoroughfare() || firstGeoObject.getPremise(),
              firstGeoObject.getPremiseNumber()
            ]
              .filter(Boolean)
              .join(", ");

            setAddress(() => newAddress);
            setValue(() => newAddress);
          });
        }}
        width="100vw"
        height="100vh"
        modules={["control.ZoomControl"]}
        onClick={(event) => {
          const coords = event.get("coords");
          setNewCoords(() => coords);

          ymaps.current.geocode(coords).then((res) => {
            const firstGeoObject = res.geoObjects.get(0);
            const newAddress = [
              firstGeoObject.getLocalities().length
                ? firstGeoObject.getLocalities()
                : firstGeoObject.getAdministrativeAreas(),
              firstGeoObject.getThoroughfare() || firstGeoObject.getPremise(),
              firstGeoObject.getPremiseNumber()
            ]
              .filter(Boolean)
              .join(", ");
            ref.current.getMap().hint.open(coords, newAddress);
            setAddress(() => newAddress);
            setValue(() => newAddress);
          });
        }}
      >
   

        {/* <Placemark
          instanceRef={ref}
          onDragEnd={(event) => {
            const coords = ref.current.geometry._coordinates;
            setNewCoords(() => coords);
            ymaps.current.geocode(coords).then((res) => {
              const firstGeoObject = res.geoObjects.get(0);
              const newAddress = [
                firstGeoObject.getLocalities().length
                  ? firstGeoObject.getLocalities()
                  : firstGeoObject.getAdministrativeAreas(),
                firstGeoObject.getThoroughfare() || firstGeoObject.getPremise(),
                firstGeoObject.getPremiseNumber()
              ]
                .filter(Boolean)
                .join(", ");
              ref.current.getMap().hint.open(coords, newAddress);
              setAddress(() => newAddress);
              setValue(() => newAddress);
            });
          }}
          geometry={newCoords}
          options={{
            iconImageSize: [30, 30],
            draggable: true,
            preset: "islands#greenIcon",
            hideIconOnBalloonOpen: false,
            openEmptyHint: true
          }}
          properties={{
            iconContent: "+",
            hintContent: address
          }}
        />
        {images.map((n, i) => {
          return (
            <Placemark
              onClick={() => {
                alert("Вы нажали метку " + (i + 1));
              }}
              key={n}
              defaultGeometry={center.map((c) => c + (Math.random() - 0.5))}
              options={{
                iconImageSize: [10, 10],
                preset: "islands#yellowDotIcon"
              }}
            />
          );
        })} */}
      </Map>
    </YMaps>
  );
}
export default MapPage;