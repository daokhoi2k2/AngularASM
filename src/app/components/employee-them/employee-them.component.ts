import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-employee-them',
  templateUrl: './employee-them.component.html',
  styleUrls: ['./employee-them.component.scss']
})
export class EmployeeThemComponent implements OnInit {
  addNhanVien!: FormGroup;
  constructor() { }

  ngOnInit(): void {
    this.addNhanVien = new FormGroup({
      fullName: new FormControl("", [Validators.minLength(5), Validators.required]),
      birthDay: new FormControl("", [Validators.minLength(5)]),
      sex: new FormControl(),
      district: new FormControl(),
    })
  }

  xuly() {
    console.log(this.addNhanVien.value);
    console.log("Validate", this.addNhanVien.controls['fullName'])
  }

}
