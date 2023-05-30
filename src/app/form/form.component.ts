import { Component } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss'],
})
export class FormComponent {
  profile = new FormGroup({
    color: new FormControl(''),
    firstName: new FormControl(''),
    lastName: new FormControl(''),
  });

  onSubmit() {
    console.log(this.profile.value);
  }
}
