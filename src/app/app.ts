import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  sorpresa = false;

  activarSorpresa() {
    this.sorpresa = true;
  }
}