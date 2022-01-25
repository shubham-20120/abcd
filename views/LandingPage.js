import React, { useEffect, useState } from 'react';
import { withGoogleMap, GoogleMap, withScriptjs, InfoWindow, Marker } from "react-google-maps";
import Geocode from "react-geocode";
import Autocomplete from 'react-google-autocomplete';
import { Descriptions } from 'antd';

const { MarkerWithLabel } = require("react-google-maps/lib/components/addons/MarkerWithLabel");


Geocode.setApiKey("AIzaSyCEPtuyw53nMn4zizjwlGJKc3h3JyFWoQ8");
Geocode.enableDebug();


// const LocationSearchModal=()=> {
//     const [state, setState] = useState({
//         address: '',
//         city: '',
//         area: '',
//         state: '',
//         zoom: 15,
//         height: 400,
//         mapPosition: {
//             lat: 0,
//             lng: 0,
//         },
//         markerPosition: {
//             lat: 0,
//             lng: 0,
//         }
//     })


//     useEffect(()=> {
//         if (navigator.geolocation) {
//             navigator.geolocation.getCurrentPosition(position => {
//                 setState({
//                     mapPosition: {
//                         lat: position.coords.latitude,
//                         lng: position.coords.longitude,
//                     },
//                     markerPosition: {
//                         lat: position.coords.latitude,
//                         lng: position.coords.longitude,
//                     }
//                 },
//                     () => {
//                         Geocode.fromLatLng(position.coords.latitude, position.coords.longitude).then(
//                             response => {
//                                 console.log(response)
//                                 const address = response.results[0].formatted_address,
//                                     addressArray = response.results[0].address_components,
//                                     city = getCity(addressArray),
//                                     area = getArea(addressArray),
//                                     state = getState(addressArray);
//                                 console.log('city', city, area, state);
//                                 setState({
//                                     address: (address) ? address : '',
//                                     area: (area) ? area : '',
//                                     city: (city) ? city : '',
//                                     state: (state) ? state : '',
//                                 })
//                             },
//                             error => {
//                                 console.error(error);
//                             }
//                         );

//                     })
//             });
//         } else {
//             console.error("Geolocation is not supported by browser!");
//         }
//     }, [])
//     const getCity = (addressArray) => {
//         let city = '';
//         for (let i = 0; i < addressArray.length; i++) {
//             if (addressArray[i].types[0] && 'administrative_area_level_2' === addressArray[i].types[0]) {
//                 city = addressArray[i].long_name;
//                 console.log('city: ', city);
//                 return city;
//             }
//         }
//     };

//     const getArea = (addressArray) => {
//         let area = '';
//         for (let i = 0; i < addressArray.length; i++) {
//             if (addressArray[i].types[0]) {
//                 for (let j = 0; j < addressArray[i].types.length; j++) {
//                     if ('sublocality_level_1' === addressArray[i].types[j] || 'locality' === addressArray[i].types[j]) {
//                         area = addressArray[i].long_name;
//                         return area;
//                     }
//                 }
//             }
//         }
//     };

//     const getState = (addressArray) => {
//         let state = '';
//         for (let i = 0; i < addressArray.length; i++) {
//             for (let i = 0; i < addressArray.length; i++) {
//                 if (addressArray[i].types[0] && 'administrative_area_level_1' === addressArray[i].types[0]) {
//                     state = addressArray[i].long_name;
//                     return state;
//                 }
//             }
//         }
//     };

//     const reverseGeocode = ({ latitude: lat, longitude: lng }) => {
//         const url = `https://maps.googleapis.com/maps/api/geocode/json?key=AIzaSyCEPtuyw53nMn4zizjwlGJKc3h3JyFWoQ8&latlng=${lat},${lng}`;
//         // searchInput.current.value = "Getting your location...";
//         fetch(url)
//             .then(response => response.json())
//             .then(location => {
//                 const place = location.results[0];
//                 console.log('place fromm current, ', place);
//                 // setAddress(_address);
//                 console.log(place.geometry.location.lat);
//                 console.log(place.geometry.location.lng);
//                 // setLat(place.geometry.location.lat)
//                 // setLng(place.geometry.location.lng)
//                 // setShow(true);
//                 // const _address = extractAddress(place);
//                 // searchInput.current.value = _address.plain();
//             })

