import { Github, Linkedin, ArrowUpRight } from 'lucide-react';

export default function Contact() {
    return (
        <section id="contact" className="section bg-navy text-white">
            <div className="container mx-auto">
                <div className="max-w-3xl mx-auto text-center">
                    {/* Section Header */}
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">
                        Let's Build Something <span className="gradient-text">Together</span>
                    </h2>
                    <p className="text-gray-300 mb-10 max-w-xl mx-auto">
                        Open to internship opportunities, collaborations, and interesting projects.
                        Feel free to reach out!
                    </p>

                    {/* Contact Cards */}
                    <div className="grid sm:grid-cols-2 gap-4">
                        <a
                            href="https://github.com/Spacewalker215"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="group flex items-center justify-between p-5 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 hover:border-teal/50 transition-all"
                        >
                            <div className="flex items-center gap-4">
                                <div className="w-12 h-12 rounded-lg bg-white/10 flex items-center justify-center group-hover:bg-teal/20 transition-colors">
                                    <Github size={24} className="text-white" />
                                </div>
                                <div className="text-left">
                                    <p className="text-sm text-gray-400">GitHub</p>
                                    <p className="font-medium text-white group-hover:text-teal transition-colors">@Spacewalker215</p>
                                </div>
                            </div>
                            <ArrowUpRight size={20} className="text-gray-500 group-hover:text-teal transition-colors" />
                        </a>

                        <a
                            href="https://www.linkedin.com/in/jaydenruddock/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="group flex items-center justify-between p-5 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 hover:border-teal/50 transition-all"
                        >
                            <div className="flex items-center gap-4">
                                <div className="w-12 h-12 rounded-lg bg-white/10 flex items-center justify-center group-hover:bg-teal/20 transition-colors">
                                    <Linkedin size={24} className="text-white" />
                                </div>
                                <div className="text-left">
                                    <p className="text-sm text-gray-400">LinkedIn</p>
                                    <p className="font-medium text-white group-hover:text-teal transition-colors">/jaydenruddock</p>
                                </div>
                            </div>
                            <ArrowUpRight size={20} className="text-gray-500 group-hover:text-teal transition-colors" />
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
}
