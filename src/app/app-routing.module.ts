import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { ComponeteUnoComponent } from './pages/componete-uno/componete-uno.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';


const app_routes: Routes = [

    { path: '', component: DashboardComponent },
    { path: 'login', component: LoginComponent },
    { path: 'componente-uno', component: ComponeteUnoComponent },
    { path: '**', pathMatch: 'full', redirectTo: '' }
];


@NgModule({

    imports: [
        RouterModule.forRoot( app_routes )
    ],
    exports: [
        RouterModule
    ]

})

export class AppRoutingModule {

}
