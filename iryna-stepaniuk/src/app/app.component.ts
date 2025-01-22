import { Component } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';
import {
  NbActionsModule,
  NbButtonModule,
  NbIconModule,
  NbLayoutModule,
} from '@nebular/theme';
import { HomeComponent } from './pages/home/home.component';
import { CvComponent } from './pages/cv/cv.component';
import { ContactsComponent } from './pages/contacts/contacts.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterModule,
    NbLayoutModule,
    NbActionsModule,
    NbIconModule,
    NbButtonModule,
    HomeComponent,
    CvComponent,
    ContactsComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'iryna-stepaniuk';
}
