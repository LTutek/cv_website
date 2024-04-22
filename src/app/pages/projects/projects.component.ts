import { Component } from '@angular/core';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss',
})
export class ProjectsComponent {
  constructor() {}
  toggleFirstSteps() {
    let dots = document.getElementById('dots');
    let moreText = document.getElementById('more-firstSteps');
    let btnText = document.getElementById('myBtn-firstSteps');

    if (dots && btnText && moreText) {
      if (dots.style.display === 'none') {
        dots.style.display = 'inline';
        btnText.innerHTML = 'Mehr lesen';
        moreText.style.display = 'none';
      } else {
        dots.style.display = 'none';
        btnText.innerHTML = 'Weniger lesen';
        moreText.style.display = 'inline';
      }
    }
  }
  toogleFirstProject() {
    let dots = document.getElementById('dots');
    let moreText = document.getElementById('more-p1');
    let btnText = document.getElementById('myBtn-p1');

    if (dots && btnText && moreText) {
      if (dots.style.display === 'none') {
        dots.style.display = 'inline';
        btnText.innerHTML = 'Mehr lesen';
        moreText.style.display = 'none';
      } else {
        dots.style.display = 'none';
        btnText.innerHTML = 'Weniger lesen';
        moreText.style.display = 'inline';
      }
    }
  }
  toogleSecondProject() {
    let dots = document.getElementById('dots');
    let moreText = document.getElementById('more-p2');
    let btnText = document.getElementById('myBtn-p2');

    if (dots && btnText && moreText) {
      if (dots.style.display === 'none') {
        dots.style.display = 'inline';
        btnText.innerHTML = 'Mehr lesen';
        moreText.style.display = 'none';
      } else {
        dots.style.display = 'none';
        btnText.innerHTML = 'Weniger lesen';
        moreText.style.display = 'inline';
      }
    }
  }
  toogleThirdProject() {
    let dots = document.getElementById('dots');
    let moreText = document.getElementById('more-p3');
    let btnText = document.getElementById('myBtn-p3');

    if (dots && btnText && moreText) {
      if (dots.style.display === 'none') {
        dots.style.display = 'inline';
        btnText.innerHTML = 'Mehr lesen';
        moreText.style.display = 'none';
      } else {
        dots.style.display = 'none';
        btnText.innerHTML = 'Weniger lesen';
        moreText.style.display = 'inline';
      }
    }
  }
}
