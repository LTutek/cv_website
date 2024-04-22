import { Component } from '@angular/core';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss',
})
export class ContactComponent {
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
}
