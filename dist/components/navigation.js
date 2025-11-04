export class Navigation {
    constructor() {
        this.navMenu = null;
        this.navLinks = null;
        this.navMenu = document.querySelector('.nav-menu');
        this.navLinks = document.querySelectorAll('.nav-link');
    }
    init() {
        this.setupActiveNavigation();
        this.setupMobileMenu();
    }
    setupActiveNavigation() {
        if (!this.navLinks)
            return;
        // Set active nav item based on scroll position
        window.addEventListener('scroll', () => {
            const sections = document.querySelectorAll('section[id]');
            const scrollPos = window.scrollY + 100;
            sections.forEach(section => {
                const sectionTop = section.offsetTop;
                const sectionHeight = section.offsetHeight;
                const sectionId = section.getAttribute('id');
                if (scrollPos >= sectionTop && scrollPos < sectionTop + sectionHeight) {
                    this.navLinks?.forEach(link => {
                        link.classList.remove('active');
                        if (link.getAttribute('href') === `#${sectionId}`) {
                            link.classList.add('active');
                        }
                    });
                }
            });
        });
    }
    setupMobileMenu() {
        // Add mobile menu toggle functionality
        const mobileToggle = document.createElement('button');
        mobileToggle.className = 'mobile-toggle';
        mobileToggle.innerHTML = '☰';
        const navContainer = document.querySelector('.nav-container');
        navContainer?.appendChild(mobileToggle);
        mobileToggle.addEventListener('click', () => {
            this.navMenu?.classList.toggle('active');
            mobileToggle.classList.toggle('active');
        });
        // Close mobile menu when clicking nav links
        this.navLinks?.forEach(link => {
            link.addEventListener('click', () => {
                this.navMenu?.classList.remove('active');
                mobileToggle.classList.remove('active');
            });
        });
    }
}
//# sourceMappingURL=navigation.js.map