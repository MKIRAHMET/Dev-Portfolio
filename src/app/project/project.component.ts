//project.component.ts
import { Component } from '@angular/core';

@Component({
  selector: 'app-project',
  standalone: true,
  imports: [],
  templateUrl: './project.component.html',
  styleUrl: './project.component.css'
})
export class ProjectComponent {
  projects = [
    { id: 1, name: 'UMC', description: 'MMA organization', status: 'Completed'},
    { id: 2, name: 'Thalatta', description: 'Thallata - Sea Adventures.', status: 'Completed'},
    { id: 3, name: 'Angular Portfolio', description: 'My portfolio', status: 'Working'}
  ];
}
