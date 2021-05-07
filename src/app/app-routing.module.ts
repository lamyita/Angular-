import { AddAddressComponent } from './components/add-address/add-address.component';
import { PageNotFoundComponent } from './components/allpartofbody/page-not-found/page-not-found.component';
import { LoginComponent } from './components/login/login.component';
import { EditAddressComponent } from './components/edit-address/edit-address.component';
import { ListAddressComponent } from './components/list-address/list-address.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './gurds/auth.guard';

const routes: Routes = [

  {path:"", redirectTo:'/address', pathMatch:'full'},

{ path: "address", children:[
  {path:"", component: ListAddressComponent},
  {path:"create",  component:AddAddressComponent},
  {path:"edit/:id", component:EditAddressComponent},

]
 ,
  canActivate: [AuthGuard]

}, 

{path:"login", component:LoginComponent},
{path:"**", component: PageNotFoundComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
