import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WebHomeMainComponent } from './components/web-home-main/web-home-main.component';
import { HomePageComponent } from './components/home-page/home-page.component';

const routes: Routes = [
  {
    path:'',
    component:WebHomeMainComponent,
    children:[
      {path:'', component:HomePageComponent},
      {path:'', redirectTo:'/', pathMatch:'full'}

    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class WebHomeRoutingModule { }
