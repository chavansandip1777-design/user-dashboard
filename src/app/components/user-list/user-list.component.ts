import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from '../../services/user.service';
import { User } from '../../models/user.model';
import { SidebarComponent } from '../../shared/components/sidebar/sidebar.component';
import { HeaderComponent } from '../../shared/components/header/header.component';
import { FooterComponent } from '../../shared/components/footer/footer.component';

@Component({
  selector: 'app-user-list',
  standalone: true,
  imports: [CommonModule, FormsModule, SidebarComponent, HeaderComponent, FooterComponent],
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})
export class UserListComponent implements OnInit {
  users: User[] = [];
  filteredUsers: User[] = [];
  searchTerm: string = '';
  selectedStatus: 'all' | 'active' | 'inactive' | 'left' = 'all';
  selectedRole: 'all' | 'admin' | 'staff' | 'student' = 'admin';
  isLoading: boolean = false;
  error: string | null = null;
  sidebarOpen: boolean = true;
  showAddUserMenu: boolean = false;
  showRoleDropdown: boolean = false;

  constructor(
    private userService: UserService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.loadUsers();
  }

  loadUsers(): void {
    this.isLoading = true;
    this.error = null;

    this.userService.getUsers().subscribe({
      next: (users) => {
        this.users = users;
        this.filteredUsers = users;
        this.applyFilters();
        this.isLoading = false;
      },
      error: (err) => {
        this.error = 'Failed to load users. Please try again later.';
        this.isLoading = false;
        console.error('Error loading users:', err);
      }
    });
  }

  onSearchChange(): void {
    this.applyFilters();
  }

  onHeaderSearch(searchTerm: string): void {
    this.searchTerm = searchTerm;
    this.applyFilters();
  }

  onStatusChange(status: 'all' | 'active' | 'inactive' | 'left'): void {
    this.selectedStatus = status;
    this.applyFilters();
  }

  applyFilters(): void {
    let filtered = [...this.users];

    // Apply search filter
    if (this.searchTerm) {
      const searchLower = this.searchTerm.toLowerCase();
      filtered = filtered.filter(user =>
        user.name.toLowerCase().includes(searchLower) ||
        user.username.toLowerCase().includes(searchLower) ||
        user.email.toLowerCase().includes(searchLower)
      );
    }

    // Apply role filter
    if (this.selectedRole !== 'all') {
      filtered = filtered.filter(user => user.role === this.selectedRole);
    }

    // Apply status filter
    if (this.selectedStatus !== 'all') {
      filtered = filtered.filter(user => user.status === this.selectedStatus);
    }

    this.filteredUsers = filtered;
  }

  onRoleChange(): void {
    this.applyFilters();
  }

  toggleSidebar(): void {
    this.sidebarOpen = !this.sidebarOpen;
  }

  toggleAddUserMenu(): void {
    this.showAddUserMenu = !this.showAddUserMenu;
  }

  toggleRoleDropdown(): void {
    this.showRoleDropdown = !this.showRoleDropdown;
  }

  selectRole(role: 'admin' | 'staff' | 'student'): void {
    this.selectedRole = role;
    this.showRoleDropdown = false;
    this.applyFilters();
  }

  addUser(type: string): void {
    this.showAddUserMenu = false;
    if (type === 'staff') {
      this.router.navigate(['/create-staff']);
    }
    // Add navigation for student if needed
    console.log('Add user:', type);
  }

  getAdminCount(): number {
    return this.users.filter(u => u.role === 'admin').length;
  }

  getStaffCount(): number {
    return this.users.filter(u => u.role === 'staff').length;
  }

  getStudentCount(): number {
    return this.users.filter(u => u.role === 'student').length;
  }

  getActiveCount(): number {
    return this.users.filter(u => u.status === 'active').length;
  }

  getInactiveCount(): number {
    return this.users.filter(u => u.status === 'inactive').length;
  }

  getActiveCountForRole(role: string): number {
    return this.users.filter(u => u.role === role && u.status === 'active').length;
  }

  getInactiveCountForRole(role: string): number {
    return this.users.filter(u => u.role === role && u.status === 'inactive').length;
  }

  toggleUserStatus(user: User): void {
    user.status = user.status === 'active' ? 'inactive' : 'active';
  }

  viewProfile(userId: number): void {
    this.router.navigate(['/user', userId]);
  }

  getStatusClass(status?: string): string {
    return status === 'active' ? 'status-active' : 'status-inactive';
  }
}
