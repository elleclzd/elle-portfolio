import React from 'react'
import { TypeAnimation } from 'react-type-animation';
import elleMainImage from '../assets/elle-main.jpg';
const Home = () => {
  return (
    <div>
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        <div style={{ width: '50%' }}>
          {/* <img src={elleMainImage} alt="Elle Main" style={{ maxWidth: '100%', maxHeight: '500px', height: 'auto' }} /> */}
          <TypeAnimation
            sequence={[
              `I'm Arianne\nJanelle Calzada!`,
              3000,
            ]}
            speed={50}
            style={{ fontSize: '2em', fontFamily: 'League Spartan', whiteSpace: 'pre-line', width: '100%' }}
            repeat={Infinity}
          />
          <div><p style={{ fontSize: '1em', fontFamily: 'League Spartan'}}>Transforming ideas into visually stunning realities, I am a passionate graphic social media content creator dedicated to elevating your brand with captivating designs that speak volumes.</p></div>
        </div>
        <div style={{ width: '50%', display: 'flex', justifyContent: 'left', alignItems: 'center' }}>

        </div>
      </div>
    </div>
  )
}

export default Home