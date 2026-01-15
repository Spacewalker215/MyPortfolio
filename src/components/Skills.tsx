import { Code, Database, Cpu, Lightbulb } from 'lucide-react';

interface SkillCategory {
    title: string;
    icon: React.ReactNode;
    skills: string[];
    color: string;
}

const skillCategories: SkillCategory[] = [
    {
        title: 'Languages',
        icon: <Code size={24} />,
        skills: ['Python', 'Java', 'JavaScript', 'C++', 'SQL', 'HTML/CSS', 'PHP'],
        color: 'teal',
    },
    {
        title: 'Frameworks & Tech',
        icon: <Database size={24} />,
        skills: ['React', 'Node.js', 'OpenAI API', 'Streamlit', 'Supabase', 'Git', 'WordPress'],
        color: 'blue',
    },
    {
        title: 'AI & ML',
        icon: <Cpu size={24} />,
        skills: ['Machine Learning', 'Natural Language Processing', 'OpenAI API', 'Data Analysis'],
        color: 'purple',
    },
    {
        title: 'Concepts',
        icon: <Lightbulb size={24} />,
        skills: ['Data Structures & Algorithms', 'API Design', 'Automation', 'Mobile-Responsive Dev', 'System Design'],
        color: 'gold',
    },
];

const colorClasses: Record<string, { bg: string; border: string; text: string; iconBg: string }> = {
    teal: {
        bg: 'from-teal/5 to-teal/10',
        border: 'hover:border-teal',
        text: 'text-teal',
        iconBg: 'bg-teal/10',
    },
    blue: {
        bg: 'from-blue/5 to-blue/10',
        border: 'hover:border-blue',
        text: 'text-blue',
        iconBg: 'bg-blue/10',
    },
    purple: {
        bg: 'from-purple/5 to-purple/10',
        border: 'hover:border-purple',
        text: 'text-purple',
        iconBg: 'bg-purple/10',
    },
    gold: {
        bg: 'from-gold/5 to-gold/10',
        border: 'hover:border-gold',
        text: 'text-gold-dark',
        iconBg: 'bg-gold/10',
    },
};

export default function Skills() {
    return (
        <section id="skills" className="section bg-background">
            <div className="container mx-auto">
                <div className="max-w-5xl mx-auto">
                    {/* Section Header */}
                    <div className="text-center mb-12">
                        <h2 className="section-title mx-auto">Skills & Technologies</h2>
                        <p className="text-text-muted mt-6 max-w-2xl mx-auto">
                            A comprehensive toolkit built through coursework, personal projects, and real-world applications.
                        </p>
                    </div>

                    {/* Skills Grid */}
                    <div className="grid md:grid-cols-2 gap-6">
                        {skillCategories.map((category) => {
                            const colors = colorClasses[category.color];
                            return (
                                <div
                                    key={category.title}
                                    className={`card bg-gradient-to-br ${colors.bg} ${colors.border} group`}
                                >
                                    <div className="flex items-center gap-3 mb-4">
                                        <div className={`w-12 h-12 rounded-xl ${colors.iconBg} flex items-center justify-center ${colors.text} transition-transform group-hover:scale-110`}>
                                            {category.icon}
                                        </div>
                                        <h3 className="text-lg font-semibold text-navy">{category.title}</h3>
                                    </div>

                                    <div className="flex flex-wrap gap-2">
                                        {category.skills.map((skill) => (
                                            <span
                                                key={skill}
                                                className="tag"
                                            >
                                                {skill}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>
        </section>
    );
}
