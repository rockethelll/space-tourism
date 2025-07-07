import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarContainer } from "./navbar/navbar-container/navbar-container";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NavbarContainer],
  templateUrl: './app.html',
})
export class App {
}
