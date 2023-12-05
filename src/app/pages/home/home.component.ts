import { Component, OnInit } from '@angular/core';
import { IntroductionComponent } from '../../components/introduction/introduction.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [IntroductionComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent implements OnInit {
  slideIndex: number = 0;

  constructor() { }

  ngOnInit() {
    this.showSlide(this.slideIndex);
  }

  showSlide(index: number) {
    const slides = document.getElementsByClassName("mySlides") as HTMLCollectionOf<HTMLElement>;
    for (let i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
    }
    slides[index].style.display = "block";
  }

  nextSlide() {
    this.slideIndex++;
    const slides = document.getElementsByClassName("mySlides") as HTMLCollectionOf<HTMLElement>;
    if (this.slideIndex >= slides.length) {
      this.slideIndex = 0;
    }
    this.showSlide(this.slideIndex);
  }
}
