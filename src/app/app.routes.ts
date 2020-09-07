import { CadastroComponent } from './demos/reactiveForms/cadastro/cadastro.component';
import { Routes } from '@angular/router';
import { HomeComponent } from './navegacao/home/home.component';
import { SobreComponent } from './institucional/sobre/sobre.component';

export const rootRouterConfig: Routes = [
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    { path: 'home', component: HomeComponent },
    { path: 'cadastro', component: CadastroComponent },
    { path: 'sobre', component: SobreComponent }
];