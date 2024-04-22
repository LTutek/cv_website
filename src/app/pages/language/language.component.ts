import { Component, OnInit } from '@angular/core';
import Chart from 'chart.js/auto';

@Component({
  selector: 'app-language',
  standalone: true,
  imports: [],
  templateUrl: './language.component.html',
  styleUrl: './language.component.scss',
})
export class LanguageComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {
    this.createPieChart();
  }

  createPieChart() {
    const ctx = document.getElementById('pieChart') as HTMLCanvasElement;
    new Chart(ctx, {
      type: 'pie',
      data: {
        labels: ['Deutsch', 'English', 'Croatian', 'French'],
        datasets: [
          {
            label: 'Proficiency',
            data: [35, 27.5, 27.5, 5],
            backgroundColor: [
              '#E61E64',
              '#1781e3',
              '#5944C6',
              '#0EABA9',
              '#9966FF',
            ],
          },
        ],
      },
      options: {
        responsive: true,
        plugins: {
          legend: {
            position: 'top',
          },
        },
      },
    });
  }
}
