import { NgModule } from '@angular/core';

import { Routes, RouterModule } from '@angular/router';
import { SingleUserComponent } from './single-user/single-user.component';
import { MultiUserComponent } from './multi-user/multi-user.component';
import { ManageFriendsComponent } from './manage-friends/manage-friends.component';


const routes: Routes = [
  {path :'single-user',component:SingleUserComponent},
  {path :'multi-user',component:MultiUserComponent},
  {path :'manage-friends',component:ManageFriendsComponent},

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TodoRoutingModule { }
