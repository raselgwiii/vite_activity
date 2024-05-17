import React from 'react'
import banner from '../assets/img/banner.png'
import Buttons from './buttons'

function Home() {
  return (
    <div>
        <div class="row">
        <div class="col">
            <div class="banner">
                <div class="left-col">
                    <h1>Coding<span> is Fun</span></h1>
            
                    <p>So we are a BSIT student from 3rd Year, sabi nila Coding is Fun yas pero  </p>
                        

                    <div class="social-icons">



                    <Buttons/>
                    </div>
                </div>
            </div>
        </div>

        <div class="col">
            <div class="right-col">
                <img src={banner}/>
            </div>
        </div>
    </div>
    </div>
  )
}

export default Home