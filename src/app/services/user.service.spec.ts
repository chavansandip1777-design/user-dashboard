import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { UserService } from './user.service';
import { User } from '../models/user.model';

describe('UserService', () => {
  let service: UserService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [UserService]
    });
    service = TestBed.inject(UserService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpMock.verify();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should fetch users from API', () => {
    const mockUsers: User[] = [
      {
        id: 1,
        name: 'Leanne Graham',
        username: 'Bret',
        email: 'Sincere@april.biz',
        phone: '1-770-736-8031 x56442',
        website: 'hildegard.org',
        company: { name: 'Romaguera-Crona' },
        address: { city: 'Gwenborough' }
      }
    ];

    service.getUsers().subscribe(users => {
      expect(users.length).toBe(1);
      expect(users[0].name).toBe('Leanne Graham');
      expect(users[0]).toHaveProperty('status');
    });

    const req = httpMock.expectOne('https://jsonplaceholder.typicode.com/users');
    expect(req.request.method).toBe('GET');
    req.flush(mockUsers);
  });

  it('should fetch a single user by ID', () => {
    const mockUser: User = {
      id: 1,
      name: 'Leanne Graham',
      username: 'Bret',
      email: 'Sincere@april.biz',
      phone: '1-770-736-8031 x56442',
      website: 'hildegard.org',
      company: { name: 'Romaguera-Crona' },
      address: { city: 'Gwenborough' }
    };

    service.getUserById(1).subscribe(user => {
      expect(user.id).toBe(1);
      expect(user.name).toBe('Leanne Graham');
    });

    const req = httpMock.expectOne('https://jsonplaceholder.typicode.com/users/1');
    expect(req.request.method).toBe('GET');
    req.flush(mockUser);
  });
});
