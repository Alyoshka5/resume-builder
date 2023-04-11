// Resume Types
type setEditBarToggle = (editBarOpen: boolean) => void;

interface NameProp {
    first_name: string;
    last_name: string;
}
interface NameProps {
    name: NameProp;
    setEditBarToggle: setEditBarToggle;
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
        name: NameProp;
        contact: ContactProp;
        education: EducationProp;
        summary: string;
        experience: ExperienceProp[];
    };
    xShift: number;
    editBarToggle: boolean;
    setEditBarToggle(editBarToggle: boolean): void;
}

// EditBar Types
interface EditBarProps {
    name: NameProp;
    onNameChange(name: NameProp): void;
    xShift: number;
    setEditBarToggle(editBarToggle: boolean): void;
}

// Export Types
export { NameProp, NameProps, SummaryProp, ExperienceProp, ExperienceProps, ContactProp, ContactProps, EducationProp, EducationProps, ResumeProps, EditBarProps }