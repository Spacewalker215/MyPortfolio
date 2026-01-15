import { Github, Linkedin, Heart } from 'lucide-react';

export default function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="bg-navy-dark text-gray-400 py-8">
            <div className="container mx-auto px-6">
                <div className="flex flex-col md:flex-row items-center justify-between gap-4">
                    {/* Left - Copyright */}
                    <div className="flex items-center gap-2 text-sm">
                        <span>© {currentYear} Jayden Ruddock.</span>
                        <span className="hidden sm:inline">Built with</span>
                        <Heart size={14} className="text-teal hidden sm:inline fill-current" />
                        <span className="hidden sm:inline">using React & Tailwind CSS</span>
                    </div>

                    {/* Right - Social Links */}
                    <div className="flex items-center gap-4">
                        <a
                            href="https://github.com/Spacewalker215"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="hover:text-teal transition-colors"
                            aria-label="GitHub"
                        >
                            <Github size={20} />
                        </a>
                        <a
                            href="https://www.linkedin.com/in/jaydenruddock/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="hover:text-teal transition-colors"
                            aria-label="LinkedIn"
                        >
                            <Linkedin size={20} />
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    );
}