//     }


//     const findMyLocation = () => {
//         // setShow(false)
//         console.log('called here 1');
//         navigator.geolocation.getCurrentPosition((position) => {
//             console.log(position.coords.latitude, position.coords.longitude);
//           });
//         // if (navigator.geolocation) {
//         //     console.log('called here 2');
//         //     navigator.geolocation.getCurrentPosition(position => {
//         //         console.log(position);
//         //         reverseGeocode(position.coords)
//         //     }, err=>{
//         //         console.log(err);
//         //     })
//         // }else{
//         //     console.log(2);
//         // }
//     }

//     const onChange = (event) => {
//         setState({ [event.target.name]: event.target.value });
//     };

//     const onInfoWindowClose = (event) => { };

//     const onMarkerDragEnd = (event) => {
//         let newLat = event.latLng.lat(),
//             newLng = event.latLng.lng();
//         console.log('longitude: ', newLng);
//         console.log('lattitude: ', newLat);

//         Geocode.fromLatLng(newLat, newLng).then(
//             response => {
//                 const address = response.results[0].formatted_address;
//                 const addressArray = response.results[0].address_components;
//                 const city = getCity(addressArray);
//                 const area = getArea(addressArray);
//                 const state = getState(addressArray);
//                 setState({
//                     address: (address) ? address : '',
//                     area: (area) ? area : '',
//                     city: (city) ? city : '',
//                     state: (state) ? state : '',
//                     markerPosition: {
//                         lat: newLat,
//                         lng: newLng
//                     },
//                     mapPosition: {
//                         lat: newLat,
//                         lng: newLng
//                     },
//                 })
//                 console.log('address: ', response.results[0]);
//             },
//             error => {
//                 console.error(error);
//             }
//         );
//     };

//     const onPlaceSelected = (place) => {
//         console.log('plc', place);
//         const address = place.formatted_address,
//             addressArray = place.address_components,
//             city = getCity(addressArray),
//             area = getArea(addressArray),
//             state = getState(addressArray),
//             latValue = place.geometry.location.lat(),
//             lngValue = place.geometry.location.lng();

//         console.log('latvalue', latValue)
//         console.log('lngValue', lngValue)

//         // Set these values in the state.
//         setState({
//             address: (address) ? address : '',
//             area: (area) ? area : '',
//             city: (city) ? city : '',
//             state: (state) ? state : '',
//             markerPosition: {
//                 lat: latValue,
//                 lng: lngValue
//             },
//             mapPosition: {
//                 lat: latValue,
//                 lng: lngValue
//             },
//         })
//     };
//     const AsyncMap = withScriptjs(
//         withGoogleMap(
//             props => (
//                 <>
//                     <GoogleMap
//                         defaultZoom={state.zoom}
//                         defaultCenter={{ lat: state.mapPosition.lat, lng: state.mapPosition.lng }}
//                         onClick={onMarkerDragEnd}
//                     >
//                         <Autocomplete
//                             style={{
//                                 width: '100%',
//                                 height: '40px',
//                                 paddingLeft: '16px',
//                                 marginTop: '2px',
//                                 marginBottom: '2rem'
//                             }}
//                             onPlaceSelected={onPlaceSelected}
//                             types={['(regions)']}
//                         />
//                         <Marker
//                             google={props.google}
//                             name={'Dolores park'}
//                             draggable={true}
//                             onDragEnd={onMarkerDragEnd}
//                             position={{ lat: state.markerPosition.lat, lng: state.markerPosition.lng }}
//                         />
//                             <InfoWindow
//                                 onClose={onInfoWindowClose}
//                                 position={{ lat: (state.markerPosition.lat + 0.0018), lng: state.markerPosition.lng }}
//                             >
//                                 <div>
//                                     <span style={{ padding: 0, margin: 0 }}>{state.address}</span>
//                                 </div>
//                             </InfoWindow>
//                         <Marker />
//                     </GoogleMap>
//                     {/* <button onClick={findMyLocation}>current</button> */}
//                 </>
//             )
//         )
//     );

