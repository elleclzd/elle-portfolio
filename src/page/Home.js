import React from 'react'
import { TypeAnimation } from 'react-type-animation';

const Home = () => {
  return (
    <div>
      <TypeAnimation
        sequence={[
          `Hello I'm Arianne Janelle Calzada!\nI'm your one and only maganda\nand the best designer in the world.`,
          1000,
          `Hello I'm Arianne Janelle Calzada!\nI'm your one and only maganda\nand the best designer in the world.`,
          1000,
        ]}
        speed={50}
        style={{ whiteSpace: 'pre-line', fontSize: '5em' }}
        repeat={Infinity}
      />
    </div>
  )
}

export default Home