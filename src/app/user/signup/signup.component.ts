import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';

import { AppService } from '../../app.service';
//import for toastr
import { ToastrService } from 'ngx-toastr';
//import for Routing
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})

export class SignupComponent implements OnInit {
  email = new FormControl('', [Validators.required, Validators.email]);

  public firstName: any;
  public lastName: any;
  public password: any;
  public country: any;
  public mobileNumber: any;

  public allCountries: any;
  public countryCode: string;
  public countryName: string;
  public countries: any[] = [];
  public countryCodes: string[];


  constructor(
    public appService: AppService,
    public _route: ActivatedRoute,
    public router: Router,
    private toastr: ToastrService,

  ) { }

  ngOnInit() {
    this.getCountries();
    this.getCountryCodes();
  }
  getErrorMessage() {
    return this.email.hasError('required') ? 'You must enter a value' :
      this.email.hasError('email') ? 'Not a valid email' :
        '';
  }

  public onChangeOfCountry() {
    this.countryCode = this.countryCodes[this.country];
    this.countryName = this.country
  }//end onChangeOfCountry

  public getCountries() {
    this.appService.getCountryNames().subscribe((data) => {
        this.allCountries = data;
        for (let i in data) {

          let singleCountry = {
            name: data[i],
            code: i
          }
          this.countries.push(singleCountry);
        }
        this.countries = this.countries.sort((first, second) => {
          return first.name.toUpperCase() < second.name.toUpperCase() ? -1 : (first.name.toUpperCase() > second.name.toUpperCase() ? 1 : 0);
        });//end sort
      })//end subscribe

  }//end getCountries

  public getCountryCodes() {
    this.appService.getCountryNumbers()
      .subscribe((data) => {
        this.countryCodes = data;
      })//end subscribe
  }//end getCountriesCodes

  public goToSignIn(): any {
    this.router.navigate(['/user/login']);
  }//end of goToSign function

  public signupFunction(): any {

    if (!this.firstName) {
      this.toastr.warning("First Name is required", "Warning!");
    }
    else if (!this.lastName) {
      this.toastr.warning("Last Name is required", "Warning!");
    }
    else if (!this.mobileNumber) {
      this.toastr.warning("Mobile Number is required", "Warning!");
    }
    else if (!this.country) {
      this.toastr.warning("Country is required", "Warning!");
    }
    else if (!this.email.value) {
      this.toastr.warning("Email is required", "Warning!");
    }
    else if (!this.password) {
      this.toastr.warning("Password is required", "Warning!");
    }
    else if(this.email.hasError('email')){
      this.toastr.warning("Not a valid email", "Warning!");

    }
    else {      
      let data = {
        firstName: this.firstName,
        lastName: this.lastName,
        mobileNumber: `${this.countryCode} ${this.mobileNumber}`,
        email: this.email.value,
        password: this.password,
        countryName: this.countryName,
      }

      //console.log(data)  
      this.appService.signUp(data)
        .subscribe((apiResponse) => {

          if (apiResponse.status == 200) {
            this.toastr.success("Please check your email", "Registered with Lets Meet");
            setTimeout(() => {
              this.goToSignIn();
            }, 1000);//redirecting to signIn page

          }
          else {
            this.toastr.error(apiResponse.message, "Error!");
          }
        },
          (error) => {
            this.toastr.error("Some Error Occurred", "Error!");
            this.router.navigate(['/serverError']);
          });//end calling signUpFunction
    }
  }//end signUp function


}
