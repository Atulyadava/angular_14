import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ContectComponent } from './contect/contect.component';
import { AddcontectComponent } from './addcontect/addcontect.component';
import { EditcontectComponent } from './editcontect/editcontect.component';
import { StatusComponent } from './status/status.component';
import { AuthGuard } from './Guard/auth.guard';
import { UserComponent } from './user/user.component';
import { TeamComponent } from './team/team.component';
import { UpdatePlayerComponent } from './update-player/update-player.component';


const routes: Routes = [
  {
    path:'home',
    component:HomeComponent,
    canActivate:[AuthGuard]
},
{
  path:'about',
  component:AboutComponent,
  canActivate:[AuthGuard]
},
{
  path:"editTeam/:id",
  component:UpdatePlayerComponent
}
,
{
  path:'team',
  component:TeamComponent
},
{
path:'user',
component:UserComponent,
canActivate:[AuthGuard]
},
{
  path:'contect',
  component:ContectComponent,
  children:[
    {
      path:'add',
      component:AddcontectComponent
    },
    {
      path:'edit/:id',
      component:EditcontectComponent
    }
  ],canActivate:[AuthGuard]
},
{
path:"access",
loadChildren:()=>import('./access/access.module').then(opt=>opt.AccessModule)
},
{
  path:'login',
  loadComponent:()=>import('./login/login.component').then(opt=>opt.LoginComponent)
},
{
  path:"**",
  component:StatusComponent
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
