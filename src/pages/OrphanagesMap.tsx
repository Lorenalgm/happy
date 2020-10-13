import React from 'react';
import mapMarketImg from '../images/marker.svg';
import { Link } from 'react-router-dom';
import { FiPlus } from 'react-icons/fi';
import '../styles/pages/orphanages-map.css';
import { Map, TileLayer } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';

function OrphanagesMap(){
    return (
        <div id="page-map">
            <aside>
                <header>
                    <img src={mapMarketImg} alt="Happy" />

                    <h2>Escolha um orfanato no mapa</h2>
                    <p>Multas crianças estão esperando a sua visita :)</p>
                </header>
                
                <footer>
                    <strong>Macapá</strong>
                    <span>Amapá</span>
                </footer>
            </aside>

            <Map 
                center={[-0.0072589,-51.0853921]}
                zoom={15}
                style={{ width: '100%', height: '100%' }}
             >
                 <TileLayer url={`https://api.mapbox.com/styles/v1/mapbox/light-v10/tiles/256/{z}/{x}/{y}@2x?access_token=${process.env.REACT_APP_MAPBOX_TOKEN}`} />
            </Map>

            <Link to="" className="create-orphanage">
                <FiPlus size={32} color="#FFF" />
            </Link>
        </div>
    )
}

export default OrphanagesMap;