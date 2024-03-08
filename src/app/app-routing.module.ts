import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () =>
      import('./features/web-home/web-home.module').then((m) => m.WebHomeModule)
  },
  {
    path:'',
    loadChildren:()=>
    import('./features/web-page/web-page.module').then((m)=> m.WebPageModule)
  },
  {
    path:'',
    loadChildren:()=>
    import('./shared/shared.module').then((m)=> m.SharedModule)
  },
  { path:'**',redirectTo:'/',pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
