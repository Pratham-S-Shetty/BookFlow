import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent {
  openNav() {
    document.getElementById('mySidebar')!.style.left = '0';
    document.getElementById('dimmingEffect')!.style.display = 'block';
    document.querySelector('.dimmable-content')!.classList.add('dimmed');
  }

  closeNav() {
    document.getElementById('mySidebar')!.style.left = '-250px';
    document.getElementById('dimmingEffect')!.style.display = 'none';
    document.querySelector('.dimmable-content')!.classList.remove('dimmed');
  }
}
