import { Navigation } from './components/navigation.js';
import { Portfolio } from './components/portfolio.js';

class App {
    private navigation: Navigation;
    private portfolio: Portfolio;

    constructor() {
        this.navigation = new Navigation();
        this.portfolio = new Portfolio();
        this.init();
    }

    private init(): void {
        // Initialize components
        this.navigation.init();
        this.portfolio.init();

        // Add smooth scrolling
        this.setupSmoothScrolling();
        
        // Add scroll animations
        this.setupScrollAnimations();

        console.log('Portfolio app initialized successfully!');
    }

    private setupSmoothScrolling(): void {
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', (e) => {
                e.preventDefault();
                const href = anchor.getAttribute('href');
                if (href) {
                    const target = document.querySelector(href);
                    if (target) {
                        target.scrollIntoView({
                            behavior: 'smooth',
                            block: 'start'
                        });
                    }
                }
            });
        });
    }

    private setupScrollAnimations(): void {
        const observerOptions = {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('fade-in');
                }
            });
        }, observerOptions);

        // Observe sections for animation
        document.querySelectorAll('section').forEach(section => {
            observer.observe(section);
        });
    }
}

// Initialize the app when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    new App();
});