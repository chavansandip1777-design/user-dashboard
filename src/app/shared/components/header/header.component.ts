import { Component, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { SidebarService } from '../../services/sidebar.service';

@Component({
    selector: 'app-header',
    standalone: true,
    imports: [CommonModule, FormsModule],
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
    searchTerm: string = '';
    @Output() searchChange = new EventEmitter<string>();

    constructor(private sidebarService: SidebarService) { }

    toggleSidebar() {
        this.sidebarService.toggleSidebar();
    }

    onSearchChange() {
        this.searchChange.emit(this.searchTerm);
    }
}
