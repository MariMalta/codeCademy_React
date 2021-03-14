import { animals } from './animals';
import React from 'react';
import ReactDOM from 'react-dom';

const title = "";
const background = (<img
    className='background'
    alt='ocean'
    src='/images/ocean.jpg' />
);
const showBackground = true;
const images = [];

for (const animal in animals) {
    images.push(
        <img
            key={animal}
            className='animal'
            alt={animal}
            src={animals[animal].image}
            ariaLabel={animal}
            role='button'
            onClick={displayFact}
        />
    );
}

function displayFact(e) {
    const selectedAnimal = e.target.alt;
    const animalInfo = animals[selectedAnimal];
    const index = Math.floor(Math.random() * animalInfo.facts.length);
    const funfact = animalInfo.facts[index];
    document.getElementById('fact').innerHTML = funfact;
}

const animalFacts = (
    <div>
        <h1>{title || "Click an animal for fun fact"}</h1>
        {showBackground && background}
        <div className='animals'>{images}</div>
        <p id='fact'></p>
    </div>
);

ReactDOM.render(
    animalFacts,
    document.getElementById('root')
);