import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { technologies } from './technologies-data';
import { FormsModule } from '@angular/forms';
import { MatRadioModule } from '@angular/material/radio';

@Component({
  selector: 'app-technologies',
  standalone: true,
  imports: [CommonModule, FormsModule, MatRadioModule],
  templateUrl: './technologies.component.html',
  styleUrl: './technologies.component.scss',
})
export class TechnologiesComponent {
  technologies = technologies;

  selectedCategory: string = 'frontend';
  filteredTechnologies: any[];

  constructor() {
    this.filteredTechnologies = this.filterTechnologies();
  }

  onCategoryChange() {
    this.filteredTechnologies = this.filterTechnologies();
  }

  private filterTechnologies(): any[] {
    return this.technologies.filter((tech) =>
      tech.category.split(',').includes(this.selectedCategory)
    );
  }
}
