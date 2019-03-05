import { Routes } from '@angular/router';
import { AddVehiculoComponent } from './components/add-vehiculo/add-vehiculo.component';
import { ListVehiculoComponent } from './components/list-vehiculo/list-vehiculo.component';

export const ROUTES: Routes = [
    { path: 'add-vehiculo', component: AddVehiculoComponent },
    { path: 'list-vehiculo', component: ListVehiculoComponent },
    { path: '', pathMatch: 'full', redirectTo: 'list-vehiculo' },
    { path: '**', pathMatch: 'full', redirectTo: 'list-vehiculo' }
];