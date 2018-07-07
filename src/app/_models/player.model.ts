export class Player {
    name: string;
    position: string;
    number: number;

    constructor(name?: string, position?: string, number?: number) {
        this.name = name || '';
        this.position = position || '';
        this.number = number;
    }
}