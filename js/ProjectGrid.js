export function createProjectGrid() {
    return `
    <section id="projects" class="relative py-20 md:py-32 bg-gray-50 dark:bg-neutral-950 transition-colors duration-300">
        <div class="container mx-auto px-4 md:px-6">
            <div class="max-w-2xl mx-auto">
                <!-- Section Header -->
                <div class="mb-8">
                    <h2 class="text-lg md:text-xl font-mono text-gray-900 dark:text-white leading-relaxed">
                        projects
                    </h2>
                </div>
                
                <!-- Dotted Border -->
                <div class="border-t border-dashed border-gray-300 dark:border-gray-700 pt-4"></div>
                <div class="border-t border-dashed border-gray-300 dark:border-gray-700 mt-1"></div>
                
                <!-- Projects List -->
                <div class="space-y-6 mt-8">
                    ${generateProjectItem({
                        name: 'dotfiles',
                        description: 'my day-to-day linux configuration for neovim, tmux, i3, and other tools',
                        tech: ['neovim', 'tmux', 'bash', 'linux'],
                        url: 'https://github.com/akbarahmedjonov/dotfiles'
                    })}
                    
                    ${generateProjectItem({
                        name: 'zen-station',
                        description: 'chrome/firefox extension for a cleaner, better new tab page',
                        tech: ['javascript', 'css', 'html'],
                        url: 'https://github.com/akbarahmedjonov/zen-station'
                    })}
                    
                    ${generateProjectItem({
                        name: 'downloader-cli',
                        description: 'rust-based cli tool for downloading files with resume support',
                        tech: ['rust', 'cli'],
                        url: 'https://github.com/akbarahmedjonov/downloader-cli'
                    })}
                    
                    ${generateProjectItem({
                        name: 'oxfetch',
                        description: 'rust-based fetch tool, wip',
                        tech: ['rust'],
                        url: null
                    })}
                </div>
                
                <!-- Dotted Border -->
                <div class="border-t border-dashed border-gray-300 dark:border-gray-700 pt-4 mt-12"></div>
                <div class="border-t border-dashed border-gray-300 dark:border-gray-700 mt-1"></div>
                
                <!-- More Link -->
                <div class="flex flex-col gap-3 mt-8">
                    <a href="https://github.com/akbarahmedjonov" target="_blank" rel="noopener noreferrer" 
                       class="text-base font-mono font-medium text-gray-900 dark:text-white hover:text-gray-600 dark:hover:text-gray-400 transition-colors inline-flex items-center gap-2">
                        <span class="opacity-50">→</span>
                        <span>view more on github</span>
                        <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="inline-block">
                            <path d="M7 13l5.5-5.5M7 13l5.5 5.5M7 13l-3 3 9 3 9-6-6-6z"/>
                        </svg>
                    </a>
                    <a href="#contact" class="text-base font-mono font-medium text-gray-900 dark:text-white hover:text-gray-600 dark:hover:text-gray-400 transition-colors inline-flex items-center gap-2">
                        <span class="opacity-50">→</span>
                        <span>get in touch</span>
                    </a>
                </div>
            </div>
        </div>
    </section>
    `;
}

function generateProjectItem(project) {
    return `
    <div class="group">
        <div class="flex items-start justify-between gap-4">
            <div class="flex-1">
                <div class="flex items-center gap-2 mb-1">
                    ${project.url ? `
                        <a href="${project.url}" target="_blank" rel="noopener noreferrer" 
                           class="text-sm font-mono font-medium text-gray-900 dark:text-white hover:text-gray-600 dark:hover:text-gray-400 transition-colors inline-flex items-center gap-1">
                            ${project.name}
                            <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="opacity-40 group-hover:opacity-70 transition-opacity">
                                <path d="M7 13l5.5-5.5M7 13l5.5 5.5M7 13l-3 3 9 3 9-6-6-6z"/>
                            </svg>
                        </a>
                    ` : `
                        <span class="text-sm font-mono font-medium text-gray-900 dark:text-white">
                            ${project.name}
                        </span>
                    `}
                    ${project.url === null ? `
                        <span class="text-xs font-mono text-gray-500 dark:text-gray-400">(coming soon)</span>
                    ` : ''}
                </div>
                <p class="text-sm font-mono text-gray-500 dark:text-gray-400 mb-2">
                    ${project.description}
                </p>
                <div class="flex flex-wrap gap-2">
                    ${project.tech.map(t => `
                        <span class="text-xs font-mono text-gray-500 dark:text-gray-400">#${t}</span>
                    `).join('')}
                </div>
            </div>
        </div>
    </div>
    `;
}

export function initProjectGrid() {
    // No initialization needed
}
