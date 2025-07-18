import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { NgClass } from '@angular/common';

@Component({
  selector: 'app-destination',
  imports: [NgClass],
  templateUrl: './destination.html',
})
export class Destination {
  constructor(private router: Router) {}

  destinations = [
    {
      name: 'Moon',
      description:
        'See our planet as you’ve never seen it before. A perfect relaxing trip away to help regain perspective and come back refreshed. While you’re there, take in some history by visiting the Luna 2 and Apollo 11 landing sites.',
      distance: '384,400 km',
      travel: '3 days',
      image: '/images/destination/image-moon.webp',
    },
    {
      name: 'Mars',
      description:
        'Don’t forget to pack your hiking boots. You’ll need them to tackle Olympus Mons, the tallest planetary mountain in our solar system. It’s two and a half times the size of Everest!',
      distance: '225 MIL. km',
      travel: '9 months',
      image: '/images/destination/image-mars.webp',
    },
    {
      name: 'Europa',
      description:
        'The smallest of the four Galilean moons orbiting Jupiter, Europa is a winter lover’s dream. With an icy surface, it’s perfect for a bit of ice skating, curling, hockey, or simple relaxation in your snug wintery cabin.',
      distance: '628 MIL. km',
      travel: '3 years',
      image: '/images/destination/image-europa.webp',
    },
    {
      name: 'Titan',
      description:
        'The only moon known to have a dense atmosphere other than Earth, Titan is a home away from home (just a few hundred degrees colder!). As a bonus, you get striking views of the Rings of Saturn.',
      distance: '1.6 BIL. km',
      travel: '7 years',
      image: '/images/destination/image-titan.webp',
    },
  ];

  selectedDestination = 0;

  setSelectedDestination(index: number) {
    this.selectedDestination = index;
  }

  isActive(name: string): boolean {
    return this.destinations[this.selectedDestination].name === name;
  }
}
