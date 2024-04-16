import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { technologies } from './technologies-data';

@Component({
  selector: 'app-technologies',
  standalone: true,
  imports: [CommonModule, FormsModule],
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
