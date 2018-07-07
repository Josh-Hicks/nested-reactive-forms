export class Coach {
    name: string;
    position: string;

    constructor(name?: string, position?: string) {
        this.name = name || '';
        this.position = position || '';
    }
}