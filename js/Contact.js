export function createContact() {
    return `
    <section id="contact" class="relative py-20 md:py-32 bg-gray-50 dark:bg-neutral-950 transition-colors duration-300">
        <div class="container mx-auto px-4 md:px-6">
            <div class="max-w-2xl mx-auto">
                <!-- Section Header -->
                <div class="mb-8">
                    <h2 class="text-lg md:text-xl font-mono text-gray-900 dark:text-white leading-relaxed">
                        get in touch
                    </h2>
                </div>
                
                <!-- Dotted Border -->
                <div class="border-t border-dashed border-gray-300 dark:border-gray-700 pt-4"></div>
                <div class="border-t border-dashed border-gray-300 dark:border-gray-700 mt-1"></div>
                
                <!-- Contact Options -->
                <div class="space-y-4 mt-8">
                    <div class="flex gap-2 text-sm font-mono">
                        <span class="text-gray-500 dark:text-gray-400">></span>
                        <span class="text-gray-500 dark:text-gray-400">available for:</span>
                    </div>
                    <div class="flex flex-wrap gap-2 ml-6">
                        <span class="text-xs font-mono text-gray-600 dark:text-gray-400">freelance projects</span>
                        <span class="text-xs font-mono text-gray-500">/</span>
                        <span class="text-xs font-mono text-gray-600 dark:text-gray-400">collaboration</span>
                        <span class="text-xs font-mono text-gray-500">/</span>
                        <span class="text-xs font-mono text-gray-600 dark:text-gray-400">just chatting</span>
                    </div>
                </div>
                
                <!-- Dotted Border -->
                <div class="border-t border-dashed border-gray-300 dark:border-gray-700 pt-4 mt-8"></div>
                <div class="border-t border-dashed border-gray-300 dark:border-gray-700 mt-1"></div>
                
                <!-- Contact Links -->
                <div class="flex flex-col gap-3 mt-8">
                    <a href="https://t.me/akbar_ahmedjonov" target="_blank" rel="noopener noreferrer" 
                       class="flex items-center gap-3 text-sm font-mono text-gray-900 dark:text-white hover:text-gray-600 dark:hover:text-gray-400 transition-colors">
                        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="currentColor" class="opacity-60">
                            <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z"/>
                        </svg>
                        <span>@akbar_ahmedjonov</span>
                    </a>
                    
                    <a href="https://t.me/anonaskbot?start=i0icdwi" target="_blank" rel="noopener noreferrer" 
                       class="flex items-center gap-3 text-sm font-mono text-gray-900 dark:text-white hover:text-gray-600 dark:hover:text-gray-400 transition-colors">
                        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="opacity-60">
                            <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
                            <path d="M12 8v.01"></path>
                            <path d="M8 11h.01"></path>
                            <path d="M16 11h.01"></path>
                        </svg>
                        <span>anonymous message</span>
                    </a>
                    
                    <a href="mailto:akbarahmedjonovdev@gmail.com" 
                       class="flex items-center gap-3 text-sm font-mono text-gray-900 dark:text-white hover:text-gray-600 dark:hover:text-gray-400 transition-colors">
                        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="opacity-60">
                            <rect x="2" y="4" width="20" height="16" rx="2"></rect>
                            <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
                        </svg>
                        <span>akbarahmedjonovdev@gmail.com</span>
                    </a>
                    
                    <a href="https://github.com/akbarahmedjonov" target="_blank" rel="noopener noreferrer" 
                       class="flex items-center gap-3 text-sm font-mono text-gray-900 dark:text-white hover:text-gray-600 dark:hover:text-gray-400 transition-colors">
                        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="currentColor" class="opacity-60">
                            <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                        </svg>
                        <span>github.com/akbarahmedjonov</span>
                    </a>
                </div>
                
                <!-- Dotted Border -->
                <div class="border-t border-dashed border-gray-300 dark:border-gray-700 pt-4 mt-12"></div>
                <div class="border-t border-dashed border-gray-300 dark:border-gray-700 mt-1"></div>
                
                <!-- Back to Top -->
                <div class="flex flex-col gap-3 mt-8">
                    <a href="#hero" class="text-base font-mono font-medium text-gray-900 dark:text-white hover:text-gray-600 dark:hover:text-gray-400 transition-colors inline-flex items-center gap-2">
                        <span class="opacity-50">←</span>
                        <span>back to top</span>
                    </a>
                </div>
            </div>
        </div>
    </section>
    
    <!-- Footer -->
    <footer class="bg-gray-50 dark:bg-neutral-950 border-t border-gray-200 dark:border-gray-800 py-8 transition-colors duration-300">
        <div class="container mx-auto px-4 md:px-6">
            <div class="max-w-2xl mx-auto">
                <div class="flex flex-col sm:flex-row items-center justify-between gap-4">
                    <p class="text-xs font-mono text-gray-400 dark:text-gray-500">
                        &copy; ${new Date().getFullYear()} akbar ahmedjonov
                    </p>
                    <div class="flex items-center gap-6">
                        <a href="https://github.com/akbarahmedjonov" target="_blank" rel="noopener noreferrer" 
                           class="text-xs font-mono text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors inline-flex items-center gap-1">
                            <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                            </svg>
                            github
                        </a>
                        <a href="https://t.me/akbar_ahmedjonov" target="_blank" rel="noopener noreferrer" 
                           class="text-xs font-mono text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors inline-flex items-center gap-1">
                            <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                                <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z"/>
                            </svg>
                            telegram
                        </a>
                        <a href="https://youtube.com/@akbarbtw" target="_blank" rel="noopener noreferrer" 
                           class="text-xs font-mono text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors inline-flex items-center gap-1">
                            <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                                <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"/>
                            </svg>
                            youtube
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </footer>
    `;
}

export function initContact() {
    // No initialization needed
}
