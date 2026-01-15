import { Briefcase, Users, Heart, Award } from 'lucide-react';

interface Experience {
    title: string;
    organization: string;
    description: string;
    type: 'work' | 'volunteer' | 'achievement';
    icon: React.ReactNode;
}

const experiences: Experience[] = [
    {
        title: 'Sensei',
        organization: 'Code Ninjas',
        description: 'Mentored 30+ students in programming fundamentals, including logic, loops, and data structures. Adapted instruction to different learning styles and encouraged curiosity in STEM.',
        type: 'work',
        icon: <Users size={20} className="text-teal" />,
    },
    {
        title: 'AP Computer Science TA',
        organization: 'Holy Trinity Episcopal Academy',
        description: 'Selected by faculty for strong CS knowledge and teaching ability. Assisted with recursion, advanced data structures, algorithms, and 1-on-1 tutoring.',
        type: 'work',
        icon: <Briefcase size={20} className="text-blue" />,
    },
    {
        title: 'Website Developer',
        organization: 'Jack Academy',
        description: 'Developed and deployed the website for a non-profit supporting education for underprivileged students in Ghana. Helped raise $10,000 and streamlined sponsorship workflows.',
        type: 'volunteer',
        icon: <Heart size={20} className="text-purple" />,
    },
    {
        title: 'HackTX 2025 Winner',
        organization: 'Best Celestial-Themed Project',
        description: 'Won best in category at HackTX 2025 with 1,000+ participants for SkyLore, a citizen science platform for mapping light pollution.',
        type: 'achievement',
        icon: <Award size={20} className="text-gold" />,
    },
];

const typeStyles = {
    work: { label: 'Work', bg: 'bg-teal/10', text: 'text-teal' },
    volunteer: { label: 'Volunteer', bg: 'bg-purple/10', text: 'text-purple' },
    achievement: { label: 'Achievement', bg: 'bg-gold/10', text: 'text-gold-dark' },
};

export default function Experience() {
    return (
        <section id="experience" className="section bg-background">
            <div className="container mx-auto">
                <div className="max-w-4xl mx-auto">
                    {/* Section Header */}
                    <div className="text-center mb-12">
                        <h2 className="section-title mx-auto">Experience & Achievements</h2>
                        <p className="text-text-muted mt-6 max-w-2xl mx-auto">
                            Teaching, building, and making an impact through technology and community involvement.
                        </p>
                    </div>

                    {/* Timeline */}
                    <div className="relative">
                        {/* Vertical line */}
                        <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-px bg-border md:-translate-x-px" />

                        <div className="space-y-8">
                            {experiences.map((exp, index) => {
                                const style = typeStyles[exp.type];
                                const isEven = index % 2 === 0;

                                return (
                                    <div
                                        key={exp.title}
                                        className={`relative flex items-start gap-6 ${isEven ? 'md:flex-row' : 'md:flex-row-reverse'
                                            }`}
                                    >
                                        {/* Content */}
                                        <div className={`flex-1 ml-16 md:ml-0 ${isEven ? 'md:pr-12 md:text-right' : 'md:pl-12'}`}>
                                            <div className={`card ${isEven ? 'md:ml-auto' : ''} max-w-md`}>
                                                {/* Type Badge */}
                                                <span className={`inline-flex items-center px-2 py-0.5 text-xs font-medium rounded-full ${style.bg} ${style.text} mb-3`}>
                                                    {style.label}
                                                </span>

                                                <h3 className="text-lg font-semibold text-navy mb-1">{exp.title}</h3>
                                                <p className="text-sm font-medium text-teal mb-3">{exp.organization}</p>
                                                <p className="text-sm text-text-muted leading-relaxed">{exp.description}</p>
                                            </div>
                                        </div>

                                        {/* Icon */}
                                        <div className="absolute left-0 md:left-1/2 md:-translate-x-1/2 w-12 h-12 rounded-full bg-white border-2 border-border flex items-center justify-center shadow-sm z-10">
                                            {exp.icon}
                                        </div>

                                        {/* Spacer for opposite side */}
                                        <div className="hidden md:block flex-1" />
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
