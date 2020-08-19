import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserRoutingModule } from './user-routing.module';

import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';

/* modules from Materialize */

import {MatFormFieldModule,MatIconModule,MatInputModule,MatSelectModule,MatRadioModule,MatButtonModule,MatCheckboxModule,MatTooltipModule  } from '@angular/material';

/* Module for Toaster */
import { ToastrModule } from 'ngx-toastr';


import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { VerifyEmailComponent } from './verify-email/verify-email.component';
import { ResetPasswordComponent } from './reset-password/reset-password.component';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    MatFormFieldModule,
    MatIconModule,
    MatInputModule,
    MatSelectModule,
    MatRadioModule,
    MatButtonModule,
    MatCheckboxModule,
    MatTooltipModule,
    ReactiveFormsModule,
    RouterModule,

    ToastrModule.forRoot({
      timeOut: 10000,
      positionClass: 'toast-top-right',
      preventDuplicates: true,
    }),

    UserRoutingModule,
  ],
  
  declarations: [LoginComponent, SignupComponent, ForgotPasswordComponent, VerifyEmailComponent, ResetPasswordComponent],
})
export class UserModule { }

