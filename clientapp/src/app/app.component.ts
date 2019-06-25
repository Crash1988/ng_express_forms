import { Component, OnInit } from '@angular/core';
import { ApiCallsService } from './_services/api-calls.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { StartWithLetters } from './_validators/custom.validators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'clientapp';
  form: FormGroup;
  constructor(private fb: FormBuilder, public apiCallsService: ApiCallsService ) {

   }
  ngOnInit() {
     this.form = this.fb.group({
       firstName:  ['', Validators.required],
       lastName: ['', [Validators.required, StartWithLetters]],
       zipCode: [''],
     });
   }
  testServer() {
    this.apiCallsService.testServer().subscribe(res => {
      console.log(res);
    });
  }
  submit() {
    console.log(this.form );
  }
}
