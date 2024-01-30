import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LogginModalService {
  private modalVisible = false;

  isModalVisible(): boolean {
    return this.modalVisible;
  }

  showModal(): void {
    this.modalVisible = true;
  }

  hideModal(): void {
    this.modalVisible = false;
  }
}