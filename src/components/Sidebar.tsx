import React from 'react'
import { useHistory } from 'react-router-dom'

import '../style/components/sidebar.css' 

import { FiArrowRight } from 'react-icons/fi'
import mapMarker from '../images/map-marker.svg'

export default function Sidebar() {

  const { goBack } = useHistory()

  return (
    <aside className="app-sidebar">
      <img src={mapMarker} alt="Happy" />
      
      <footer>
        <button type="button" onClick={goBack}>
          <FiArrowRight size={24} color="#fff" />
        </button>
      </footer>

  </aside>
  )
}