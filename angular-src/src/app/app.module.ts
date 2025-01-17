import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {RouterModule, Routes} from "@angular/router";
import {FormsModule,ReactiveFormsModule} from "@angular/forms";
import {FlashMessagesModule, FlashMessagesService} from "angular2-flash-messages";

import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { HomeComponent } from './components/home/home.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { ProfileComponent } from './components/profile/profile.component';
import {HttpClientModule} from "@angular/common/http";
import {AlertsModule} from "angular-alert-module";
import {MatAutocompleteModule} from "@angular/material";
import {MatFormFieldModule} from "@angular/material";
import {NguiAutoCompleteModule} from "@ngui/auto-complete";

import {ValidateService} from "./services/validate.service";
import {AuthService} from "./services/auth.service";
import {AuthGuard} from "./guards/auth.guard";
import {OverallService} from "./services/overall.service";
import {IndividualService} from "./services/individual.service";
import {AuthorService} from "./services/author.service";

const appRoutes: Routes = [
  {path:'', component: HomeComponent },
  {path:'register', component: RegisterComponent },
  {path:'login', component: LoginComponent },
  {path:'dashboard', component: DashboardComponent,canActivate:[AuthGuard] },
  {path:'profile', component: ProfileComponent,canActivate:[AuthGuard]},
]

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    LoginComponent,
    RegisterComponent,
    HomeComponent,
    DashboardComponent,
    ProfileComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    AlertsModule.forRoot(),
    FormsModule,
    ReactiveFormsModule,
    FlashMessagesModule,
    HttpClientModule,
    MatAutocompleteModule,
    MatFormFieldModule,
    NguiAutoCompleteModule,
  ],
  providers: [ValidateService, FlashMessagesService, AuthService,AuthGuard,OverallService,IndividualService,AuthorService],
  bootstrap: [AppComponent]
})
export class AppModule { }
