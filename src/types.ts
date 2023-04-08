interface NameProp {
    name: string;
}

interface SummaryProp {
    summary: string;
}

interface ExperienceProp {
    position: string;
    company: string;
    location: string;
    start: string;
    end: string;
    description: string[];
}

interface ExperienceProps {
    experience: ExperienceProp[];
}

interface ContactProp {
    phone: string;
    email: string;
    address: string;
}
interface ContactProps {
    contact: ContactProp;
}

interface EducationProp {
    school: string;
    location: string;
    degree: string;
    graduation: string;
}

interface EducationProps {
    education: EducationProp;
}


interface ResumeProps {
    info: {
        name: string;
        contact: ContactProp;
        education: EducationProp;
        summary: string;
        experience: ExperienceProp[];
    }
}

export { NameProp, SummaryProp, ExperienceProp, ExperienceProps, ContactProp, ContactProps, EducationProp, EducationProps, ResumeProps }