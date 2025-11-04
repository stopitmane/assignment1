interface Project {
    id: number;
    title: string;
    description: string;
    technologies: string[];
    image: string;
    demoUrl?: string;
    githubUrl?: string;
}

export class Portfolio {
    private projects: Project[] = [
        {
            id: 1,
            title: "Freshcart E-Commerce",
            description: "E-commerce web app using Django REST API and React for seamless shopping experience",
            technologies: ["Django", "React", "REST API", "Python"],
            image: "https://via.placeholder.com/300x200/4f46e5/ffffff?text=Freshcart",
            demoUrl: "https://freshcart-candy-com.vercel.app/",
            githubUrl: "https://github.com/stopitmane"
        },
        {
            id: 2,
            title: "Crypto Tracker",
            description: "Real-time cryptocurrency tracker using CoinGecko API and React",
            technologies: ["React", "JavaScript", "API Integration", "CSS"],
            image: "https://via.placeholder.com/300x200/059669/ffffff?text=Crypto+Tracker",
            demoUrl: "https://crypto-tracker-wttp.vercel.app/",
            githubUrl: "https://github.com/stopitmane"
        },
        {
            id: 3,
            title: "Blog Platform Backend",
            description: "RESTful backend API built with Node.js and Express.js for managing blog posts, users, and comments",
            technologies: ["Node.js", "Express.js", "MongoDB", "JWT"],
            image: "https://via.placeholder.com/300x200/dc2626/ffffff?text=Blog+API",
            demoUrl: "https://express-book-reviews-teal.vercel.app/",
            githubUrl: "https://github.com/stopitmane/blog-platform-backend.git"
        },
        {
            id: 4,
            title: "Progressive Web App",
            description: "PWA built with Django REST API and TypeScript, featuring offline support and task synchronization",
            technologies: ["Django", "TypeScript", "PWA", "Service Workers"],
            image: "https://via.placeholder.com/300x200/7c3aed/ffffff?text=PWA",
            demoUrl: "https://pwa-task-9.vercel.app/",
            githubUrl: "https://github.com/stopitmane"
        },
        {
            id: 5,
            title: "CV Builder App",
            description: "Single-page CV Builder web app using Angular and TypeScript",
            technologies: ["Angular", "TypeScript", "CSS", "HTML"],
            image: "https://via.placeholder.com/300x200/f59e0b/ffffff?text=CV+Builder",
            demoUrl: "https://cv-app-one-sable.vercel.app/",
            githubUrl: "https://github.com/stopitmane"
        },
        {
            id: 6,
            title: "Product Dashboard",
            description: "E-commerce dashboard built with responsive design and TypeScript for seamless shopping experience",
            technologies: ["TypeScript", "React", "Dashboard", "Responsive"],
            image: "https://via.placeholder.com/300x200/10b981/ffffff?text=Dashboard",
            demoUrl: "https://product-dashboard-task-drab.vercel.app/",
            githubUrl: "https://github.com/stopitmane"
        }
    ];

    public init(): void {
        this.renderProjects();
        this.setupContactForm();
        this.setupCTAButton();
        this.setupProjectFilters();
    }

    private renderProjects(): void {
        const projectGrid = document.getElementById('projectGrid');
        if (!projectGrid) return;

        projectGrid.innerHTML = this.projects.map(project => `
            <div class="project-card" data-technologies="${project.technologies.join(',').toLowerCase()}">
                <div class="project-image">
                    <img src="${project.image}" alt="${project.title}" loading="lazy">
                    <div class="project-overlay">
                        <div class="project-links">
                            ${project.demoUrl ? `<a href="${project.demoUrl}" class="project-link" target="_blank">Demo</a>` : ''}
                            ${project.githubUrl ? `<a href="${project.githubUrl}" class="project-link" target="_blank">Code</a>` : ''}
                        </div>
                    </div>
                </div>
                <div class="project-content">
                    <h3 class="project-title">${project.title}</h3>
                    <p class="project-description">${project.description}</p>
                    <div class="project-technologies">
                        ${project.technologies.map(tech => `<span class="tech-tag">${tech}</span>`).join('')}
                    </div>
                </div>
            </div>
        `).join('');

        // Add click animations
        this.setupProjectAnimations();
    }

