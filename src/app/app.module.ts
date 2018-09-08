import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import {  FormGroup, FormBuilder, Validators} from '@angular/forms';
import { ReactiveFormsModule} from '@angular/forms';

import {
  MatButtonModule,
  MatMenuModule,
  MatIconModule,
  MatCardModule,
  MatSidenavModule,
  MatFormFieldModule,
  MatInputModule,
  MatTooltipModule,
  MatToolbarModule
} from '@angular/material';
@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent

  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatMenuModule,
    MatIconModule,
    MatCardModule,
    MatSidenavModule,
    MatFormFieldModule,
    MatInputModule,
    MatTooltipModule,
    MatToolbarModule,
    ReactiveFormsModule,
    FormGroup,
    FormBuilder,
    Validators
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
