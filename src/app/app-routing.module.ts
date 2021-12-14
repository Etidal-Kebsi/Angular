import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddComponent } from './add/add.component';
import { ListeComponent } from './liste/liste.component';

const routes: Routes = [
  { path:"liste" , component:ListeComponent},
  { path:"add" , component:AddComponent},
  { path:"" , component:ListeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
