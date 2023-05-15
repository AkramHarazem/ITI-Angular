import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { FormHomeComponent } from './form-home/form-home.component';
import { ProfileComponent } from './profile/profile.component';
import { DetailsComponent } from './details/details.component';
import { ErrorComponent } from './error/error.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule,Routes } from '@angular/router';
import { HeaderComponent } from './header/header.component';

let routes:Routes = [
  {path:"home",component:FormHomeComponent},
  {path:"",component:FormHomeComponent},
  {path:"profile",component:ProfileComponent},
  {path:"users/:id",component:DetailsComponent},
  {path:"**",component:ErrorComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    FormHomeComponent,
    ProfileComponent,
    DetailsComponent,
    ErrorComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
