export interface User {
  id: number;
  name: string;
  username: string;
  email: string;
  phone: string;
  website: string;
  company: {
    name: string;
  };
  address: {
    city: string;
  };
  status?: 'active' | 'inactive'; // Mock field for filtering
  role?: 'admin' | 'staff' | 'student'; // Mock field for role-based filtering
}
