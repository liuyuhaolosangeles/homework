import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {  FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { DirectoryComponent } from './directory/directory.component';
import { HomeComponent } from './home/home.component';
import { from } from 'rxjs';
import { routing} from './app.routes';
import { FormStyle } from '@angular/common';
import { FilterPipe } from './filter.pipe';
import { LoggingService} from './logging.service';
import { DataService } from './data.service';
import { HttpClientModule } from '@angular/common/http';
import { HttpModule } from '@angular/http';
@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    DirectoryComponent,
    HomeComponent,
    FilterPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    routing,
    HttpClientModule,
    HttpModule
  ],
  providers: [LoggingService , DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
