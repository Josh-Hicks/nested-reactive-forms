import { FormControl } from '@angular/forms';

export class CoachForm {
    name: FormControl
    position: FormControl

    constructor(name?: string, position?: string) {
        this.name = new FormControl(name || '')
        this.position = new FormControl(position || '')
    }
}