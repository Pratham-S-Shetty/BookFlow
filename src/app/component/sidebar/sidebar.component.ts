import { Component } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.scss',
})
export class SidebarComponent {
  closeNav() {
    document.getElementById('mySidebar')!.style.left = '-250px';
    document.getElementById('dimmingEffect')!.style.display = 'none';
    document.querySelector('.dimmable-content')!.classList.remove('dimmed');
  }
}
