import React from 'react'
import { BsFillArchiveFill, BsFillGrid3X3GapFill, BsPeopleFill, BsFillBellFill } from 'react-icons/bs'
import Charts from './Charts'
import Products from './Products'
const Home = () => {
  

  return (
    <main className='main-container'>
      <div className='main-title'>
        < h3 style={{color:'black'}}>DASHBOARD</h3>
      </div>
      <div className='main-cards'>

        <div className="card">
          <div className="leftCard">
            <img src="./1.png" className='one' alt="" />
          </div>
          <div className="rightCard">
            <p>Earning</p>
            <h3>$198k</h3>
            <p><span>37.8%</span></p>
          </div>
        </div>
        
        <div className="card">
          <div className="leftCard">
            <img src="./2.png" className='two' alt="" />
          </div>
          <div className="rightCard">
            <p>Earning</p>
            <h3>$198k</h3>
            <p><span>37.8%</span></p>
          </div>
        </div>

        
        <div className="card">
          <div className="leftCard">
            <img src="./3.png"  className='three' alt="" />
          </div>
          <div className="rightCard">
            <p>Earning</p>
            <h3>$198k</h3>
            <p><span>37.8%</span></p>
          </div>
        </div>

        <div className="card">
          <div className="leftCard">
            <img src="./4.svg" className='four' alt="" />
          </div>
          <div className="rightCard">
            <p>Earning</p>
            <h3>$198k</h3>
            <p><span>37.8%</span></p>
          </div>
        </div>
      </div>

      {/* chart  */}
      <Charts />
      <Products/>
      

    </main>

  )
}

export default Home