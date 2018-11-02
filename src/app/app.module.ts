import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {FlexLayoutModule} from '@angular/flex-layout';

import { PdnMaterialModule } from './pdn-material/pdn-material.module';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { DashboardAdminComponent } from './dashboard-admin/dashboard-admin.component';
import { NewGameComponent } from './dashboard-admin/new-game/new-game.component';
import { AddResultComponent } from './dashboard-admin/add-result/add-result.component';
import { NewHvpComponent } from './dashboard-admin/new-hvp/new-hvp.component';
import { AddHvpResultComponent } from './dashboard-admin/add-hvp-result/add-hvp-result.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DashboardComponent,
    DashboardAdminComponent,
    NewGameComponent,
    AddResultComponent,
    NewHvpComponent,
    AddHvpResultComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    PdnMaterialModule,
    FlexLayoutModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
