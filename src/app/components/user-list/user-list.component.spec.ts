import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { UserListComponent } from './user-list.component';
import { UserService } from '../../services/user.service';
import { of, throwError } from 'rxjs';

describe('UserListComponent', () => {
  let component: UserListComponent;
  let fixture: ComponentFixture<UserListComponent>;
  let userService: jasmine.SpyObj<UserService>;

  beforeEach(async () => {
    const userServiceSpy = jasmine.createSpyObj('UserService', ['getUsers']);

    await TestBed.configureTestingModule({
      imports: [UserListComponent, HttpClientTestingModule, RouterTestingModule],
      providers: [
        { provide: UserService, useValue: userServiceSpy }
      ]
    }).compileComponents();

    userService = TestBed.inject(UserService) as jasmine.SpyObj<UserService>;
    fixture = TestBed.createComponent(UserListComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should load users on init', () => {
    const mockUsers = [
      {
        id: 1,
        name: 'John Doe',
        username: 'johndoe',
        email: 'john@example.com',
        phone: '123-456-7890',
        website: 'john.com',
        company: { name: 'Test Co' },
        address: { city: 'Test City' },
        status: 'active' as const
      }
    ];

    userService.getUsers.and.returnValue(of(mockUsers));
    component.ngOnInit();

    expect(component.users.length).toBe(1);
    expect(component.filteredUsers.length).toBe(1);
    expect(component.isLoading).toBe(false);
  });

  it('should filter users by search term', () => {
    component.users = [
      {
        id: 1,
        name: 'John Doe',
        username: 'johndoe',
        email: 'john@example.com',
        phone: '123-456-7890',
        website: 'john.com',
        company: { name: 'Test Co' },
        address: { city: 'Test City' },
        status: 'active'
      },
      {
        id: 2,
        name: 'Jane Smith',
        username: 'janesmith',
        email: 'jane@example.com',
        phone: '098-765-4321',
        website: 'jane.com',
        company: { name: 'Another Co' },
        address: { city: 'Another City' },
        status: 'inactive'
      }
    ];

    component.searchTerm = 'john';
    component.applyFilters();

    expect(component.filteredUsers.length).toBe(1);
    expect(component.filteredUsers[0].name).toBe('John Doe');
  });

  it('should filter users by status', () => {
    component.users = [
      {
        id: 1,
        name: 'John Doe',
        username: 'johndoe',
        email: 'john@example.com',
        phone: '123-456-7890',
        website: 'john.com',
        company: { name: 'Test Co' },
        address: { city: 'Test City' },
        status: 'active'
      },
      {
        id: 2,
        name: 'Jane Smith',
        username: 'janesmith',
        email: 'jane@example.com',
        phone: '098-765-4321',
        website: 'jane.com',
        company: { name: 'Another Co' },
        address: { city: 'Another City' },
        status: 'inactive'
      }
    ];

    component.selectedStatus = 'active';
    component.applyFilters();

    expect(component.filteredUsers.length).toBe(1);
    expect(component.filteredUsers[0].status).toBe('active');
  });

  it('should handle API errors', () => {
    userService.getUsers.and.returnValue(throwError(() => new Error('API Error')));
    component.loadUsers();

    expect(component.error).toBeTruthy();
    expect(component.isLoading).toBe(false);
  });
});
