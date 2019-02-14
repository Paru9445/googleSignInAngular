import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GoogleSignInComponent } from './google-sign-in/google-sign-in.component';
import { PrivacyPolicyComponent } from './privacy-policy/privacy-policy.component';

const routes: Routes = [
  { path: '', redirectTo: '/signin', pathMatch: 'full' },
  { path: 'signin', component: GoogleSignInComponent },
  { path: 'privacy', component: PrivacyPolicyComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
