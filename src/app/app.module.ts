import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes} from '@angular/router';
import { AppComponent } from './app.component';
import { RegisterComponent } from './register/register.component';
import { DemoComponent } from './demo/demo.component';
import { LoginFormComponent } from './login-form/login-form.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HttpModule } from '@angular/http';
import { DataService } from './data.service';

var appRoutes: Routes =
[
    {
        path:'',
        component: LoginFormComponent
    },

    {
        path: 'register',
        component: RegisterComponent
    },

    {
        path: 'demo',
        component: DemoComponent
    }
];

@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    DemoComponent,
    LoginFormComponent,
    DashboardComponent
  ],
  imports: [RouterModule.forRoot(appRoutes),
    BrowserModule,
    FormsModule,HttpModule
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
