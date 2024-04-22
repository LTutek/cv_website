import { Component, AfterViewInit } from '@angular/core';

type SupportedLanguage = 'en' | 'es' | 'fr' | 'de' | 'it' | 'hr' | 'pl';

@Component({
  selector: 'app-introduction',
  standalone: true,
  templateUrl: './introduction.component.html',
  styleUrls: ['./introduction.component.scss'],
})
export class IntroductionComponent {
  messages = {
    en: 'Hello!',
    es: 'Hola!',
    fr: 'Bonjour!',
    de: 'Hallo!',
    it: 'Ciao!',
    hr: 'Zdravo!',
    pl: 'Cześć!',
  };

  currentLanguage: SupportedLanguage = 'en';

  updateMessage() {
    const languages = Object.keys(this.messages) as SupportedLanguage[];
    this.currentLanguage =
      languages[
        (languages.indexOf(this.currentLanguage) + 1) % languages.length
      ];
  }

  ngAfterViewInit() {
    setInterval(() => {
      this.updateMessage();
    }, 5000);
  }
}
