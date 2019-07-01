import { Component, OnInit } from '@angular/core';
import { ApiCallsService } from './_services/api-calls.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { StartWithLetters, ValidateZipCodeNState } from './_validators/custom.validators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'clientapp';
  form: FormGroup;
  usStates = [
    {StateCode: "AL", StateFullName: "ALABAMA", StateType: "State"},
    {StateCode: "AK", StateFullName: "ALASKA", StateType: "State"},
    {StateCode: "AZ", StateFullName: "ARIZONA", StateType: "State"},
    {StateCode: "AR", StateFullName: "ARKANSAS", StateType: "State"},
    {StateCode: "CA", StateFullName: "CALIFORNIA", StateType: "State"},
    {StateCode: "CO", StateFullName: "COLORADO", StateType: "State"},
    {StateCode: "CT", StateFullName: "CONNECTICUT", StateType: "State"},
    {StateCode: "DE", StateFullName: "DELAWARE", StateType: "State"},
    {StateCode: "FL", StateFullName: "FLORIDA", StateType: "State"},
    {StateCode: "GA", StateFullName: "GEORGIA", StateType: "State"},
    {StateCode: "HI", StateFullName: "HAWAII", StateType: "State"},
    {StateCode: "ID", StateFullName: "IDAHO", StateType: "State"},
    {StateCode: "IL", StateFullName: "ILLINOIS", StateType: "State"},
    {StateCode: "IN", StateFullName: "INDIANA", StateType: "State"},
    {StateCode: "IA", StateFullName: "IOWA", StateType: "State"},
    {StateCode: "KS", StateFullName: "KANSAS", StateType: "State"},
    {StateCode: "KY", StateFullName: "KENTUCKY", StateType: "State"},
    {StateCode: "LA", StateFullName: "LOUISIANA", StateType: "State"},
    {StateCode: "ME", StateFullName: "MAINE", StateType: "State"},
    {StateCode: "MD", StateFullName: "MARYLAND", StateType: "State"},
    {StateCode: "MA", StateFullName: "MASSACHUSETTS", StateType: "State"},
    {StateCode: "MI", StateFullName: "MICHIGAN", StateType: "State"},
    {StateCode: "MN", StateFullName: "MINNESOTA", StateType: "State"},
    {StateCode: "MS", StateFullName: "MISSISSIPPI", StateType: "State"},
    {StateCode: "MO", StateFullName: "MISSOURI", StateType: "State"},
    {StateCode: "MT", StateFullName: "MONTANA", StateType: "State"},
    {StateCode: "NE", StateFullName: "NEBRASKA", StateType: "State"},
    {StateCode: "NV", StateFullName: "NEVADA", StateType: "State"},
    {StateCode: "NH", StateFullName: "NEW HAMPSHIRE", StateType: "State"},
    {StateCode: "NJ", StateFullName: "NEW JERSEY", StateType: "State"},
    {StateCode: "NM", StateFullName: "NEW MEXICO", StateType: "State"},
    {StateCode: "NY", StateFullName: "NEW YORK", StateType: "State"},
    {StateCode: "NC", StateFullName: "NORTH CAROLINA", StateType: "State"},
    {StateCode: "ND", StateFullName: "NORTH DAKOTA", StateType: "State"},
    {StateCode: "OH", StateFullName: "OHIO", StateType: "State"},
    {StateCode: "OK", StateFullName: "OKLAHOMA", StateType: "State"},
    {StateCode: "OR", StateFullName: "OREGON", StateType: "State"},
    {StateCode: "PA", StateFullName: "PENNSYLVANIA", StateType: "State"},
    {StateCode: "RI", StateFullName: "RHODE ISLAND", StateType: "State"},
    {StateCode: "SC", StateFullName: "SOUTH CAROLINA", StateType: "State"},
    {StateCode: "SD", StateFullName: "SOUTH DAKOTA", StateType: "State"},
    {StateCode: "TN", StateFullName: "TENNESSEE", StateType: "State"},
    {StateCode: "TX", StateFullName: "TEXAS", StateType: "State"},
    {StateCode: "UT", StateFullName: "UTAH", StateType: "State"},
    {StateCode: "VT", StateFullName: "VERMONT", StateType: "State"},
    {StateCode: "VA", StateFullName: "VIRGINIA", StateType: "State"},
    {StateCode: "WA", StateFullName: "WASHINGTON", StateType: "State"},
    {StateCode: "DC", StateFullName: "WASHINGTON D.C.", StateType: "State"},
    {StateCode: "WV", StateFullName: "WEST VIRGINIA", StateType: "State"},
    {StateCode: "WI", StateFullName: "WISCONSIN", StateType: "State"},
    {StateCode: "WY", StateFullName: "WYOMING", StateType: "State"}
  ];
  constructor(private fb: FormBuilder, public apiCallsService: ApiCallsService ) {
   }
  ngOnInit() {
     this.form = this.fb.group({
       firstName:  ['', Validators.required],
       lastName: ['', [Validators.required, StartWithLetters]],
       stateZipGroup: this.fb.group( {
        zipCode: [null, [Validators.required]],
        state: [null, [Validators.required]],
       }, { asyncValidators:  ValidateZipCodeNState.createValidator(this.apiCallsService)} )
     });
   }
  testServer() {
    this.apiCallsService.checkzipcodebystate(this.form.value.zipCode, 'IL').subscribe(res => {
      console.log(res);
    });
  }
  submit() {
    console.log(this.form );
    if (!this.form.valid) {
      return ;
    }
    alert('form is Valid for Submit! check the console!');
    console.log( JSON.stringify(this.form.value, null, 2) );
  }
}
