import { Component } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss'],
})
export class FormComponent {
  user: any;

  profile = new FormGroup({
    color: new FormControl(''),
    firstName: new FormControl(''),
    lastName: new FormControl(''),
  });

  onSubmit() {
    this.user = this.profile.value;
    this.profile.reset();
  }
}
