import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.css'],
})
export class ReactiveFormComponent implements OnInit {
  signupForm: FormGroup;
  constructor() {}

  ngOnInit() {
    this.signupForm = new FormGroup({
      name: new FormControl('Mayura', [
        Validators.required,
        Validators.minLength(3),
      ]),
      email: new FormControl('', [Validators.required, Validators.email]),
      username: new FormControl('', [Validators.required]),
      password: new FormControl('', [
        Validators.required,
        Validators.pattern('^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9]).{8,}$'),
      ]),
      confirmPassword: new FormControl('', [Validators.required]),
    });
  }

  onSubmit() {
    if (this.signupForm.valid) {
      console.table(this.signupForm.value);
    }
  }
}