    private setupProjectAnimations(): void {
        const projectCards = document.querySelectorAll('.project-card');
        
        projectCards.forEach(card => {
            card.addEventListener('mouseenter', () => {
                card.classList.add('hover');
            });
            
            card.addEventListener('mouseleave', () => {
                card.classList.remove('hover');
            });
        });
    }

    private setupContactForm(): void {
        const contactForm = document.getElementById('contactForm') as HTMLFormElement;
        if (!contactForm) return;

        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();
            
            const formData = new FormData(contactForm);
            const name = (contactForm.querySelector('input[type="text"]') as HTMLInputElement)?.value;
            const email = (contactForm.querySelector('input[type="email"]') as HTMLInputElement)?.value;
            const message = (contactForm.querySelector('textarea') as HTMLTextAreaElement)?.value;

            // Simulate form submission
            this.showNotification('Message sent successfully! I\'ll get back to you soon.', 'success');
            contactForm.reset();
        });
    }

    private setupCTAButton(): void {
        const ctaButton = document.getElementById('ctaButton');
        if (!ctaButton) return;

        ctaButton.addEventListener('click', () => {
            const projectsSection = document.getElementById('projects');
            if (projectsSection) {
                projectsSection.scrollIntoView({ behavior: 'smooth' });
            }
        });
    }

    private setupProjectFilters(): void {
        const projectsSection = document.getElementById('projects');
        if (!projectsSection) return;

        // Create filter buttons
        const allTechnologies = [...new Set(this.projects.flatMap(p => p.technologies))];
        const filterContainer = document.createElement('div');
        filterContainer.className = 'project-filters';
        
        const allButton = document.createElement('button');
        allButton.textContent = 'All';
        allButton.className = 'filter-btn active';
        allButton.addEventListener('click', () => this.filterProjects('all', allButton));
        filterContainer.appendChild(allButton);

        allTechnologies.forEach(tech => {
            const button = document.createElement('button');
            button.textContent = tech;
            button.className = 'filter-btn';
            button.addEventListener('click', () => this.filterProjects(tech.toLowerCase(), button));
            filterContainer.appendChild(button);
        });

        const projectGrid = document.getElementById('projectGrid');
        projectGrid?.parentNode?.insertBefore(filterContainer, projectGrid);
    }

    private filterProjects(filter: string, activeButton: HTMLButtonElement): void {
        const projectCards = document.querySelectorAll('.project-card');
        const filterButtons = document.querySelectorAll('.filter-btn');

        // Update active button
        filterButtons.forEach(btn => btn.classList.remove('active'));
        activeButton.classList.add('active');

        // Filter projects
        projectCards.forEach(card => {
            const cardElement = card as HTMLElement;
            const technologies = cardElement.dataset.technologies || '';
            
            if (filter === 'all' || technologies.includes(filter)) {
                cardElement.style.display = 'block';
                cardElement.classList.add('fade-in');
            } else {
                cardElement.style.display = 'none';
                cardElement.classList.remove('fade-in');
            }
        });
    }

    private showNotification(message: string, type: 'success' | 'error' = 'success'): void {
        const notification = document.createElement('div');
        notification.className = `notification ${type}`;
        notification.textContent = message;
        
        document.body.appendChild(notification);
        
        // Trigger animation
        setTimeout(() => notification.classList.add('show'), 100);
        
        // Remove notification after 3 seconds
        setTimeout(() => {
            notification.classList.remove('show');
            setTimeout(() => document.body.removeChild(notification), 300);
        }, 3000);
    }
}