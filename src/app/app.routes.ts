import { Routes } from '@angular/router';
import { About } from './about/about';
import { Login } from './login/login';
import { Contact } from './contact/contact';
import { Home } from './home/home';
import { PageNotFound } from './page-not-found/page-not-found';
import { Profile } from './profile/profile';
import { User } from './user/user';

export const routes: Routes = [
    {path:'about',component:About},
    {path:'login',component:Login},
    {path:'contact',component:Contact},
     {path:'',component:Home},
     {path:'user/:id/:name',component:User},
        {path:'profile',component:Profile,data:{name:'Harsh Bhoi'}},
     {path:'**',component:PageNotFound},
];
