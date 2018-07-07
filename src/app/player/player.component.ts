import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-player',
  templateUrl: './player.component.html',
  styleUrls: ['./player.component.scss']
})
export class PlayerComponent implements OnInit {
  @Input() parentForm: FormGroup;

  playerForm: FormGroup;

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.playerForm = this.formBuilder.group({
      name: ['', Validators.required],
      position: ['', Validators.required],
      number: ['', Validators.required]
    })
  }

}
