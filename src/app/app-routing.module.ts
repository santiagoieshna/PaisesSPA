import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AboutPageComponent } from './shared/pages/about-page/about-page.component';
import { HomePageComponent } from './shared/pages/home-page/home-page.component';
import { ContactPageComponent } from './shared/pages/contact-page/contact-page.component';

const routes: Routes = [
  {
    path: 'home',
    component: HomePageComponent
  },
  {
    path: 'about',
    component: AboutPageComponent
  },
  {
    path: 'contact',
    component: ContactPageComponent
  },
  {
    path: 'paises',
    loadChildren: () => import('./paises/paises.module').then( m => m.PaisesModule)
  },
  {
    path: '**',
    redirectTo: 'paises'
  },
];

@NgModule({
  imports:[ RouterModule.forRoot(routes)],
  exports:[RouterModule]
})
export class AppRoutingModule { }
