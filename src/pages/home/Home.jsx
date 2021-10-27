import React from 'react';
import Chart from '../../component/chart/Chart';
import FeaturedInfo from '../../component/featuredInfo/FeaturedInfo';
import './home.css';


function Home() {
    return (
        <div className='home'>
           <FeaturedInfo />
           <Chart />
        </div>
    )
}

export default Home