//     return (
//         <div style={{ padding: '1rem', margin: '0 auto', maxWidth: 1000 }}>
//             <AsyncMap
//                 googleMapURL="https://maps.googleapis.com/maps/api/js?key=AIzaSyCEPtuyw53nMn4zizjwlGJKc3h3JyFWoQ8&libraries=places"
//                 loadingElement={
//                     <div style={{ height: `100%` }} />
//                 }
//                 containerElement={
//                     <div style={{ height: state.height }} />
//                 }
//                 mapElement={
//                     <div style={{ height: `100%` }} />
//                 }
//             />
//         </div>
//     )

// }

// export default LocationSearchModal;



class LocationSearchModal extends React.Component {

    state = {
        address: '',
        city: '',
        area: '',
        state: '',
        zoom: 15,
        height: 400,
        mapPosition: {
            lat: 0,
            lng: 0,
        },
        markerPosition: {
            lat: 0,
            lng: 0,
        }
    }


    componentDidMount() {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(position => {
                this.setState({
                    mapPosition: {
                        lat: position.coords.latitude,
                        lng: position.coords.longitude,
                    },
                    markerPosition: {
                        lat: position.coords.latitude,
                        lng: position.coords.longitude,
                    }
                },
                    () => {
                        Geocode.fromLatLng(position.coords.latitude, position.coords.longitude).then(
                            response => {
                                console.log(response)
                                const address = response.results[0].formatted_address,
                                    addressArray = response.results[0].address_components,
                                    city = this.getCity(addressArray),
                                    area = this.getArea(addressArray),
                                    state = this.getState(addressArray);
                                console.log('city', city, area, state);
                                this.setState({
                                    address: (address) ? address : '',
                                    area: (area) ? area : '',
                                    city: (city) ? city : '',
                                    state: (state) ? state : '',
                                })
                            },
                            error => {
                                console.error(error);
                            }
                        );

                    })
            });
        } else {
            console.error("Geolocation is not supported by this browser!");
        }
    };
    getCity = (addressArray) => {
        let city = '';
        for (let i = 0; i < addressArray.length; i++) {
            if (addressArray[i].types[0] && 'administrative_area_level_2' === addressArray[i].types[0]) {
                city = addressArray[i].long_name;
                return city;
            }
        }
    };

    getArea = (addressArray) => {
        let area = '';
        for (let i = 0; i < addressArray.length; i++) {
            if (addressArray[i].types[0]) {
                for (let j = 0; j < addressArray[i].types.length; j++) {
                    if ('sublocality_level_1' === addressArray[i].types[j] || 'locality' === addressArray[i].types[j]) {
                        area = addressArray[i].long_name;
                        return area;
                    }
                }
            }
        }
    };

    getState = (addressArray) => {
        let state = '';
        for (let i = 0; i < addressArray.length; i++) {
            for (let i = 0; i < addressArray.length; i++) {
                if (addressArray[i].types[0] && 'administrative_area_level_1' === addressArray[i].types[0]) {
                    state = addressArray[i].long_name;
                    return state;
                }
            }
        }
    };

    reverseGeocode = ({ latitude: lat, longitude: lng }) => {
        const url = `https://maps.googleapis.com/maps/api/geocode/json?key=AIzaSyCEPtuyw53nMn4zizjwlGJKc3h3JyFWoQ8&latlng=${lat},${lng}`;
        // searchInput.current.value = "Getting your location...";
        fetch(url)
            .then(response => response.json())
            .then(location => {
                const place = location.results[0];
                console.log('place fromm current, ', place);
                // setAddress(_address);
                console.log(place.geometry.location.lat);
                console.log(place.geometry.location.lng);
                // setLat(place.geometry.location.lat)
                // setLng(place.geometry.location.lng)
                // setShow(true);
                // const _address = extractAddress(place);
                // searchInput.current.value = _address.plain();
            })

    }


    findMyLocation = () => {
        // setShow(false)
        console.log('called here 1');
        navigator.geolocation.getCurrentPosition((position) => {
            console.log(position.coords.latitude, position.coords.longitude);
          });
        // if (navigator.geolocation) {
        //     console.log('called here 2');
        //     navigator.geolocation.getCurrentPosition(position => {
        //         console.log(position);
        //         this.reverseGeocode(position.coords)
        //     }, err=>{
        //         console.log(err);
        //     })
        // }else{
        //     console.log(2);
        // }
    }

    onChange = (event) => {
        this.setState({ [event.target.name]: event.target.value });
    };

    onInfoWindowClose = (event) => { };

    onMarkerDragEnd = (event) => {
        let newLat = event.latLng.lat(),
            newLng = event.latLng.lng();
        console.log('longitude: ', newLng);
        console.log('lattitude: ', newLat);

        Geocode.fromLatLng(newLat, newLng).then(
            response => {
                const address = response.results[0].formatted_address,
                    addressArray = response.results[0].address_components,
                    city = this.getCity(addressArray),
                    area = this.getArea(addressArray),
                    state = this.getState(addressArray);
                this.setState({
                    address: (address) ? address : '',
                    area: (area) ? area : '',
                    city: (city) ? city : '',
                    state: (state) ? state : '',
                    markerPosition: {
                        lat: newLat,
                        lng: newLng
                    },
                    mapPosition: {
                        lat: newLat,
                        lng: newLng
                    },
                })
            },
            error => {
                console.error(error);
            }
        );
    };

    onPlaceSelected = (place) => {
        console.log('plc', place);
        const address = place.formatted_address,
            addressArray = place.address_components,
            city = this.getCity(addressArray),
            area = this.getArea(addressArray),
            state = this.getState(addressArray),
            latValue = place.geometry.location.lat(),
            lngValue = place.geometry.location.lng();

        console.log('latvalue', latValue)
        console.log('lngValue', lngValue)

        // Set these values in the state.
        this.setState({
            address: (address) ? address : '',
            area: (area) ? area : '',
            city: (city) ? city : '',
            state: (state) ? state : '',
            markerPosition: {
                lat: latValue,
                lng: lngValue
            },
            mapPosition: {
                lat: latValue,
                lng: lngValue
            },
        })
    };
    render() {
        const AsyncMap = withScriptjs(
            withGoogleMap(
                props => (
                    <>
                        <GoogleMap
                            defaultZoom={this.state.zoom}
                            defaultCenter={{ lat: this.state.mapPosition.lat, lng: this.state.mapPosition.lng }}
                            onClick={this.onMarkerDragEnd}
                        >
                            <Autocomplete
                                style={{
                                    width: '100%',
                                    height: '40px',
                                    paddingLeft: '16px',
                                    marginTop: '2px',
                                    marginBottom: '2rem'
                                }}
                                onPlaceSelected={this.onPlaceSelected}
                                types={['(regions)']}
                            />
                            <Marker
                                google={this.props.google}
                                name={'Dolores park'}
                                draggable={true}
                                onDragEnd={this.onMarkerDragEnd}
                                position={{ lat: this.state.markerPosition.lat, lng: this.state.markerPosition.lng }}
                            />
                                <InfoWindow
                                    onClose={this.onInfoWindowClose}
                                    position={{ lat: (this.state.markerPosition.lat + 0.0018), lng: this.state.markerPosition.lng }}
                                >
                                    <div>
                                        <span style={{ padding: 0, margin: 0 }}>{this.state.address}</span>
                                    </div>
                                </InfoWindow>
                            <Marker />
                        </GoogleMap>
                        {/* <button onClick={this.findMyLocation}>current</button> */}
                    </>
                )
            )
        );

        return (
            <div style={{ padding: '1rem', margin: '0 auto', maxWidth: 1000 }}>
                <AsyncMap
                    googleMapURL="https://maps.googleapis.com/maps/api/js?key=AIzaSyCEPtuyw53nMn4zizjwlGJKc3h3JyFWoQ8&libraries=places"
                    loadingElement={
                        <div style={{ height: `100%` }} />
                    }
                    containerElement={
                        <div style={{ height: this.state.height }} />
                    }
                    mapElement={
                        <div style={{ height: `100%` }} />
                    }
                />
            </div>
        )
    }

}

export default LocationSearchModal;
