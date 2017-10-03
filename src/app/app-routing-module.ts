import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HeaderComponent } from './pages/layout/header/header.component';
import { FooterComponent } from './pages/layout/footer/footer.component';

import { HomePageComponent } from './pages/home/homePage.component';
import { BlocksPageComponent } from './pages/blocks/blocksPage.component';
import { AllTransactionsPageComponent } from './pages/allTransactions/allTransactionsPage.component';
import { NetworkPageComponent } from './pages/network/networkPage.component';
import { BlockPageComponent } from './pages/block/blockPage.component';
import { TransactionsPageComponent } from './pages/transactions/transactionsPage.component';
import { AddressPageComponent } from './pages/address/addressPage.component';


const routes: Routes = [
  {
  	path: 'home',
  		children: [
  		{path:'', component: HeaderComponent, outlet:'header'},

      {path:'', component: HomePageComponent},

  		{path:'', component: FooterComponent, outlet:'footer'}
  		]
  },
  {
    path: 'blocks',
      children: [
      {path:'', component: HeaderComponent, outlet:'header'},

      {path:':hash', component: BlockPageComponent},

      {path:'', component: BlocksPageComponent},

      {path:'', component: FooterComponent, outlet:'footer'}
      ]
  },
  {
    path: 'allTransactions',
      children: [
      {path:'', component: HeaderComponent, outlet:'header'},

      {path:'', component: AllTransactionsPageComponent},

      {path:'', component: FooterComponent, outlet:'footer'}
      ]
  },
  {
    path: 'network',
      children: [
      {path:'', component: HeaderComponent, outlet:'header'},

      {path:'', component: NetworkPageComponent},

      {path:'', component: FooterComponent, outlet:'footer'}
      ]
  },
  {
    path: 'transactions',
      children: [
      {path:'', component: HeaderComponent, outlet:'header'},

      {path:':txid', component: TransactionsPageComponent},

      {path:'', component: FooterComponent, outlet:'footer'}
      ]
  },
  {
    path: 'addresses',
      children: [
      {path:'', component: HeaderComponent, outlet:'header'},

      {path:':hash', component: AddressPageComponent},

      {path:'', component: FooterComponent, outlet:'footer'}
      ]
  },
  { path: '**', redirectTo: '/home', pathMatch: 'full' }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
