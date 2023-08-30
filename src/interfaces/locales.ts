// LandingInfo 


export interface LandingInfo {
    navbar:     Navbar[];
    languages:  Languages;
    hero:       Hero;
    experience: Experience;
    skills:     Skills;
    projects:   Projects;
    about:      About;
}

export interface About {
    title:    string;
    contacts: Contacts;
    photo:    string;
    content:  Content;
    resume:   string;
}

export interface Contacts {
    email: Contact;
    place: Contact;
    phone: Contact;
}

export interface Contact {
    name:  string;
    value: string;
    url:   string;
}

export interface Content {
    name:        string;
    job:         string;
    description: string;
}

export interface Experience {
    title:    string;
    subtitle: string;
    jobs:     Job[];
}

export interface Job {
    company:      string;
    period:       string;
    position:     string;
    description?: string;
}

export interface Hero {
    greeting:    string;
    name:        string;
    profession:  Array<number | string>;
    avatar:      string;
    socialMedia: SocialMedia[];
}

export interface SocialMedia {
    name: string;
    url:  string;
    icon: string;
}

export interface Languages {
    es: Language;
    en: Language;
}

export interface Language {
    name:  string;
    image: string;
    code:  string;
}

export interface Navbar {
    name: string;
    url:  string;
}

export interface Projects {
    title:    string;
    subtitle: string;
    projects: Project[];
}

export interface Project {
    name:        string;
    description: string;
    image:       string;
    technology:  string[];
    repository:  string;
    live:        string;
}

export interface Skills {
    title:    string;
    subtitle: string;
    soonText: string;
    skills:   Skill[];
}

export interface Skill {
    name:         string;
    icon:         string;
    soon:         boolean;
    listContent?: string[];
}
