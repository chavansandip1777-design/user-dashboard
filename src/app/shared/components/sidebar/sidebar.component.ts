import { Component, OnInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { SidebarService } from '../../services/sidebar.service';
import { Subscription } from 'rxjs';

@Component({
    selector: 'app-sidebar',
    standalone: true,
    imports: [CommonModule, RouterModule],
    templateUrl: './sidebar.component.html',
    styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit, OnDestroy {
    isMobileOpen = false;
    private subscription?: Subscription;

    constructor(private sidebarService: SidebarService) { }

    ngOnInit() {
        this.subscription = this.sidebarService.isMobileOpen$.subscribe(
            isOpen => this.isMobileOpen = isOpen
        );
    }

    ngOnDestroy() {
        this.subscription?.unsubscribe();
    }

    closeSidebar() {
        this.sidebarService.closeSidebar();
    }
}
