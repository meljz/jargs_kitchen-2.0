import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../../../services/auth.service'; // adjust path if needed
import { RouterLink } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [RouterLink, FormsModule],
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent {
  name: string = '';
  email: string = '';
  password: string = '';
  constructor(
    private authService: AuthService,
    private router: Router,
  ) {}

  registerUser() {
    const data = {
      name: this.name,
      email: this.email,
      password: this.password,
    };

    this.authService.register(data).subscribe({
      next: (res) => {
        console.log('Registered:', res);
        alert('Registered successfully!');
        this.router.navigate(['/auth/login']);
      },
      error: (err) => {
        alert('Registration failed!');
        console.error('Registration failed:', err);
      },
    });
  }
}
