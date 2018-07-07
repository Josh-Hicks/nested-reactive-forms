import { FormArray } from '@angular/forms';

export class Team {
    name: string;
    coaches: FormArray;
    players: FormArray;

    constructor(name?: string, coaches?: FormArray, players?: FormArray) {
        this.name = name || '';
        this.coaches = coaches || new FormArray([]);
        this.players = players || new FormArray([]);
    }
}