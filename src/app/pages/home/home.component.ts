import { Component, OnInit } from '@angular/core';
import { IntroductionComponent } from '../../components/introduction/introduction.component';
import { ProjectsComponent } from '../projects/projects.component';
import { TechnologiesComponent } from '../technologies/technologies.component';
import { LanguageComponent } from '../language/language.component';
import { hobbieComponent } from '../hobbie/hobbie.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    IntroductionComponent,
    ProjectsComponent,
    TechnologiesComponent,
    LanguageComponent,
    hobbieComponent,
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
}
