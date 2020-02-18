const HERE_API_KEY = process.env.REACT_APP_HERE_API_KEY;
const GEONAMES_API_USERNAME = process.env.REACT_APP_GEONAMES_API_USERNAME;

const api = [];

api.HERE_findLatLngByPlaceName = place =>
    `https://geocoder.ls.hereapi.com/6.2/geocode.json?searchtext=${place}&apiKey=${HERE_API_KEY}&gen=9`;

api.GEONAMES_findNearbyPlaceNamesByLatLng = ({ lat, lng, limit = 4 }) =>
    `http://api.geonames.org/findNearbyPlaceNameJSON?lat=${lat}&lng=${lng}&username=${GEONAMES_API_USERNAME}&maxRows=${limit}&radius=300&cities=cities15000`;

export default api;
