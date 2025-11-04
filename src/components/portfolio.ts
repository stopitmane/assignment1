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
            title: "E-Commerce Platform",
            description: "A full-stack e-commerce solution built with TypeScript, React, and Node.js",
            technologies: ["TypeScript", "React", "Node.js", "MongoDB"],
            image: "https://via.placeholder.com/300x200/4f46e5/ffffff?text=E-Commerce",
            demoUrl: "#",
            githubUrl: "#"
        },
        {
            id: 2,
            title: "Task Management App",
            description: "A collaborative task management application with real-time updates",
            technologies: ["TypeScript", "Vue.js", "Socket.io", "PostgreSQL"],
            image: "https://via.placeholder.com/300x200/059669/ffffff?text=Task+Manager",
            demoUrl: "#",
            githubUrl: "#"
        },
        {
            id: 3,
            title: "Weather Dashboard",
            description: "Interactive weather dashboard with data visualization and forecasting",
            technologies: ["TypeScript", "D3.js", "Express", "Weather API"],
            image: "https://via.placeholder.com/300x200/dc2626/ffffff?text=Weather+App",
            demoUrl: "#",
            githubUrl: "#"
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