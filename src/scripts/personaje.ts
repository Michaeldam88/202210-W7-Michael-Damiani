interface Actions {
    talk: (message: string) => string;
    die: () => void;
}
export class Character implements Actions {
    isAlive = true;
    constructor(
        public role: string,
        public name: string,
        public familyName: string,
        public age: number
    ) {}
    talk(message: string) {
        return message;
    }

    die() {
        console.log('die');
    }
}
