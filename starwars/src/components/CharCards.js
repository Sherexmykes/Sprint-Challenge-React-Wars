import React from "react"

const CharCards = props => {
    return (
        <div>
        <h2 className="Title">{props.data.name}</h2> 
        <p className="listItem">Hair Color:{props.data.hair_color}</p>
        <p className="listItem">Eye Color:{props.data.eye_color}</p>
        <p className="listItem">Height:{props.data.height}</p>
        <p className="listItem">Skin Color:{props.data.skin_color}</p>
        <p className="listItem">Date of Birth:{props.data.birth_year}</p>
        <p className="listItem">Created:{props.data.created}</p>
        <p className="listItem">Edited:{props.data.edited}</p>
        <p className="listItem">Homeworld:{props.data.homeworld}</p>
        <p className="listItem">Species:{props.data.species}</p>
        <p className="listItem">Starships:{props.data.starships}</p>
        <p className="listItem">URL:{props.data.url}</p>
        <p className="listItem">Vehicles:{props.data.vehicles}</p>
   </div>
    )       
}


    export default CharCards;