import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes } from '@angular/router';
import { UserComponent } from './user/user.component';
import { RegistrationComponent } from './user/registration/registration.component';

const routes : Routes = [
  { path: '',redirectTo:'/user/registration', pathMatch:'fulll' },
  { path: 'user', component:UserComponent,
  children:[
    { path:'registration', component:RegistrationComponent }
  ]
}
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ]
})
export class AppRoutingModule { }
