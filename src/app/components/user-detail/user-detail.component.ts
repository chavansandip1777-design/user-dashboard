import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from '../../services/user.service';
import { User } from '../../models/user.model';
import { SidebarComponent } from '../../shared/components/sidebar/sidebar.component';
import { HeaderComponent } from '../../shared/components/header/header.component';
import { FooterComponent } from '../../shared/components/footer/footer.component';

@Component({
  selector: 'app-user-detail',
  standalone: true,
  imports: [CommonModule, SidebarComponent, HeaderComponent, FooterComponent],
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.scss']
})
export class UserDetailComponent implements OnInit {
  user: User | null = null;
  isLoading: boolean = false;
  error: string | null = null;
  activeTab: 'details' | 'kyc' | 'actions' = 'details';

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private userService: UserService
  ) { }

  ngOnInit(): void {
    const userId = this.route.snapshot.paramMap.get('id');
    if (userId) {
      this.loadUser(+userId);
    }
  }

  loadUser(id: number): void {
    this.isLoading = true;
    this.error = null;

    this.userService.getUserById(id).subscribe({
      next: (user) => {
        this.user = user;
        this.isLoading = false;
      },
      error: (err) => {
        this.error = 'Failed to load user details. Please try again later.';
        this.isLoading = false;
        console.error('Error loading user:', err);
      }
    });
  }

  goBack(): void {
    this.router.navigate(['/']);
  }

  getStatusClass(status?: string): string {
    return status === 'active' ? 'status-active' : 'status-inactive';
  }

  toggleUserStatus(): void {
    if (this.user) {
      this.user.status = this.user.status === 'active' ? 'inactive' : 'active';
    }
  }
}
