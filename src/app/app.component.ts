import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormBuilder } from '@angular/forms';

import { Team } from './_models/team.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  teamForm: FormGroup;
  teams: Team[] = [{
    name: 'Lakers',
    coaches: [{name: 'Bob Smith', position: 'Assistant Head Coach'}],
    players: [{name: 'LeBron James', position: 'Forward', number: 23}]
  }];

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit() {
    this.teamForm = this.formBuilder.group({
      name: [''],
      coaches: [[]],
      players: [[]]
    })
  }

  submit() {
    console.log(this.teamForm)
  }
}
