import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, map } from 'rxjs';
import { User } from '../models/user.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private apiUrl = 'https://jsonplaceholder.typicode.com/users';

  constructor(private http: HttpClient) { }

  getUsers(): Observable<User[]> {
    return this.http.get<User[]>(this.apiUrl).pipe(
      map(users => this.addMockStatusAndRole(users))
    );
  }

  // Mock status and role assignment for filtering demonstration
  private addMockStatusAndRole(users: User[]): User[] {
    const roles: ('admin' | 'staff' | 'student')[] = ['admin', 'staff', 'student'];
    return users.map((user, index) => ({
      ...user,
      status: Math.random() > 0.5 ? 'active' : 'inactive',
      role: roles[index % 3]
    }));
  }

  getUserById(id: number): Observable<User> {
    return this.http.get<User>(`${this.apiUrl}/${id}`).pipe(
      map(user => ({
        ...user,
        status: Math.random() > 0.5 ? 'active' : 'inactive',
        role: (['admin', 'staff', 'student'] as const)[Math.floor(Math.random() * 3)]
      }))
    );
  }
}
