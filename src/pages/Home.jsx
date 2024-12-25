import React from 'react';
import Banner from '../components/Banner';
import VolunteersNeedNow from '../components/VolunteersNeedNow';
import TopCategories from '../components/TopCategories';
import OurMission from '../components/OurMission';

const Home = () => {
    return (
        <div>
           <Banner></Banner>
           <VolunteersNeedNow></VolunteersNeedNow>
           <TopCategories></TopCategories>
           <OurMission></OurMission>
        </div>
    );
};

export default Home;