import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WebPageMainComponent } from './components/web-page-main/web-page-main.component';

const routes: Routes = [
  {
    path:'',
    component:WebPageMainComponent,
    children:[
      // {path:'aboutus', component:AboutusComponent},
      // {path:'life-in-cylsys', component:LifeInCylsysComponent},
      // {path:'team', component:TeamComponent},
      // {path:'events', component:EventsComponent},
      // {path:'certification', component:CertificationComponent},

      {path:'', redirectTo:'/', pathMatch:'full'}

    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class WebPageRoutingModule { }
