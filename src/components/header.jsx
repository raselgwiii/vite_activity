import React from 'react'
import logo from '../assets/img/logo.png'

function Header() {
  return (
    <div>
        <header>
            <img src={logo}/>
            <div class="header-tittle">
                <h1>Advance Web Development: Front-end 2</h1>
            </div>
        </header>
    </div>
  )
}

export default Header