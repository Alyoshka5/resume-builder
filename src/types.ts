// Resume Types

interface NameProp {
    first_name: string;
    last_name: string;
}
interface NameProps {
    name: NameProp;
    setEditBarToggle(editBarOpen: boolean): void;
    setCurrentEdit(currentEdit: string): void;
}

interface SummaryProp {
    summary: string;
}
interface SummaryProps {
    summary: string;
    setEditBarToggle(editBarOpen: boolean): void;
    setCurrentEdit(currentEdit: string): void;
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
    setCurrentEdit(currentEdit: string): void
    themeColor: string;
}

// EditBar Types
interface EditBarProps {
    name: NameProp;
    onNameChange(name: NameProp): void;
    themeColor: string;
    setThemeColor(themeColor: string): void;
    summary: string;
    onSummaryChange(summary: string): void;
    xShift: number;
    setEditBarToggle(editBarToggle: boolean): void;
    currentEdit: string;
    setCurrentEdit(currentEdit: string): void;
}

// Export Types
export { NameProp, NameProps, SummaryProp, SummaryProps, ExperienceProp, ExperienceProps, ContactProp, ContactProps, EducationProp, EducationProps, ResumeProps, EditBarProps }