import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { SidebarComponent } from '../../shared/components/sidebar/sidebar.component';
import { HeaderComponent } from '../../shared/components/header/header.component';
import { FooterComponent } from '../../shared/components/footer/footer.component';

@Component({
    selector: 'app-create-staff',
    standalone: true,
    imports: [CommonModule, FormsModule, SidebarComponent, HeaderComponent, FooterComponent],
    templateUrl: './create-staff.component.html',
    styleUrls: ['./create-staff.component.scss']
})
export class CreateStaffComponent {
    staff = {
        name: '',
        username: '',
        email: '',
        phone: '',
        role: 'staff',
        department: '',
        joiningDate: '',
        address: '',
        city: '',
        emergencyContact: '',
        bloodGroup: '',
        status: 'active'
    };

    constructor(private router: Router) { }

    onSubmit() {
        console.log('Staff created:', this.staff);
        // Here you would typically call a service to save the staff
        this.router.navigate(['/']);
    }

    goBack() {
        this.router.navigate(['/']);
    }
}
