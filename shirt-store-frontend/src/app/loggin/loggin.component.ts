// login.component.ts
import { Component } from '@angular/core';
import { LogginModalService } from '../services/loggin-modal.service';

@Component({
  selector: 'app-loggin',
  templateUrl: './loggin.component.html',
  styleUrls: ['./loggin.component.css']
})
export class LogginComponent {
  constructor(private logginModalService: LogginModalService) {}

  closeModal(): void {
    this.logginModalService.hideModal();
  }

  isModalVisible(): void {
    this.logginModalService.isModalVisible();
  }
}
