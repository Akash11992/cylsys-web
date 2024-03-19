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
    import('./features/services/services.module').then((m)=> m.ServicesModule)
  },
  {
    path:'',
    loadChildren:()=>
    import('./features/products/products.module').then((m)=> m.ProductsModule)
  },
  {
    path:'',
    loadChildren:()=>
    import('./features/about-us/about-us.module').then((m)=> m.AboutUsModule)
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
