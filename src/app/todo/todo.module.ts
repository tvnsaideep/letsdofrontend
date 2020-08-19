import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { SharedModule } from '../shared/shared.module'

import { TodoRoutingModule } from './todo-routing.module';
import { SingleUserComponent } from './single-user/single-user.component';
import { MultiUserComponent } from './multi-user/multi-user.component';

/* Module for Toaster */
import { ToastrModule } from 'ngx-toastr';


import {MatFormFieldModule,
  MatIconModule,
  MatInputModule,
  MatSelectModule,
  MatRadioModule,
  MatButtonModule,
  MatCheckboxModule,
  MatTooltipModule,
  MatSidenavModule,
  MatMenuModule,  
  MatListModule,
  MatDialogModule,
  MatTabsModule
} from '@angular/material';

import { DialogBoxComponent } from '../shared/dialog-box/dialog-box.component';

import { ListContainerComponent } from '../shared/list-container/list-container.component';
import { ManageFriendsComponent } from './manage-friends/manage-friends.component';

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
    MatSidenavModule,
    MatMenuModule,
    MatListModule,
    MatDialogModule,
    MatTabsModule,
    ReactiveFormsModule,
    RouterModule,

    SharedModule,
    
    ToastrModule.forRoot({
      timeOut: 10000,
      positionClass: 'toast-top-right',
      preventDuplicates: true,
    }),

    TodoRoutingModule
  ],

  entryComponents: [
    DialogBoxComponent
  ],
  declarations: [SingleUserComponent, MultiUserComponent, ManageFriendsComponent]
})
export class TodoModule { }
