//profile.component.ts
import { Component } from '@angular/core';
import { NgOptimizedImage } from '@angular/common';

@Component({
  standalone: true,
  selector: 'app-profile',
  templateUrl: 'profile.component.html',
  styleUrls: ['profile.component.css'],
  imports: [NgOptimizedImage]
})
export class ProfileComponent{
  name: string = "Muhammed Kir Ahmet";
role: string = "Software Developer";
location: string = "Thessaloniki, Greece";
linkedinUrl: string = "www.linkedin.com/in/muhammed-kir-ahmet-0ab424267";
githubUrl: string = "https://github.com/MKIRAHMET";
}
