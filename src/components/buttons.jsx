import React from 'react'
import { Link } from 'react-router-dom';

function Buttons() {
  return (
    <div>
        <div class="btn">
       <button> <Link to="/list">Subjects</Link></button>
       <button> <Link to="/table">Students</Link></button>
         </div>
    </div>
  )
}

export default Buttons