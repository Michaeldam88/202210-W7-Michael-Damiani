interface Action {
    talk: (message: string) => string;
    die: (message: string) => string;
}
export class Character implements Action {
    isAlive: boolean;
    constructor(
        public name: string,
        public familyName: string,
        public age: number,
        public role: string
    ) {
        this.isAlive = true;
    }
    talk(message: string) {
        console.log(message);
        return message;
    }

    die(message: string) {
        console.log(message);
        return message;
    }
}
