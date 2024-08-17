import { Component, output } from '@angular/core';
import { RouterLink } from '@angular/router';
import {MatListModule} from '@angular/material/list';
import {MatIconModule} from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';


@Component({
  selector: 'app-sidenav-list',
  standalone: true,
  imports: [MatListModule, MatIconModule, RouterLink, MatButtonModule],
  templateUrl: './sidenav-list.component.html',
  styleUrl: './sidenav-list.component.scss'
})
export class SidenavListComponent {

  closeSidenav = output<void>();

  onClose() {
    this.closeSidenav.emit();
  }
}
