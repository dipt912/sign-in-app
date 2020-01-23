import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-create-task',
  templateUrl: './create-task.component.html',
  styleUrls: ['./create-task.component.css']
})
export class CreateTaskComponent implements OnInit {
  createForm: FormGroup;
  constructor( private fb: FormBuilder) {
  }

  ngOnInit() {
    this.createForm = this.fb.group({
      title: ['', Validators.required],
      description: ['', Validators.required],
      assignie: [''],
      priority: ['', Validators.required],
      category: [''],
      dueDate: ['']

    });
  }

  get f() { return this.createForm.controls; }

  onSubmit(f: FormGroup) {
    console.log('f', f);
  }

}
