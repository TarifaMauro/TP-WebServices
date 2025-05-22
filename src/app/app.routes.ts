import { Routes } from '@angular/router';
import { HomeComponent } from './components/layout/home/home.component';
import { NewsPortalComponent } from './components/public/news-portal/news-portal.component';
import { CarMakerComponent } from './components/public/car-maker/car-maker.component';
import { ConversorComponent } from './components/public/conversor/conversor.component';

export const routes: Routes = [
    { path: "", component: HomeComponent },
    { path: "news-portal", component: NewsPortalComponent },
    { path: "car-maker", component: CarMakerComponent},
    { path: "conversor", component: ConversorComponent},
    { path: "**", redirectTo: ""}
];
