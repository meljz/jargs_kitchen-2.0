import { Component } from '@angular/core';


@Component({
  selector: 'app-contact',
  imports: [],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})
export class ContactComponent {
  // Signals for form state
  firstName = signal('');
  lastName = signal('');
  email = signal('');
  message = signal('');

  // Update these paths to match your actual files in src/assets/
  bgImageUrl = 'assets/hero-bg.jpg';
  brandImageUrl = 'assets/burger-feature.png';

  onSubmit(event: Event) {
    event.preventDefault();
    const payload = {
      name: `${this.firstName()} ${this.lastName()}`,
      email: this.email(),
      message: this.message()
    };
    console.log('Jargs Kitchen Submission:', payload);
  }
}
