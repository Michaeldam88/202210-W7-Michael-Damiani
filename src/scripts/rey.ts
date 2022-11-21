import { Character } from './personaje.js';
export class King extends Character {
    emoji: any;
    message: string;
    constructor(
        role: string,
        name: string,
        familyName: string,
        age: number,
        public regnalYears: number
    ) {
        super(role, name, familyName, age);
        this.emoji = '\uF451';
        this.message = "'Vais a morir todos'";
    }
}
