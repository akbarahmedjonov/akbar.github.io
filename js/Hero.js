export function createHero() {
    return `
    <section id="hero" class="relative min-h-screen w-full flex items-center justify-center overflow-hidden bg-gray-50 dark:bg-neutral-950">
        <!-- Animated Background Paths -->
        <div class="absolute inset-0 pointer-events-none">
            <svg class="w-full h-full text-gray-300/20 dark:text-gray-700/20" viewBox="0 0 696 316" fill="none" preserveAspectRatio="none">
                ${generatePaths(1)}
            </svg>
            <svg class="w-full h-full text-gray-300/10 dark:text-gray-700/10 absolute top-0 left-0" viewBox="0 0 696 316" fill="none" preserveAspectRatio="none">
                ${generatePaths(-1)}
            </svg>
        </div>
        
        <!-- Hero Content -->
        <div class="relative z-10 container mx-auto px-4 md:px-6">
            <div class="max-w-2xl mx-auto">
                <!-- Tagline -->
                <div class="mb-8 transform transition-all duration-700">
                    <h2 class="text-lg md:text-xl font-mono text-gray-900 dark:text-white leading-relaxed min-h-[1.5em]">
                        a self-taught developer who loves automation
                    </h2>
                </div>
                
                <!-- Description -->
                <div class="mb-8">
                    <p class="text-sm font-mono text-gray-500 dark:text-gray-400 leading-relaxed mb-4">
                        Curious by nature, driven by purpose — I build things because excellence has no single path.
                    </p>
                </div>
                
                <!-- Dotted Border -->
                <div class="border-t border-dashed border-gray-300 dark:border-gray-700 pt-4"></div>
                <div class="border-t border-dashed border-gray-300 dark:border-gray-700 mt-1"></div>
                
                <!-- Links -->
                <div class="space-y-3 mt-8">
                    <div class="flex gap-2 text-sm font-mono items-center">
                        <i class="nf nf-fa-github"></i>
                        <a target="_blank" rel="noopener noreferrer" class="underline decoration-gray-400 dark:decoration-gray-600 hover:decoration-gray-600 dark:hover:decoration-gray-400 transition-all text-gray-900 dark:text-white" href="https://github.com/akbarahmedjonov">
                            @akbarahmedjonov
                        </a>
                    </div>
                </div>
                
                <!-- Dotted Border -->
                <div class="border-t border-dashed border-gray-300 dark:border-gray-700 pt-4 mt-8"></div>
                <div class="border-t border-dashed border-gray-300 dark:border-gray-700 mt-1"></div>
                
                <!-- Navigation Links -->
                <div class="flex flex-col gap-3 mt-8">
                    <a href="#projects" class="text-base font-mono font-medium text-gray-900 dark:text-white hover:text-gray-600 dark:hover:text-gray-400 transition-colors inline-flex items-center gap-2">
                        <span class="opacity-50">→</span>
                        <span>view projects</span>
                    </a>
                    <a href="#about" class="text-base font-mono font-medium text-gray-900 dark:text-white hover:text-gray-600 dark:hover:text-gray-400 transition-colors inline-flex items-center gap-2">
                        <span class="opacity-50">→</span>
                        <span>about me</span>
                    </a>
                    <a href="#contact" class="text-base font-mono font-medium text-gray-900 dark:text-white hover:text-gray-600 dark:hover:text-gray-400 transition-colors inline-flex items-center gap-2">
                        <span class="opacity-50">→</span>
                        <span>get in touch</span>
                    </a>
                </div>
                
                <!-- Tech Stack -->
                <div class="mt-10 transform transition-all duration-700">
                    <p class="text-xs font-mono text-gray-400 dark:text-gray-500 mb-3">tech stack:</p>
                    <div class="flex flex-wrap gap-2">
                        <span class="text-xs font-mono text-gray-500 dark:text-gray-400 cursor-default">#python</span>
                        <span class="text-xs font-mono text-gray-500 dark:text-gray-400 cursor-default">#javascript</span>
                        <span class="text-xs font-mono text-gray-500 dark:text-gray-400 cursor-default">#rust</span>
                        <span class="text-xs font-mono text-gray-500 dark:text-gray-400 cursor-default">#html</span>
                        <span class="text-xs font-mono text-gray-500 dark:text-gray-400 cursor-default">#css</span>
                        <span class="text-xs font-mono text-gray-500 dark:text-gray-400 cursor-default">#linux</span>
                    </div>
                </div>
            </div>
        </div>
    </section>
    `;
}

function generatePaths(position) {
    const paths = [];
    for (let i = 0; i < 12; i++) {
        const d = `M-${380 - i * 5 * position} -${189 + i * 6}C-${
            380 - i * 5 * position
        } -${189 + i * 6} -${312 - i * 5 * position} ${216 - i * 6} ${
            152 - i * 5 * position
        } ${343 - i * 6}C${616 - i * 5 * position} ${470 - i * 6} ${
            684 - i * 5 * position
        } ${875 - i * 6} ${684 - i * 5 * position} ${875 - i * 6}`;
        
        paths.push(`<path d="${d}" stroke="currentColor" stroke-width="${0.5 + i * 0.03}" stroke-opacity="${0.1 + i * 0.03}" fill="none" class="animated-path" style="animation-delay: ${i * 0.5}s"/>`);
    }
    return paths.join('');
}

export function initHero() {
    const style = document.createElement('style');
    style.textContent = `
        @keyframes pathAnimation {
            0% { stroke-dashoffset: 1000; opacity: 0.1; }
            50% { opacity: 0.3; }
            100% { stroke-dashoffset: 0; opacity: 0.1; }
        }
        
        .animated-path {
            stroke-dasharray: 1000;
            animation: pathAnimation 25s linear infinite;
        }
        
        .animated-path:nth-child(odd) {
            animation-direction: reverse;
            animation-duration: 30s;
        }
    `;
    document.head.appendChild(style);
}
