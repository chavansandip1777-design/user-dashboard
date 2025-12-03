import { Routes } from '@angular/router';
import { UserListComponent } from './components/user-list/user-list.component';
import { UserDetailComponent } from './components/user-detail/user-detail.component';
import { CreateStaffComponent } from './components/create-staff/create-staff.component';

export const routes: Routes = [
  { path: '', component: UserListComponent },
  { path: 'user/:id', component: UserDetailComponent },
  { path: 'create-staff', component: CreateStaffComponent },
  { path: '**', redirectTo: '' }
];
