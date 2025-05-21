import { Routes } from '@angular/router';
import { HomeComponent } from './components/layout/home/home.component';
import { NewsPortalComponent } from './components/public/news-portal/news-portal.component';

export const routes: Routes = [
    { path: "", component: HomeComponent },
    { path: "news-portal", component: NewsPortalComponent },
    { path: "**", redirectTo: ""}
];
