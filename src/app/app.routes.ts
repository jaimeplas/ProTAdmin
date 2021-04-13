import { RouterModule, Routes } from "@angular/router";
import { NopagefoundComponent } from './shared/nopagefound/nopagefound.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './login/register/register.component';

const appRoutes: Routes = [
    {path:'login', component: LoginComponent},
    {path:'register', component: RegisterComponent},
    {path:'**', component: NopagefoundComponent},
]

export const APP_ROUTE = RouterModule.forRoot(appRoutes, {useHash: true})