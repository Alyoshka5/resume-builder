// Resume Types
type openEditBar = (editBarOpen: boolean) => void;

interface NameProp {
    first_name: string;
    last_name: string;
}
interface NameProps {
    name: NameProp;
    editBarOpen: boolean;
    openEditBar: openEditBar;
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
    editBarOpen: boolean;
    openEditBar(editBarOpen: boolean): void;
}

// EditBar Types
interface EditBarProps {
    xShift: number;
    name: NameProp;
    onNameChange(name: NameProp): void;
    switchXShift(xShift: number): void;
}

// Export Types
export { NameProp, NameProps, SummaryProp, ExperienceProp, ExperienceProps, ContactProp, ContactProps, EducationProp, EducationProps, ResumeProps, EditBarProps }