import { Routes } from '@angular/router';
import { UserComponent } from './components/user/user.component';
import { AdduserComponent } from './components/adduser/adduser.component';

export const routes: Routes = [
    {path:"user", component: UserComponent},
    {path:"adduser", component: AdduserComponent},
    
];
