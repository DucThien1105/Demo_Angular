import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { forbiddenNameValidator } from '../../shared/validators/phone.validators';
import { IProfile } from '../../shared/interface/profile';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  studentForm: FormGroup = new FormGroup({});
  constructor(private formBuilder: FormBuilder) {}
  @Output() getFormValue = new EventEmitter<IProfile>();
  ngOnInit(): void {
    this.studentForm = this.formBuilder.group({
      name: ['', [Validators.required]],
      phone: ['', [forbiddenNameValidator('dddd')]],
      dob: [''],
    });
  }

  handleFormSubmit() {
    if (this.studentForm.invalid) {
      return;
    }

    this.getFormValue.emit(this.studentForm.getRawValue());
  }
}


