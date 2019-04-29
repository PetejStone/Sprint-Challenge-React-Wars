import React from 'react';
import './StarWars.scss';
const Starwarschars = props => {
    return ( 
        <ul className="characters">
            {props.characters.map(character => 
                <li className="character" key={character.created}>
                    <div className="character-item">
                        <h3>{character.name}</h3>
                        <p>
                            Birth Year: {character.birth_year}
                        </p>
                        <p>
                            Eye Color: {character.eye_color}
                        </p>
                        <p>
                            Hair Color: {character.hair_color}
                        </p>
                        <p>
                            Gender: {character.gender}
                        </p>
                        <p>
                            Height: {character.height}cm
                        </p>
                        <p>
                            Weight: {character.mass}kg
                        </p>

                    </div>
                
                </li>)}
        </ul>
    )
}

export default Starwarschars;