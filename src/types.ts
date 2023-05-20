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

interface DateProp {
    month: string;
    year: string;
}

interface DateInputProp {
    experience: ExperienceProp[],
    onExperienceChange(experience: ExperienceProp[]): void,
    jobIdx: number,
    startOrEnd: string;
}

interface ExperienceProp {
    position: string;
    company: string;
    location: string;
    start: DateProp;
    end: DateProp;
    description: string[];
}

interface ExperienceProps {
    experience: ExperienceProp[];
    setEditBarToggle(editBarOpen: boolean): void;
    setCurrentEdit(currentEdit: string): void;
    onExperienceChange(experience: ExperienceProp[]): void;
    scrollToAddJobButton(): void;
}

interface ContactProp {
    phone: string;
    email: string;
    address: string;
}
interface ContactProps {
    contact: ContactProp;
    setEditBarToggle(editBarOpen: boolean): void;
    setCurrentEdit(currentEdit: string): void;
}

interface EducationProp {
    school: string;
    location: string;
    degree: string;
    graduation: string;
}

interface EducationProps {
    education: EducationProp;
    setEditBarToggle(editBarOpen: boolean): void;
    setCurrentEdit(currentEdit: string): void;
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
    setCurrentEdit(currentEdit: string): void;
    themeColor: string;
    onExperienceChange(experience: ExperienceProp[]): void;
    scrollToAddJobButton(): void;
}

// EditBar Types
interface EditBarProps {
    name: NameProp;
    onNameChange(name: NameProp): void;
    themeColor: string;
    setThemeColor(themeColor: string): void;
    summary: string;
    onSummaryChange(summary: string): void;
    experience: ExperienceProp[];
    onExperienceChange(experience: ExperienceProp[]): void;
    contact: ContactProp;
    onContactChange(contact: ContactProp): void;
    education: EducationProp;
    onEducationChange(education: EducationProp): void;
    xShift: number;
    setEditBarToggle(editBarToggle: boolean): void;
    currentEdit: string;
    setCurrentEdit(currentEdit: string): void;
    addJobButtonRef: React.RefObject<HTMLDivElement>;
}

// Export Types
export { NameProp, NameProps, SummaryProp, SummaryProps, DateInputProp, ExperienceProp, ExperienceProps, ContactProp, ContactProps, EducationProp, EducationProps, ResumeProps, EditBarProps }