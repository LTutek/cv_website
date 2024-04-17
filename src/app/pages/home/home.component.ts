import { Component, OnInit } from '@angular/core';
import { IntroductionComponent } from '../../components/introduction/introduction.component';
import { ProjectsComponent } from '../projects/projects.component';
import { TechnologiesComponent } from '../technologies/technologies.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [IntroductionComponent, ProjectsComponent, TechnologiesComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
}
