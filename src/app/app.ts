import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  isMessage = false;
  message = '';

  private getNewMessage() {
    return 'I am the new message';
  }

  showMessage() {
    this.message = this.getNewMessage();
    this.isMessage = true;
  }
}
