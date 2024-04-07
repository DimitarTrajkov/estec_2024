import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomePageComponent } from './components/home-page/home-page.component';
import { PregledPageComponent } from './components/pregled-page/pregled-page.component';
import { StatistikaComponent } from './components/statistika/statistika.component';

const routes: Routes = [
  { path: 'home', component: HomePageComponent },
  { path: 'pregled', component: PregledPageComponent },
  { path: 'statistika', component: StatistikaComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' }, // Redirect to home by default
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }


// import { NgModule } from '@angular/core';
// import { RouterModule, Routes } from '@angular/router';

// const routes: Routes = [];

// @NgModule({
//   imports: [RouterModule.forRoot(routes)],
//   exports: [RouterModule]
// })
// export class AppRoutingModule { }
