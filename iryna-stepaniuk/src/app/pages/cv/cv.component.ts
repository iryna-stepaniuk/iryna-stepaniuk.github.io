import { Component } from '@angular/core';
import { NbCardModule, NbIconComponent, NbIconModule } from '@nebular/theme';

@Component({
  selector: 'app-cv',
  standalone: true,
  imports: [NbCardModule, NbIconModule],
  templateUrl: './cv.component.html',
  styleUrl: './cv.component.scss',
})
export class CvComponent {}
