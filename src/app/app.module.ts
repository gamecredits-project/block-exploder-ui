import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { AppRoutingModule } from "./app-routing-module";

import { InfiniteScrollModule } from 'ngx-infinite-scroll';


import { HeaderComponent} from './pages/layout/header/header.component';
import { FooterComponent} from './pages/layout/footer/footer.component';

import { HomePageComponent } from './pages/home/homePage.component';
import { BlocksPageComponent } from './pages/blocks/blocksPage.component';
import { NetworkPageComponent } from './pages/network/networkPage.component';

import { FooterService } from './pages/layout/footer/footer.service';
import { HomePageService } from './pages/home/homePage.service';
import { BlocksPageService } from './pages/blocks/blocksPage.service';

@NgModule({
  declarations: [
  AppComponent,
  FooterComponent,
  HeaderComponent,
  HomePageComponent,
  BlocksPageComponent,
  NetworkPageComponent
  ],
  imports: [
  BrowserModule,
  FormsModule,
  HttpModule,
  AppRoutingModule,
  InfiniteScrollModule
  ],
  providers: [
  FooterService,
  HomePageService,
  BlocksPageService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
