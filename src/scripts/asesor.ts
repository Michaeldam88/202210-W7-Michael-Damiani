import { Character } from './personaje.js';
export class Adviser extends Character {
    emoji = String.fromCodePoint(0x1F393);
    message = 'No sé por qué, pero creo que voy a morir pronto';
    constructor(
        role: string,
        name: string,
        familyName: string,
        age: number,
        public whoAsses: string
    ) {
        super(role, name, familyName, age);
    }
}
