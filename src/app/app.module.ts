import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing-module';
import { GoogleChart } from './customDirectives/angular2-google-chart.directive';
import { AgmCoreModule } from 'angular2-google-maps/core';

import { HeaderComponent} from './pages/layout/header/header.component';
import { FooterComponent} from './pages/layout/footer/footer.component';

import { HomePageComponent } from './pages/home/homePage.component';
import { BlocksPageComponent } from './pages/blocks/blocksPage.component';
import { AllTransactionsPageComponent } from './pages/allTransactions/allTransactionsPage.component';
import { NetworkPageComponent } from './pages/network/networkPage.component';
import { BlockPageComponent } from './pages/block/blockPage.component';
import { TransactionsPageComponent } from './pages/transactions/transactionsPage.component';
import { AddressPageComponent } from './pages/address/addressPage.component';



import { FooterService } from './pages/layout/footer/footer.service';
import { HomePageService } from './pages/home/homePage.service';
import { BlocksPageService } from './pages/blocks/blocksPage.service';
import { AllTransactionsPageService } from './pages/allTransactions/allTransactionsPage.service';
import { BlockPageService } from './pages/block/blockPage.service';
import { TransactionsPageService } from './pages/transactions/transactionsPage.service';
import { AddressPageService } from './pages/address/addressPage.service';
import { NetworkPageService } from './pages/network/networkPage.service';
import { BlockSocketService, TxSocketService } from './pages/socket/socket.service';
import { NgxQRCodeModule } from 'ngx-qrcode2';
import { Globals } from './pages/globals';


@NgModule({
  declarations: [
  AppComponent,
  FooterComponent,
  HeaderComponent,
  HomePageComponent,
  BlocksPageComponent,
  AllTransactionsPageComponent,
  NetworkPageComponent,
  BlockPageComponent,
  TransactionsPageComponent,
  AddressPageComponent,
  GoogleChart
  ],
  imports: [
  BrowserModule,
  FormsModule,
  HttpModule,
  AppRoutingModule,
  NgxQRCodeModule,
  AgmCoreModule.forRoot({
      apiKey: 'AIzaSyDVGMQhtueV-z7v4kjQ80kYd26jrmqV-o4'
    })
  ],
  providers: [
  FooterService,
  HomePageService,
  BlocksPageService,
  AllTransactionsPageService,
  BlockPageService,
  TransactionsPageService,
  AddressPageService,
  NetworkPageService,
  BlockSocketService,
  TxSocketService,
  Globals
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
