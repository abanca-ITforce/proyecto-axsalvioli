import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup, FormControl } from '@angular/forms';


@Component({
  selector: 'app-form-filter',
  templateUrl: './form-filter.component.html',
  styleUrls: ['./form-filter.component.css']
})

export class FormFilterComponent {
  formFilter = new FormGroup({
  incomingLevel: new FormControl()
  });
  @Output() post = new EventEmitter<any>();
  constructor(private fb: FormBuilder) {}

  onSubmit() {
    this.post.emit(this.formFilter.value);
  }
}


