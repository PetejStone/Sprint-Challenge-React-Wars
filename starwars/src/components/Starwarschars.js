import React from 'react';

const Starwarschars = props => {
    return ( 
        <ul>
            {props.characters.map(character => 
                <li>
                    <div>
                        <p>
                            Name: {character.name}
                        </p>
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