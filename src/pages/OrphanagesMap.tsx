import React from 'react'
import { Link } from 'react-router-dom'
import { Map, TileLayer } from 'react-leaflet'

import { FiPlus } from 'react-icons/fi'
import mapMarker from '../images/map-marker.svg'

import '../style/pages/orphanages-map.css'
import 'leaflet/dist/leaflet.css'

function OrphanagesMap () {
  return (
    <div id="page-map">

      <aside>
        <header>

          <img src={mapMarker} alt="Happy" />
          
          <h2>Escolha um orfanato no mapa</h2>
          <p>Muitas crianças estão esperando sua visita</p>

        </header>

        <footer>

          <strong>Paraipaba</strong>
          <p>Ceara</p>

        </footer>
      </aside>

      <Map 
        center={[-3.4371815,-39.1454836]}
        zoom={15.9}
        style={{ width: '100%', height: '100%' }}
      >
        <TileLayer url={`https://api.mapbox.com/styles/v1/mapbox/streets-v11/tiles/256/{z}/{x}/{y}@2x?access_token=${process.env.REACT_APP_MAPBOX_TOKEN}`} />
      </Map>

      <Link to="" className="create-orphanage">
        <FiPlus size={32} color="#FFF"/>
      </Link>

    </div>
  );
}

export default OrphanagesMap