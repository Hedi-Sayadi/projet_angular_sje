import { NgModule } from '@angular/core';


import { RouterModule, Routes } from '@angular/router';


import { CoutfinalComponent } from './coutfinal/coutfinal.component';
import { PrecedentComponent } from './precedent/precedent.component';
import { SuivantComponent } from './suivant/suivant.component';


const appRoutes:Routes=[
  {path:'suivant',component:SuivantComponent},
  {path:'coutfinal',component:CoutfinalComponent},
  {path:'precedent',component:PrecedentComponent},
]

@NgModule({

  imports: [
   
    RouterModule.forRoot(appRoutes)
 
  ],
  exports:[RouterModule]

  
  
})
export class AppRoutingModule { }
