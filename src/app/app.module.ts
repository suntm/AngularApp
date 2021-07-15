import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { PaymentDetailsComponent } from './payment-details/payment-details.component';
import { PaymentDetailFormComponent } from './payment-details/payment-detail-form/payment-detail-form.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import { LoginComponent } from './user/login/login.component';
import { RegistrationComponent } from './user/registration/registration.component';
import { AppRoutingModule } from './app-routing.module';
import { UserComponent } from './user/user.component';

const routes: Routes = [];

@NgModule({
  declarations: [
    AppComponent,
    PaymentDetailsComponent,
    PaymentDetailFormComponent,
    UserComponent,  
    LoginComponent,
    RegistrationComponent,      
  ],
  imports: [
    RouterModule.forRoot(routes),
    BrowserModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot({
      timeOut: 10000,
      positionClass: 'toast-top-right',
      preventDuplicates: true,
    }),
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
