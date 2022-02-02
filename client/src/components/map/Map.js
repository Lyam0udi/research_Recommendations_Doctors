import React from 'react'
import mapboxgl from 'mapbox-gl';
import './map.css'

mapboxgl.accessToken = 'pk.eyJ1IjoidG9paGlyaGFsaW0iLCJhIjoiY2tsODJ6OXljMm9vdDJ1bGJsd292aW1xcCJ9.UrfZ0wMic8Z1__xX8ku_kg';

export default class Map extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            lng: props.lng ? props.lng : -5.8085,
            lat: props.lat ? props.lat : 35.7795,
            zoom: 15,
            printMarker: props.printMarker && props.lng && props.lat
        };
    }

    componentDidMount() {
        const map = new mapboxgl.Map({
            container: 'mapcontainer',
            style: 'mapbox://styles/mapbox/streets-v11',
            center: [this.state.lng, this.state.lat],
            zoom: this.state.zoom
        });

        map.on('move', () => {
            this.setState({
                lng: map.getCenter().lng.toFixed(4),
                lat: map.getCenter().lat.toFixed(4),
                zoom: map.getZoom().toFixed(2)
            });
        });

        map.on('load', function () {
            map.resize();
        });

        var marker = new mapboxgl.Marker()
            .setLngLat([this.state.lng, this.state.lat])

        if (this.state.printMarker) {
            marker.addTo(map);
        }

    }

    render() {
        return (
            <div>
                <div className='sidebarStyle'>
                    <div>Longitude: {this.state.lng} | Latitude: {this.state.lat} | Zoom: {this.state.zoom}</div>
                </div>
                <div id="mapcontainer" className='mapContainer' />

            </div>
        )
    }
}

