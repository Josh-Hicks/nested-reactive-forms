import { Component, OnInit } from '@angular/core'
import { FormControl, FormGroup, FormBuilder, FormArray } from '@angular/forms'

import { Team, Player, Coach } from './_models'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  teamForm: FormGroup
  teams: Team[]

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit() {
    this.initTeam()
    this.initTeamForm()
  }

  addPlayer(team: Team) {
    team.players.push(this.formBuilder.group(new Player()))
  }

  addCoach(team: Team) {
    team.coaches.push(this.formBuilder.group(new Coach()))
  }

  addTeam() {
    this.teams = [...this.teams, new Team('new team')]
  }

  deleteTeam(i: number) {
    this.teams = [...this.teams.filter(team => this.teams.indexOf(team) !== i)]
  }

  submit() {
    console.log(this.teamForm)
  }

  private initTeam() {
    // TODO: put this in a service
    this.teams = [
      new Team(      
        'Lakers',
        this.formBuilder.array([new Coach('Bob Smith', 'Assistant Head Coach')]),
        this.formBuilder.array([new Player('LeBron James', 'Forward', 23)])
      )
    ]
  }

  private initTeamForm() {
    this.teamForm = this.formBuilder.group({
      name: [''],
      coaches: this.formBuilder.array([]),
      players: this.formBuilder.array([])
    })
  }
}
