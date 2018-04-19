import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LandingComponent } from './landing/landing.component';
import { ListComponent } from './list/list.component';
import { NewComponent } from './new/new.component';
import { EditComponent } from './edit/edit.component';
import { WrongComponent } from './wrong/wrong.component';

const routes: Routes = [
  {
      path: '',
      pathMatch: 'full',
      component: LandingComponent,
      children: []
  },
  {
    path: 'products',
    pathMatch: 'full',
    component: ListComponent,
    children: []
},
{
  path: 'products/new',
  pathMatch: 'full',
  component: NewComponent,
  children: []
},
{
  path: 'products/edit/:id',
  pathMatch: 'full',
  component: EditComponent,
  children: []
},
{
  path: '**',
  component: WrongComponent,
  children: []
},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
