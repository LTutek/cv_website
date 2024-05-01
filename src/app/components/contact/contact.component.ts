import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss',
})
export class ContactComponent {
  @ViewChild('email') emailElement!: ElementRef;
  constructor() {}

  ngAfterViewInit(): void {
    // Get the modal
    const modal = document.getElementById('myModal');

    if (!modal) return; // Exit early if modal is null

    // Get the icon that opens the modal
    const icon = document.getElementById('myBtn');

    // Get the <span> element that closes the modal
    const span = document.getElementsByClassName('close')[0] as HTMLElement;

    // When the user clicks on the icon, open the modal
    if (icon) {
      icon.onclick = function () {
        modal.style.display = 'block';
      };
    }

    // When the user clicks on <span> (x), close the modal
    if (span) {
      span.onclick = function () {
        modal.style.display = 'none';
      };
    }

    // When the user clicks anywhere outside of the modal, close it
    window.onclick = function (event) {
      if (event.target == modal) {
        modal.style.display = 'none';
      }
    };
  }
  public copyEmail(): void {
    console.log(
      'Attempting to copy:',
      this.emailElement.nativeElement.textContent
    );
    const email = this.emailElement.nativeElement.textContent.trim();
    navigator.clipboard.writeText(email).then(() => {
      alert('Email address copied to clipboard!');
    });
  }
}
