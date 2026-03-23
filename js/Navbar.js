export function createNavbar() {
    return `
    <nav class="fixed top-0 left-0 right-0 z-50 backdrop-blur-md bg-white/80 dark:bg-neutral-950/80 border-b border-black/10 dark:border-white/10 transition-colors duration-300">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="flex items-center justify-between h-16">
                <!-- Logo -->
                <a href="#" class="font-semibold text-lg transition-colors text-gray-900 dark:text-white hover:text-blue-600 dark:hover:text-blue-400">
                    akbar
                </a>
                
                <!-- Desktop Navigation -->
                <div class="hidden md:flex items-center gap-6">
                    <a href="#hero" class="nav-link text-sm font-medium transition-colors text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white">
                        home
                    </a>
                    <a href="#about" class="nav-link text-sm font-medium transition-colors text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white">
                        about
                    </a>
                    <a href="#projects" class="nav-link text-sm font-medium transition-colors text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white">
                        projects
                    </a>
                    <a href="#contact" class="nav-link text-sm font-medium transition-colors text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white">
                        contact
                    </a>
                </div>
                
                <!-- Right Side Actions -->
                <div class="flex items-center gap-3">
                    <!-- Theme Toggle -->
                    <button id="theme-toggle" aria-label="Toggle theme" class="relative w-11 h-6 rounded-full bg-gray-200 dark:bg-gray-700 transition-colors duration-300">
                        <span id="theme-toggle-knob" class="absolute top-0.5 left-0.5 w-5 h-5 rounded-full bg-white dark:bg-gray-400 shadow-sm transition-transform duration-300"></span>
                    </button>
                    
                    <!-- Mobile Menu Button -->
                    <button id="mobile-menu-btn" class="md:hidden flex flex-col justify-center items-center w-10 h-10" aria-label="Toggle menu">
                        <span class="block h-0.5 w-6 bg-gray-900 dark:bg-white rounded-sm transition-all duration-300"></span>
                        <span class="block h-0.5 w-6 bg-gray-900 dark:bg-white rounded-sm mt-1.5 transition-all duration-300"></span>
                        <span class="block h-0.5 w-6 bg-gray-900 dark:bg-white rounded-sm mt-1.5 transition-all duration-300"></span>
                    </button>
                </div>
            </div>
        </div>
        
        <!-- Mobile Menu -->
        <div id="mobile-menu" class="md:hidden fixed right-0 w-3/4 h-screen bg-white dark:bg-neutral-950 z-40 transition-transform duration-300 ease-in-out translate-x-full" style="top:64px">
            <nav class="flex flex-col p-6 space-y-6">
                <a href="#hero" class="text-base font-medium text-gray-900 dark:text-white hover:text-gray-600 dark:hover:text-gray-400 transition-colors">home</a>
                <a href="#about" class="text-base font-medium text-gray-900 dark:text-white hover:text-gray-600 dark:hover:text-gray-400 transition-colors">about</a>
                <a href="#projects" class="text-base font-medium text-gray-900 dark:text-white hover:text-gray-600 dark:hover:text-gray-400 transition-colors">projects</a>
                <a href="#contact" class="text-base font-medium text-gray-900 dark:text-white hover:text-gray-600 dark:hover:text-gray-400 transition-colors">contact</a>
            </nav>
        </div>
    </nav>
    `;
}

export function initNavbar() {
    const themeToggle = document.getElementById('theme-toggle');
    const toggleKnob = document.getElementById('theme-toggle-knob');
    const mobileMenuBtn = document.getElementById('mobile-menu-btn');
    const mobileMenu = document.getElementById('mobile-menu');
    
    if (themeToggle && toggleKnob) {
        const updateToggle = () => {
            const isDark = document.documentElement.classList.contains('dark');
            if (isDark) {
                toggleKnob.style.transform = 'translateX(20px)';
            } else {
                toggleKnob.style.transform = 'translateX(0)';
            }
        };
        
        updateToggle();
        
        themeToggle.addEventListener('click', () => {
            document.documentElement.classList.toggle('dark');
            localStorage.setItem('theme', document.documentElement.classList.contains('dark') ? 'dark' : 'light');
            updateToggle();
        });
    }
    
    if (mobileMenuBtn && mobileMenu) {
        mobileMenuBtn.addEventListener('click', () => {
            mobileMenu.classList.toggle('translate-x-0');
            mobileMenu.classList.toggle('translate-x-full');
        });
    }
    
    // Active nav indicator
    const navLinks = document.querySelectorAll('.nav-link');
    const sections = document.querySelectorAll('section');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const id = entry.target.getAttribute('id');
                navLinks.forEach(link => {
                    const href = link.getAttribute('href');
                    const indicator = link.querySelector('.nav-indicator');
                    if (href === `#${id}`) {
                        link.classList.add('text-gray-900', 'dark:text-white');
                    } else {
                        link.classList.remove('text-gray-900', 'dark:text-white');
                    }
                });
            }
        });
    }, { rootMargin: '-50% 0px -50% 0px' });
    
    sections.forEach(section => observer.observe(section));
}

export function initTheme() {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
        if (savedTheme === 'dark') {
            document.documentElement.classList.add('dark');
        } else {
            document.documentElement.classList.remove('dark');
        }
    } else if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
        document.documentElement.classList.add('dark');
    }
}
