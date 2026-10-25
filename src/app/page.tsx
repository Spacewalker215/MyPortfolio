import Image from "next/image";
import { basePath } from "@/lib/site";
import { ContactLinks } from "@/components/contact-links";
import { SectionNav } from "@/components/section-nav";
import { contacts, experiments, moreProjects, selectedWork, type Project } from "@/lib/content";
import { sections } from "@/lib/sections";

function ProjectRow({ project, compact = false }: { project: Project; compact?: boolean }) {
  return (
    <article className={compact ? "project project-compact" : "project"}>
      <div className="project-heading">
        <h3>{project.name}</h3>
        {project.status && <span className="project-status">{project.status}</span>}
      </div>
      {project.role && <p className="project-role">{project.role}</p>}
      <div className="project-copy">
        {project.paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
      </div>
      {(project.href || project.demoHref) && (
        <div className="project-links">
          {project.href && <a className="text-link project-link" href={project.href}>{project.linkLabel}<Arrow /></a>}
          {project.demoHref && <a className="text-link project-link" href={project.demoHref}>Visit the site<Arrow /></a>}
        </div>
      )}
    </article>
  );
}

function Arrow() {
  return <svg aria-hidden="true" viewBox="0 0 16 16" width="14" height="14" fill="none"><path d="M4 12 12 4M4 4h8v8" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" /></svg>;
}

export default function Home() {
  return (
    <>
      <a className="skip-link" href="#content">Skip to content</a>
      <ContactLinks variant="left" />
      <ContactLinks variant="right" />
      <div className="site-layout">
        <header className="introduction">
          <div>
            <h1>Jayden Ruddock</h1>
            <p className="tagline">Computer science student at UT Austin studying robotics and building apps, developer tools, and AI projects.</p>
            <div className="mobile-contacts"><ContactLinks /></div>
            <SectionNav />
          </div>
        </header>

        <main id="content" tabIndex={-1}>
          <section id={sections.about.id} aria-labelledby="about-title">
            <h2 id="about-title">{sections.about.title}</h2>
            <div className="about-layout">
              <Image className="portrait" src={`${basePath}/images/jayden.jpg`} alt="Jayden Ruddock" width={1400} height={1867} priority sizes="(min-width: 1280px) 280px, 256px" />
              <div className="about-copy">
                <p>Hello, I'm Jayden Ruddock, a computer science student at UT Austin in the Texas Robotics Honors program. I build web apps, developer tools, and AI projects, often starting with something I want to use myself.</p>
                <p>Right now, I split my time between autonomous vehicle research, Internship Grabber, and a food-tracking app built around UT's dining halls.</p>
                <a className="text-link" href={`#${sections.work.id}`}>See what I'm working on<Arrow /></a>
              </div>
            </div>
            <details className="longer-bio">
              <summary><span>Longer version</span><svg aria-hidden="true" width="14" height="14" viewBox="0 0 16 16" fill="none"><path d="m4 6 4 4 4-4" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" /></svg></summary>
              <div className="biography">
                <p>I got into coding in fifth grade through an after-school Scratch club. Moving blocks around and watching something happen on screen made me want to see what else I could build. I picked up HTML, CSS, and JavaScript, then Python.</p>
                <p>In high school, I learned Lua through YouTube tutorials and built a Roblox gladiator game for my Latin class. It placed third in a regional competition. Around the same time, watching BattleBots got me curious about how code could move a physical machine. I joined our robotics club, learned Java to program the robots, and started teaching other students how to code them too.</p>
                <p>A teacher later suggested I build an AI tutor for Scratch. I had to learn how model APIs worked and how to give the tutor context from a student's code. Getting the extension to talk to Scratch took a lot of trial and error, and it made me want to keep working on applied AI.</p>
                <p>I'm now part of the inaugural Texas Robotics Honors cohort at UT Austin. I spend my time building software and working on autonomous vehicle research in the Freshman Research Initiative. I'm interested in software engineering and applied AI roles where I can keep doing both.</p>
              </div>
            </details>
          </section>

          <section id={sections.work.id} aria-labelledby="work-title">
            <h2 id="work-title">{sections.work.title}</h2>
            <div className="project-list">{selectedWork.map((project) => <ProjectRow key={project.name} project={project} />)}</div>
            <div className="experience-note">
              <h3>Also at Jack Academy</h3>
              <p>I've worked on Jack Academy's website since 2021, including donor management and checkout workflows that supported more than $10,000 in student funding.</p>
              <a className="text-link project-link" href="https://jackacademy.com/">Visit Jack Academy<Arrow /></a>
            </div>
          </section>

          <section id={sections.moreProjects.id} aria-labelledby="archive-title">
            <h2 id="archive-title">{sections.moreProjects.title}</h2>
            <div className="project-list">{moreProjects.map((project) => <ProjectRow key={project.name} project={project} compact />)}</div>
            <h3 className="subsection-title">Experiments</h3>
            <div className="project-list">{experiments.map((project) => <ProjectRow key={project.name} project={project} compact />)}</div>
          </section>

          <section id={sections.next.id} className="whats-next" aria-labelledby="next-title">
            <h2 id="next-title">{sections.next.title}</h2>
            <p>I'm continuing my research, building Internship Grabber, and working toward releasing GymGoersHealth on campus. I'm looking for software engineering and applied AI internships where I can contribute and keep learning.</p>
            <p>If you'd like to talk about my work or an opportunity, I'd love to hear from you.</p>
            <a className="text-link email-link" href={contacts.Email}>{contacts.Email.slice("mailto:".length)}<Arrow /></a>
            <footer><a className="text-link" href="#top">Back to top<svg aria-hidden="true" viewBox="0 0 16 16" width="14" height="14" fill="none"><path d="M8 12V4m-4 4 4-4 4 4" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" /></svg></a><span>Jayden Ruddock</span></footer>
          </section>
        </main>
      </div>
    </>
  );
}
