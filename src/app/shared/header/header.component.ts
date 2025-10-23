import { Component } from '@angular/core';
import { ButtonComponent } from '../button/button.component'; // caminho relativo correto

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [ButtonComponent],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {}
