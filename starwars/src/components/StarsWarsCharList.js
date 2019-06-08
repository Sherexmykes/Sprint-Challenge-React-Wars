import React from 'react';
import CharCards from './CharCards';
import './StarWars.css';


const StarWarsCharList = ({data}) => {
    return (
        <div className = 'cardslist'>
            {data.map( (item, index) => {
                return (
                     <CharCards index={index} key={index} data={item} />
                   )
                })}
        </div>
    )
}

export default StarWarsCharList;