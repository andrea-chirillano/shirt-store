import { Component } from '@angular/core';
import { LogginModalService } from '../services/loggin-modal.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  constructor(private logginModalService: LogginModalService) {}

  openModal() {
    this.logginModalService.openModal();
  }
}
