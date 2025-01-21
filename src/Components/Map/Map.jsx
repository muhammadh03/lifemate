import { useEffect } from 'react';

const Map = () => {

  useEffect(() => {
    // Initialize the map
    const initMap = () => {
      const dehiwala = { lat: 6.8431, lng: 79.8678 }; // Dehiwala coordinates

      const map = new window.google.maps.Map(document.getElementById('map'), {
        zoom: 14,
        center: dehiwala,
      });

      new window.google.maps.Marker({
        position: dehiwala,
        map: map,
      });
    };

    // Load Google Maps script dynamically
    const loadGoogleMapsScript = () => {
      const script = document.createElement('script');
      script.src = `https://maps.googleapis.com/maps/api/js?key=YOUR_API_KEY&callback=initMap`;
      script.async = true;
      script.defer = true;
      window.initMap = initMap; // Assign initMap to global window object
      document.body.appendChild(script);
    };

    loadGoogleMapsScript();
  }, []);

  return <div id="map" className="w-full h-96"></div>;
};

export default Map;

















// import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';

// const Map = () => {

//   const mapContainerStyle = {
//     width: '100%',
//     height: '400px',
//   }

//   const center = { lat: 6.8431, lng: 79.8678 }; // Dehiwala coordinates

//   return (
//     <LoadScript googleMapsApiKey="https://maps.googleapis.com/maps/api/js?key=YOUR_API_KEY&callback=initMap">
//       <GoogleMap
//         mapContainerStyle={mapContainerStyle}
//         center={center}
//         zoom={15}
//       >
//         <Marker position={center} />
//       </GoogleMap>
//     </LoadScript>
//   )
// };

// export default Map;
