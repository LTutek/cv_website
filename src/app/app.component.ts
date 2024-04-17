import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { HeaderComponent } from './components/header/header.component';
import { ProjectsComponent } from './pages/projects/projects.component';
import { TechnologiesComponent } from './pages/technologies/technologies.component';
import { LanguageComponent } from './pages/language/language.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    RouterOutlet,
    HomeComponent,
    HeaderComponent,
    ProjectsComponent,
    TechnologiesComponent,
    LanguageComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'cv-website';
}
