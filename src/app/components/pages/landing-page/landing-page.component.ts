import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterModule } from '@angular/router';
import { trigger, transition, style, animate } from '@angular/animations';

@Component({
  selector: 'app-landing-page',
  standalone: true,
  imports: [RouterModule, CommonModule],
  templateUrl: './landing-page.component.html',
  styleUrl: './landing-page.component.css',
  animations: [
    trigger('fadeSlideIn', [
      transition(':enter', [
        style({ opacity: 0, transform: 'translateX(-50px)' }),
        animate(
          '800ms ease-out',
          style({ opacity: 1, transform: 'translateX(0)' }),
        ),
      ]),
    ]),
  ],
})
export class LandingPageComponent {
  menuItems = [
    {
      name: 'Classic Smash',
      price: '8.99',
      description:
        'Double smashed patty, melted american cheese, grilled onions, pickles, and our secret street sauce on a brioche bun.',
      image: '/images/burger.jpg',
    },
    {
      name: 'Spicy Clucker',
      price: '9.49',
      description:
        'Crispy buttermilk fried chicken thigh, spicy jalapeño slaw, sriracha mayo, and pickles.',
      image: '/images/burger.jpg',
    },
    {
      name: 'Loaded Street Fries',
      price: '5.99',
      description:
        'Crispy skin-on fries topped with liquid cheese gold, crispy bacon bits, spring onions, and ranch drizzle.',
      image: '/images/burger.jpg',
    },
    {
      name: 'BBQ Pulled Pork',
      price: '10.99',
      description:
        '12-hour slow smoked pork shoulder, tangy house BBQ sauce, crunchy slaw, and pickled red onions.',
      image: '/images/burger.jpg',
    },
    {
      name: 'The Veggie Stack',
      price: '8.49',
      description:
        'Grilled halloumi cheese, roasted red peppers, portobello mushroom, arugula, and pesto mayo.',
      image: '/images/burger.jpg',
    },
    {
      name: 'Killer Shake',
      price: '4.99',
      description:
        'Extra thick hand-spun milkshake. Choose from: Vanilla Bean, Double Choc, or Strawberry Smash.',
      image: '/images/burger.jpg',
    },
  ];

  steps = [
    {
      icon: '🔍',
      title: 'BROWSE THE MENU',
      desc: 'Check out our handcrafted selection of burgers, sides, and shakes.',
    },
    {
      icon: '🛍️',
      title: 'PLACE YOUR ORDER',
      desc: 'Quick and easy. Just a few taps and your feast is being prepped.',
    },
    {
      icon: '🍴',
      title: 'ENJOY THE FEAST',
      desc: 'Fresh food, delivered to your door or ready for pickup in minutes.',
    },
  ];
}
