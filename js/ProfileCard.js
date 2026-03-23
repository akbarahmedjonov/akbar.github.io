export function createProfileCard() {
    return `
    <section id="about" class="relative py-20 md:py-32 bg-gray-50 dark:bg-neutral-950 transition-colors duration-300">
        <div class="container mx-auto px-4 md:px-6">
            <div class="max-w-2xl mx-auto">
                <!-- Section Header -->
                <div class="mb-8 flex items-center gap-4">
                    <h2 class="text-lg md:text-xl font-mono text-gray-900 dark:text-white leading-relaxed">
                        about me
                    </h2>
                    <img src="./images/my-face.png" alt="profile" class="w-12 h-12 rounded-md object-cover border border-gray-300 dark:border-gray-700">
                </div>
                
                <!-- Dotted Border -->
                <div class="border-t border-dashed border-gray-300 dark:border-gray-700 pt-4"></div>
                <div class="border-t border-dashed border-gray-300 dark:border-gray-700 mt-1"></div>
                
                <!-- Bio -->
                <div class="space-y-4 mt-8">
                    <div class="flex gap-2 text-sm font-mono">
                        <span class="text-gray-500 dark:text-gray-400">></span>
                        <span class="text-gray-900 dark:text-white">a small uzbek developer who loves learning and building useful tools</span>
                    </div>
                    <div class="flex gap-2 text-sm font-mono">
                        <span class="text-gray-500 dark:text-gray-400">></span>
                        <span class="text-gray-900 dark:text-white">good boy, and a helpful person</span>
                    </div>
                    <div class="flex gap-2 text-sm font-mono">
                        <span class="text-gray-500 dark:text-gray-400">></span>
                        <span class="text-gray-900 dark:text-white">linux enthusiast, command-line addict</span>
                    </div>
                </div>
                
                <!-- Dotted Border -->
                <div class="border-t border-dashed border-gray-300 dark:border-gray-700 pt-4 mt-8"></div>
                <div class="border-t border-dashed border-gray-300 dark:border-gray-700 mt-1"></div>
                
                <!-- Current Focus -->
                <div class="mt-8 space-y-3">
                    <p class="text-xs font-mono text-gray-400 dark:text-gray-500 mb-3">currently learning:</p>
                    <div class="flex flex-wrap gap-2">
                        <span class="text-xs font-mono text-gray-500 dark:text-gray-400 cursor-default">#tailwind</span>
                        <span class="text-xs font-mono text-gray-500 dark:text-gray-400 cursor-default">#react</span>
                        <span class="text-xs font-mono text-gray-500 dark:text-gray-400 cursor-default">#python backend</span>
                    </div>
                </div>
                
                <!-- Dotted Border -->
                <div class="border-t border-dashed border-gray-300 dark:border-gray-700 pt-4 mt-8"></div>
                <div class="border-t border-dashed border-gray-300 dark:border-gray-700 mt-1"></div>
                
                <!-- Links -->
                <div class="flex flex-col gap-3 mt-8">
                    <a href="#projects" class="text-base font-mono font-medium text-gray-900 dark:text-white hover:text-gray-600 dark:hover:text-gray-400 transition-colors inline-flex items-center gap-2">
                        <span class="opacity-50">→</span>
                        <span>view projects</span>
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

export function initProfileCard() {
    // No initialization needed for static content
}
