import { Component } from '@angular/core';
import { SearchService } from '../services/search.service';

@Component({
    selector: 'app-navbar',
    templateUrl: './navbar.component.html',
    styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
    searchTerm: string = '';

    constructor(private searchService: SearchService) {}

    onSearchChange(event: Event) {
        const target = event.target as HTMLInputElement;
        this.searchTerm = target.value;
        this.searchService.setSearchTerm(this.searchTerm);
    }
}
