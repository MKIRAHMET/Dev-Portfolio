//app.component.ts
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ProjectComponent } from './project/project.component';
import { ProfileComponent } from './profile/profile.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,ProfileComponent,ProjectComponent],
  templateUrl: './app.component.html',
})
export class AppComponent {
  title = 'Developer Portfolio';
}
