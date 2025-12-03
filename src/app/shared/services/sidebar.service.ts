import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class SidebarService {
    private isMobileOpenSubject = new BehaviorSubject<boolean>(false);
    public isMobileOpen$ = this.isMobileOpenSubject.asObservable();

    toggleSidebar() {
        this.isMobileOpenSubject.next(!this.isMobileOpenSubject.value);
    }

    closeSidebar() {
        this.isMobileOpenSubject.next(false);
    }

    openSidebar() {
        this.isMobileOpenSubject.next(true);
    }
}
