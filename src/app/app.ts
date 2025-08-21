import { Component, OnInit, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet],
  templateUrl: './app.html',
  styleUrls: ['./app.css']
})
export class App implements OnInit {
  title = 'Hemanth Kumar Portfolio';

  ngOnInit() {
    this.checkScrollPosition();
    this.setupEmailLink();
  }

  @HostListener('window:scroll', [])
  onWindowScroll() {
    this.checkScrollPosition();
  }

  checkScrollPosition() {
    const backToTopButton = document.getElementById('backToTop');
    if (backToTopButton) {
      if (window.scrollY > 300) {
        backToTopButton.classList.add('visible');
      } else {
        backToTopButton.classList.remove('visible');
      }
    }
  }

  scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
  
  setupEmailLink() {
    const emailLink = document.querySelector('a[href^="mailto:"]');
    if (emailLink) {
      emailLink.addEventListener('click', (e) => {
        const email = 'hemanthkumars0112@gmail.com';
        window.location.href = `mailto:${email}`;
      });
    }
  }
  
  sendEmail() {
    const email = 'hemanthkumars0112@gmail.com';
    window.location.href = `mailto:${email}`;
  }
}