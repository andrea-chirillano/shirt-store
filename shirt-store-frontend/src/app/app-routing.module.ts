import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CatalogueComponent } from './catalogue/catalogue.component';
import { LogginComponent } from './loggin/loggin.component';
import { SignUpComponent } from './sign-up/sign-up.component';

const routes: Routes = [
  { path: '', component: CatalogueComponent },
  { path: 'loggin', component: LogginComponent },
  { path: 'sign-up', component: SignUpComponent },
  { path: '#', redirectTo: '', pathMatch: 'full' },
  { path: '**', redirectTo: '' }


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
