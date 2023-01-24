import React, {useEffect, useState} from 'react';

import './Spaces.css';
import {space_x_Api} from "../../services";
import {Space} from "../Space/Space";
import {SpaceDetails} from "../SpaceDetails/SpaceDetails";

const Spaces = () => {
    const [spaces, setSpaces] = useState([]);
    const [spaceDet, setSpaceDet] = useState(null);

    useEffect(() => {
        space_x_Api.getAll().then(value => setSpaces(value));
    }, []);

    return (

        <div style={{display:'flex'}} >
            <div className={'spaces'}>{
                spaces.filter(item => item.launch_year !== '2020')
                    .sort((a, b) => b.launch_year - a.launch_year)
                    .map(space => <Space key={space.mission_name} space={space} setSpaceDet={setSpaceDet}/>)}
            </div>
            {
                !!spaceDet && <SpaceDetails spaceDet ={spaceDet} setSpaceDet={setSpaceDet}/>
            }
        </div>
    );
};

export {Spaces};