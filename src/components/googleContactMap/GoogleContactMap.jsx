"use client";
import React from "react";
import dynamic from "next/dynamic";
import "leaflet/dist/leaflet.css";
import L from "leaflet";

// Dynamically import React-Leaflet components (to prevent SSR issues)
const MapContainer = dynamic(() => import("react-leaflet").then((mod) => mod.MapContainer), { ssr: false });
const TileLayer = dynamic(() => import("react-leaflet").then((mod) => mod.TileLayer), { ssr: false });
const Marker = dynamic(() => import("react-leaflet").then((mod) => mod.Marker), { ssr: false });
const Popup = dynamic(() => import("react-leaflet").then((mod) => mod.Popup), { ssr: false });

// Fix Leaflet marker icon issue for Next.js
const customIcon = new L.Icon({
  iconUrl: "/leaflet/marker-icon.png", // ✅ Use public folder path
  shadowUrl: "/leaflet/marker-shadow.png",
  iconSize: [25, 41],
  iconAnchor: [12, 41],
});

const GoogleContactMap = ({ type }) => {
  return (
    <>
      {type === "google" ? (
        <iframe
          width="100%"
          height="400"
          frameBorder="0"
          scrolling="no"
          marginHeight="0"
          marginWidth="0"
          src="https://maps.google.com/maps?q=Mumbai,India&output=embed"
        ></iframe>
      ) : type === "leaflet" ? (
        <MapContainer center={[19.076, 72.8777]} zoom={12} style={{ height: "400px", width: "100%" }}>
          <TileLayer
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          />
          <Marker position={[19.076, 72.8777]} icon={customIcon}>
            <Popup>Mumbai, India</Popup>
          </Marker>
        </MapContainer>
      ) : (
        <p>No map type selected</p>
      )}
    </>
  );
};

export default GoogleContactMap;
