import React from 'react';
import Banner from '../components/Banner';
import VolunteersNeedNow from '../components/VolunteersNeedNow';
import TopCategories from '../components/TopCategories';
import OurMission from '../components/OurMission';
import { Helmet  } from 'react-helmet-async';
const Home = () => {
    return (
        <div>
            <Helmet>
                <title>Home | Volunteer Match</title>
            </Helmet>
           <Banner></Banner>
           <VolunteersNeedNow></VolunteersNeedNow>
           <TopCategories></TopCategories>
           <OurMission></OurMission>
        </div>
    );
};

export default Home;