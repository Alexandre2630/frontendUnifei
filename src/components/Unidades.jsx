import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';

export default function MapaItabira() {
  return (
    <div>
      <h2>Mapa de Itabira, MG</h2>
      <div style={{ height: '300px', width: '50%' }}>
        <MapContainer
          center={[-19.6236, -43.2342]} // Coordenadas de Itabira, MG
          zoom={13} // Zoom inicial
          style={{ height: '100%', width: '100%' }} // Estilo do mapa
        >
          <TileLayer
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" // URL do provedor de tiles (OpenStreetMap)
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors' // Atribuição
          />
          <Marker position={[-19.6236, -43.2342]}> {/* Posição do marcador (Itabira, MG) */}
            <Popup>
              Itabira, MG <br /> Cidade maravilhosa!
            </Popup>
          </Marker>
        </MapContainer>
      </div>
    </div>
  );
}


