import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { Map, TileLayer, Marker, Popup } from 'react-leaflet'
import Leaflet from 'leaflet'

import { FiPlus, FiArrowRight } from 'react-icons/fi'
import mapMarker from '../images/map-marker.svg'

import '../style/pages/orphanages-map.css'
import 'leaflet/dist/leaflet.css'

import api from '../services/api'


const mapIcon = Leaflet.icon({
  iconUrl: mapMarker,

  iconSize: [30, 40],
  iconAnchor: [15, 40],

  popupAnchor: [104, 12]
})


interface Orphanage {
  id: number;
  name: string;
  latitude: number;
  longitude: number;
}


function OrphanagesMap () {

  const [orphanages, setOrphanages] = useState<Orphanage[]>([])

  useEffect(() => {
    api.get('orphanages').then(response => {
      setOrphanages(response.data)
    })
  }, [])

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
        zoom={15.25}
        style={{ width: '100%', height: '100%' }}
      >
        <TileLayer url={`https://api.mapbox.com/styles/v1/mapbox/streets-v11/tiles/256/{z}/{x}/{y}@2x?access_token=${process.env.REACT_APP_MAPBOX_TOKEN}`} />

        {
          orphanages.map(orphanage => {
            return (
              <Marker
                key={orphanage.id}
                icon={mapIcon}
                position={[orphanage.latitude, orphanage.longitude]}
              >
                <Popup closeButton={false} minWidth={146} maxWidth={146} className="map-popup">
                  {orphanage.name}
                  <Link to={`/orphanages/${orphanage.id}`} >
                    <FiArrowRight/>
                  </Link>
                </Popup>
              </Marker>
            )
          })
        }
      </Map>


      <Link to="/orphanages/create" className="create-orphanage">
        <FiPlus size={32} color="#FFF"/>
      </Link>

    </div>
  );
}

export default OrphanagesMap