import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {LoginComponent} from './login/login.component';
import {ProfilComponent} from './profil/profil.component';
import {AuthService} from "./auth.service";
import {RouterModule, Routes} from '@angular/router';
import {PageNotFoundComponent} from './page-not-found/page-not-found.component';
import {HttpClientModule} from '@angular/common/http';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {
    MatButtonModule,
    MatCheckboxModule, MatDialogModule,
    MatFormFieldModule,
    MatIconModule,
    MatInputModule
} from '@angular/material';
import {MatCardModule} from '@angular/material/card';

import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {CommonModule} from "@angular/common";

import {CanActivate} from '@angular/router';
import {AuthGuardService} from './auth-guard-service';
import {RoleGuardService,} from './role-guard.service';
import {AdminComponent} from './admin/admin.component';
import {JwtHelperService, JwtModule, JwtModuleOptions} from "@auth0/angular-jwt";
import {PublicComponent} from './public/public.component';
import {LogoutComponent} from './logout/logout.component';
import {PostService} from "./providers/post.service";
import {PostComponent, DialogContentExampleDialog} from './post/post.component';


export const appRoutes: Routes = [
    {path: 'login', component: LoginComponent},
    {path: 'public', component: PublicComponent},
    {path: 'logout', component: LogoutComponent},
    {
        path: 'posts',
        component: PostComponent,
        canActivate: [AuthGuardService]
    },
    {
        path: 'profil',
        component: ProfilComponent,
        canActivate: [AuthGuardService]
    },
    {
        path: '',
        redirectTo: '/', pathMatch: 'full'
    },
    {
        path: 'admin',
        component: AdminComponent,
        canActivate: [RoleGuardService],
        data: {
            /*expectedRole: 'admin',*/
            expectedRoles: ['user', 'admin']
        }
    },
    {path: '**', component: PageNotFoundComponent}
];

export function getAccessToken() {
    console.log('localStorage.getItem(\'token\')', localStorage.getItem('token'));
    return localStorage.getItem('token');
}

@NgModule({
    declarations: [
        AppComponent,
        LoginComponent,
        ProfilComponent,
        PageNotFoundComponent,
        AdminComponent,
        PublicComponent,
        LogoutComponent,
        PostComponent,
        DialogContentExampleDialog
    ],
    imports: [
        BrowserModule,
        HttpClientModule,
        BrowserAnimationsModule, MatButtonModule, MatCheckboxModule,
        MatIconModule, MatFormFieldModule,
        MatInputModule, MatCardModule,
        ReactiveFormsModule,
        CommonModule, MatDialogModule,
        FormsModule,
        RouterModule.forRoot(
            appRoutes,
            {enableTracing: false} // <-- debugging purposes only
        ),
        JwtModule.forRoot({
            config: {
                tokenGetter: (getAccessToken),
                whitelistedDomains: ['localhost:3000']
            }
        })
    ],
    entryComponents: [
        DialogContentExampleDialog
    ],
    providers: [
        AuthService,
        AuthGuardService,
        RoleGuardService,
        JwtHelperService,
        PostService
    ],
    bootstrap: [AppComponent]
})
export class AppModule {
}
