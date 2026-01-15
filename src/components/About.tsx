import { GraduationCap, Sparkles } from 'lucide-react';

export default function About() {
    return (
        <section id="about" className="section bg-white">
            <div className="container mx-auto">
                <div className="max-w-4xl mx-auto">
                    {/* Section Header */}
                    <div className="text-center mb-12">
                        <h2 className="section-title mx-auto">About Me</h2>
                    </div>

                    {/* Content Grid */}
                    <div className="grid md:grid-cols-5 gap-8 items-start">
                        {/* Main Content */}
                        <div className="md:col-span-3 space-y-6">
                            <p className="text-lg text-text leading-relaxed">
                                I'm a <strong className="text-navy">Computer Science student at the University of Texas at Austin</strong> with
                                a strong interest in <strong className="text-teal">AI, full-stack development, and product-focused engineering</strong>.
                            </p>
                            <p className="text-text-muted leading-relaxed">
                                I enjoy building software that combines thoughtful design with solid technical
                                foundations—from AI-powered tools to interactive web applications. I've worked on
                                projects involving machine learning, natural language processing, and automation.
                            </p>
                            <p className="text-text-muted leading-relaxed">
                                I value writing clean, maintainable code that scales. I'm especially motivated by
                                opportunities where I can learn quickly, contribute to real products, and collaborate
                                with strong engineering teams.
                            </p>
                        </div>

                        {/* Education Card */}
                        <div className="md:col-span-2">
                            <div className="card bg-gradient-to-br from-navy/5 to-teal/5 border-none">
                                <div className="flex items-center gap-3 mb-4">
                                    <div className="w-10 h-10 rounded-lg bg-teal/10 flex items-center justify-center">
                                        <GraduationCap size={20} className="text-teal" />
                                    </div>
                                    <h3 className="font-semibold text-navy">Education</h3>
                                </div>

                                <div className="space-y-3">
                                    <div>
                                        <p className="font-semibold text-navy">University of Texas at Austin</p>
                                        <p className="text-sm text-text-muted">B.S. Computer Science</p>
                                        <p className="text-sm text-text-light">Expected 2028</p>
                                    </div>

                                    <div className="pt-3 border-t border-border">
                                        <div className="flex items-center gap-2 mb-2">
                                            <Sparkles size={14} className="text-gold" />
                                            <span className="text-sm font-medium text-navy">Honors & Affiliations</span>
                                        </div>
                                        <ul className="text-sm text-text-muted space-y-1">
                                            <li>• Robotics Honors</li>
                                            <li>• UT for Me Scholarship</li>
                                            <li>• ABCS, IEEE, ECLAIR</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
