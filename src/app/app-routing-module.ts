import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HeaderComponent } from './pages/layout/header/header.component';
import { FooterComponent } from './pages/layout/footer/footer.component';

import { HomePageComponent } from './pages/home/homePage.component';
import { BlocksPageComponent } from './pages/blocks/blocksPage.component';
import { NetworkPageComponent } from './pages/network/networkPage.component';

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

      {path:'', component: BlocksPageComponent},

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
  { path: '**', redirectTo: '/home', pathMatch: 'full' }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}