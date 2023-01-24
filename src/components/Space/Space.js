import React from 'react';

import './Space.css';
const Space = ({space, setSpaceDet}) => {
    const {flight_number, mission_name, launch_year,links } = space;
    return (

        <div className={'space'} >
            <div>flight_number: {flight_number}</div>
            <div>mission_name: {mission_name}</div>
            <div>launch_year: {launch_year}</div>
            <div style={{width: '100hv'}}>
                <img src={links.mission_patch_small} alt={mission_name} />
            </div>
            <button onClick={()=> {setSpaceDet(space )}}> Details </button>
        </div>
    );
};

export {Space};