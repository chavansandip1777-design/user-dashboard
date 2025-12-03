# User Management App

A modern, responsive Angular application for managing and viewing user information. Built with Angular 17+ and following best practices for component architecture, API integration, and responsive design.

![Angular](https://img.shields.io/badge/Angular-17.0-red)
![TypeScript](https://img.shields.io/badge/TypeScript-5.2-blue)
![SCSS](https://img.shields.io/badge/SCSS-Styling-pink)

## 📋 Features

- **User List Display**: Beautiful card-based grid layout showing user information
- **Search Functionality**: Real-time search by name, username, or email
- **Status Filtering**: Filter users by Active/Inactive status with dynamic tabs
- **User Details View**: Comprehensive detail page with full user information
- **Responsive Design**: Optimized for desktop, tablet, and mobile devices
- **Loading States**: Elegant loading spinners and error handling
- **API Integration**: Fetches data from JSONPlaceholder REST API
- **Modern UI**: Clean, gradient-based design with smooth animations
- **Unit Tests**: Comprehensive test coverage for services and components

## 🎨 Design Reference

The UI closely matches the Figma design specifications:

- Figma Link: [Sample Design](https://www.figma.com/design/wc7ZqwtwqZGGzAHgQ7kX58/sample-design?node-id=0-1&p=f&t=Vc3eEGmu905fewYd-0)

## 🚀 Quick Start

### Prerequisites

Before you begin, ensure you have the following installed:

- **Node.js**: Version 18.x or higher
- **npm**: Version 9.x or higher
- **Angular CLI**: Version 17.x or higher (will be installed with dependencies)

### Installation

1. **Clone or download the repository**

   ```powershell
   cd c:\Users\abamo\Downloads\angular-project
   ```

2. **Install dependencies**

   ```powershell
   npm install
   ```

3. **Start the development server**

   ```powershell
   npm start
   ```

   or

   ```powershell
   ng serve
   ```

4. **Open your browser**
   Navigate to `http://localhost:4200/`

The application will automatically reload when you make changes to the source files.

## 📁 Project Structure

```
angular-project/
├── src/
│   ├── app/
│   │   ├── components/
│   │   │   ├── user-list/          # Main user list page
│   │   │   ├── user-detail/        # User detail view with tabs
│   │   │   └── create-staff/       # Staff creation form
│   │   ├── shared/
│   │   │   ├── components/
│   │   │   │   ├── sidebar/        # Navigation sidebar
│   │   │   │   ├── header/         # Top header with search
│   │   │   │   └── footer/         # Footer component
│   │   │   └── services/
│   │   │       └── sidebar.service.ts  # Sidebar state management
│   │   ├── services/
│   │   │   ├── user.service.ts     # User API service
│   │   │   └── user.service.spec.ts
│   │   ├── models/
│   │   │   └── user.model.ts       # User interface
│   │   ├── app.component.ts
│   │   ├── app.config.ts
│   │   └── app.routes.ts
│   ├── assets/
│   │   └── logo.png                # Application logo
│   ├── styles.scss
│   ├── index.html
│   └── main.ts
├── angular.json
├── package.json
├── tsconfig.json
└── README.md
```

## 🛠️ Available Scripts

- **`npm start`** or **`ng serve`**: Start development server on http://localhost:4200
- **`npm run build`** or **`ng build`**: Build the project for production
- **`npm test`** or **`ng test`**: Run unit tests with Karma
- **`npm run lint`** or **`ng lint`**: Lint the codebase

## 🔧 Technical Stack

- **Framework**: Angular 17 (Standalone Components)
- **Language**: TypeScript 5.2
- **Styling**: SCSS with Flexbox and CSS Grid
- **HTTP Client**: Angular HttpClient with RxJS Observables
- **Routing**: Angular Router
- **Testing**: Jasmine & Karma
- **API**: JSONPlaceholder (https://jsonplaceholder.typicode.com)

## 📦 Key Components

### UserListComponent

- Displays all users in a responsive grid layout
- Implements search functionality
- Provides status filtering (All/Active/Inactive)
- Shows loading states and error handling
- Includes navigation to user detail view

### UserDetailComponent

- Shows comprehensive user information
- Displays contact details, company info, and location
- Provides back navigation to user list
- Responsive design for all screen sizes

### UserService

- Handles API communication with JSONPlaceholder
- Implements RxJS observables for data streaming
- Adds mock status field for filtering demonstration
- Includes error handling and retry logic

## 🎯 Features Implementation

### Search Functionality

Real-time filtering by:

- User name
- Username
- Email address

### Status Filtering

Three filter tabs:

- **All Users**: Shows all users (default)
- **Active**: Shows only active users
- **Inactive**: Shows only inactive users

_Note: Status is randomly assigned to each user for demonstration purposes._

### Responsive Breakpoints

- **Mobile**: < 768px (single column)
- **Tablet**: 768px - 1024px (2 columns)
- **Desktop**: > 1024px (3-4 columns)

## 🧪 Testing

The project includes unit tests for key components and services:

```powershell
# Run all tests
npm test

# Run tests with code coverage
ng test --code-coverage
```

Test files are located alongside their respective components with `.spec.ts` extension.

## 🎨 Styling Approach

- **No UI Libraries**: Custom SCSS styling without Angular Material or PrimeNG
- **Modern Design**: Gradient headers, smooth transitions, and hover effects
- **Consistent Colors**: Purple/blue gradient theme throughout
- **Icons**: Custom SVG icons for better performance
- **Responsive**: Mobile-first approach with breakpoints

## 🌐 API Integration

The application uses the JSONPlaceholder API:

- **Endpoint**: `https://jsonplaceholder.typicode.com/users`
- **Method**: GET
- **Response**: Array of 10 user objects

### User Data Structure

```typescript
interface User {
  id: number;
  name: string;
  username: string;
  email: string;
  phone: string;
  website: string;
  company: { name: string };
  address: { city: string };
  status?: "active" | "inactive"; // Mock field
}
```

## 🚢 Deployment

### Build for Production

```powershell
npm run build
```

The build artifacts will be stored in the `dist/` directory.

### Deployment Options

- **GitHub Pages**: Use `angular-cli-ghpages`
- **Netlify**: Drag and drop the `dist` folder
- **Vercel**: Connect your repository
- **Firebase Hosting**: Use Firebase CLI

Example for GitHub Pages:

```powershell
npm install -g angular-cli-ghpages
ng build --base-href "https://<username>.github.io/<repo-name>/"
npx angular-cli-ghpages --dir=dist/user-management-app
```

## 📸 Screenshots

### Desktop View

The main user list page displays users in a responsive grid with search and filter options.

### Mobile View

On mobile devices, the layout adapts to a single column for optimal viewing.

### User Detail View

Clicking "View Profile" navigates to a detailed view with all user information.

## 🔍 Code Quality

- **TypeScript Strict Mode**: Enabled for type safety
- **ESLint**: Configured for code consistency
- **Component Structure**: Standalone components for better modularity
- **Service Pattern**: Centralized API logic
- **Reactive Programming**: RxJS for asynchronous operations

## 📝 Best Practices Implemented

✅ Standalone components (Angular 17 feature)  
✅ Signals and modern Angular patterns  
✅ Proper error handling and loading states  
✅ Responsive design with SCSS  
✅ Component-based architecture  
✅ Service layer for API calls  
✅ Unit tests for critical functionality  
✅ Type safety with TypeScript  
✅ Clean, maintainable code structure  
✅ Performance optimizations

## 🤝 Contributing

This is a sample project for demonstration purposes. Feel free to fork and modify as needed.

## 📄 License

This project is open source and available under the MIT License.

## 👨‍💻 Author

Created as part of a UI Assignment demonstrating Angular best practices and responsive design.

## 🙏 Acknowledgments

- **JSONPlaceholder**: Free fake API for testing
- **Angular Team**: For the amazing framework
- **Design**: Based on Figma specifications

---

For any questions or issues, please create an issue in the repository.
