import { Adviser } from './asesor.js';
import { Squire } from './escudero.js';
import { Knight } from './luchador.js';
import { King } from './rey.js';

const ulDiv = document.querySelector('ul') as HTMLDListElement;

const characters = [
    new King('King', 'Joffrey', 'Baratheon', 14, 2),
    new Knight('Knight', 'Jaime', 'Lannister', 34, 'Espada', 9),
    new Knight('Knight', 'Daenerys', 'Targaryen', 16, 'Dragones', 10),
    new Adviser('Adviser', 'Tyrion', 'Lannister', 27, 'Daenerys'),
    new Squire('Squire', 'Bronn', 'Stokeworth', 32, 'Jaime', 5),
];

interface CharacterDataType {
    role: string;
    name: string;
    familyName: string;
    age: number;
    regnalYears: number;
    isAlive: boolean;
    weapon: string;
    kissAssLevel: number;
    skillLevel: number;
    whoServe: string;
    whoAsses: string;
    emoji: string;
}

const displayCard = (characterData: CharacterDataType) => {
    const newLi = document.createElement('li');
    newLi.className = 'character col';
    newLi.innerHTML = `
            <div class="card character__card">
                <img
                    src="../img/${characterData.name.toLowerCase()}.jpg"
                    alt="${characterData.name} ${characterData.familyName}"
                    class="character__picture card-img-top"
                />
                <div class="card-body">
                    <h2 class="character__name card-title h4">${
                        characterData.name
                    } ${characterData.familyName}</h2>
                    <div class="character__info">
                        <ul class="list-unstyled">
                            <li>Edad: ${characterData.age} años</li>
                            <li>
                                Estado:
                                <i class="fas fa-thumbs-down"></i>
                                <i class="fas fa-thumbs-up"></i>
                            </li>
                        </ul>
                    </div>
                    <div class="character__overlay">
                        <ul class="list-unstyled">
                            <li>Años de reinado: ${
                                characterData.regnalYears
                            }</li>
                            <li>Arma: ${characterData.weapon}</li>
                            <li>Destreza: ${characterData.skillLevel}</li>
                            <li>Peloteo: ${characterData.kissAssLevel}</li>
                            <li>Asesora a: ${characterData.whoServe}</li>
                            <li>Sirve a: ${characterData.whoAsses}</li>
                        </ul>
                        <div class="character__actions">
                            <button class="character__action btn  id="talk"">habla</button>
                            <button class="character__action btn  id="die"">muere</button>
                        </div>
                    </div>
                </div>
                <i class="emoji">${characterData.emoji}</i>
            </div>`;            
    ulDiv?.appendChild(newLi);
};

characters.forEach((element) => displayCard(element));
