import React from "react";
import { compose, withProps } from "recompose";
import {
    withScriptjs,
    withGoogleMap,
    GoogleMap,
    Marker
  } from "react-google-maps";

  const GoogleMapComponent = compose(
    withProps({
      googleMapURL:
        "https://maps.googleapis.com/maps/api/js?key=AIzaSyBRMci-T1iyqwhQT95JK4f-OtcjXhLmy54&v=3.exp&libraries=geometry,drawing,places",
      loadingElement: <div style={{ height: `100%` }} />,
      containerElement: <div style={{ height: `400px` }} />,
      mapElement: <div style={{ height: `100%` }} />
    }),
    withScriptjs,
    withGoogleMap
  )(props => (
    <GoogleMap defaultZoom={8} defaultCenter={{ lat: 16.061090, lng: 108.226767 }}>
      {props.isMarkerShown && (
        <Marker position={{ lat: 16.061090, lng: 108.226767  }} />
      )}
    </GoogleMap>
  ));

  export default GoogleMapComponent