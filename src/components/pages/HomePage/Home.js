import React from 'react';
import { homeObjOne, homeObjTwo, homeObjThree } from './Data';
import { InfoSection } from '../../InfoSection/InfoSection';
import { InfoSection2 } from '../../InfoSection/InfoSection2';
import Benefits from '../../Benefits/Benefits';

export const Home = () => {
    return (
        <>
        <InfoSection {...homeObjOne}/>
        <InfoSection2 {...homeObjTwo}/>
        <InfoSection2 {...homeObjThree}/>
        <Benefits/>
        </>
    );
};

export default Home;