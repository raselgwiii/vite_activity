import React from 'react'
import { Link } from 'react-router-dom';

function Navigation() {
  return (
    <nav>
        <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/list">Subjects</Link></li>
        <li><Link to="/table">Students</Link></li>
        </ul>
    </nav>
  )
}

export default Navigation