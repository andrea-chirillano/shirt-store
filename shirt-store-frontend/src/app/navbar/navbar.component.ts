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

    onSearchChange() {
        this.searchService.setSearchTerm(this.searchTerm);
        console.log(this.searchTerm, "1")
    }
    
    onSearchSubmit() {
        this.onSearchChange();
    }

}
