import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import "leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.css";
import "leaflet-defaulticon-compatibility";

const Map = () => {
  return (
    <MapContainer
      center={[36.8253, 38.0241]}
      zoom={9}
      scrollWheelZoom={false}
      style={{ height: "100%", width: "100%" }}
    >
      <TileLayer
        url={`https://dh.gu.se/tiles/imperium/{z}/{x}/{y}.png`}
        attribution="The map is licenced under a Creative Commons Attribution 4.0 International license (CC BY 4.0)"
      />
      <Marker position={[36.8253, 38.0241]} draggable={false} animate={true}>
        <Popup>Dura Europos - Obecne wydarzenia w kampanii</Popup>
      </Marker>
    </MapContainer>
  );
};

export default Map;
