import '../styles/EditBar.css';
import { EditBarProps, ExperienceProp } from '../types';
import Icon from '@mdi/react';
import { mdiClose, mdiAccountOutline, mdiMessageOutline, mdiBriefcaseOutline, mdiEmailOutline, mdiSchoolOutline, mdiDeleteOutline } from '@mdi/js';

const hexToRgb = (hex: string) => {
    const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
    return result ? `${parseInt(result[1], 16)}, ${parseInt(result[2], 16)}, ${parseInt(result[3], 16)}` : '';
}

const rgbToHex = (rgb: string) => {
    const result = /^rgb\((\d+),\s*(\d+),\s*(\d+)\)$/i.exec(rgb);
    return result ? `#${parseInt(result[1]).toString(16)}${parseInt(result[2]).toString(16)}${parseInt(result[3]).toString(16)}` : '';
}



export default function EditBar({
    name, onNameChange,
    themeColor, setThemeColor,
    experience, onExperienceChange,
    summary, onSummaryChange, 
    xShift, setEditBarToggle,
    currentEdit, setCurrentEdit,
    }: EditBarProps) {
    const editForms = {
        name_theme: (
            <form className="edit-form name-form">
                <div className='input-container'>
                    <label htmlFor="first-name">First name</label>
                    <input type="text" value={name.first_name} name="first-name" onChange={(e) => onNameChange({...name, first_name: e.target.value})} />
                </div>
                <div className='input-container'>
                    <label htmlFor="first-name">Last name</label>
                    <input type="text" value={name.last_name} name="last-name" onChange={(e) => onNameChange({...name, last_name: e.target.value})} />
                </div>
                <div className='input-container color-input-container'>
                    <label htmlFor="theme-color">Theme Color</label>
                    <input type="color" value={rgbToHex(`rgb(${themeColor})`)} name="theme-color" onChange={(e) => setThemeColor(hexToRgb(e.target.value))} />
                </div>
            </form>
        ), 
        summary: (
            <form className="edit-form summary-form">
                <div className='input-container'>
                    <label htmlFor="summary">Summary</label>
                    <textarea value={summary} name="summary" cols={30} rows={10} onChange={(e) => onSummaryChange(e.target.value)} />
                </div>
            </form>
        ),
        experience: (
            // add new experience and remove experience
            <form className="edit-form experience-form">
                {experience.map((job, jobIdx) => {
                    return (
                        <div className="job-container">
                            <div className="job-header-container">
                                <h2 className='job-header'>Job {jobIdx + 1}</h2>
                                <div className="remove-job-btn">
                                    <Icon path={mdiDeleteOutline} size={1.05}></Icon>
                                </div>
                            </div>
                            <div key={jobIdx} className="job">
                                <div className='input-container'>
                                    <label htmlFor="job-title">Job Title</label>
                                    <input type="text" value={job.position} name="job-title" onChange={(e) => {
                                        const newExperience = [...experience];
                                        newExperience[jobIdx].position = e.target.value;
                                        onExperienceChange(newExperience);
                                    }} />
                                </div>
                                <div className='input-container'>
                                    <label htmlFor="company-name">Employer</label>
                                    <input type="text" value={job.company} name="company-name" onChange={(e) => onExperienceChange(experience)} />
                                </div>
                                <div className='input-container'>
                                    <label htmlFor="job-location">Location</label>
                                    <input type="text" value={job.location} name="job-location" onChange={(e) => onExperienceChange(experience)} />
                                </div>
                                <div className='input-container'>
                                    <label htmlFor="job-start">Start Date</label>
                                    <div className='date-input-container'>
                                        <MonthDropdown />
                                        <YearDropdown />
                                    </div>
                                </div>
                                <div className='input-container'>
                                    <label htmlFor="job-end">End Date</label>
                                    <div className="date-input-container">
                                        <MonthDropdown />
                                        <YearDropdown />
                                    </div>
                                    <div className='current-job-container'>
                                        <input type="checkbox" name="job-end" id="job-end" />
                                        <label htmlFor="job-end">I currently work here</label>
                                    </div>
                                </div>
                                <div className='input-container'>
                                    <label htmlFor="desc">Description</label>
                                        {job.description.map((desc, descIdx) => {
                                            return (
                                                <div key={descIdx} className="job-desc-container">
                                                    <textarea className='job-description' value={desc} name="job-description" onChange={(e) => {
                                                        const textarea = e.target as HTMLTextAreaElement;
                                                        textarea.style.height = "auto";
                                                        textarea.style.height = textarea.scrollHeight + "px";
                                                        const newExperience = [...experience];
                                                        newExperience[jobIdx].description[descIdx] = e.target.value;
                                                        onExperienceChange(newExperience);
                                                    }} />
                                                    <div className="delete-btn" onClick={() => {}}>
                                                        <Icon path={mdiDeleteOutline} size={1.05}></Icon>
                                                    </div>
                                                </div>
                                            )
                                        })}
                                    <div className="add-point-btn-container">
                                        <button className='add-point-btn'>+ Add point</button>
                                    </div>
                                </div>
                            </div>
                            <hr></hr>
                        </div>
                    );
                })}
                <div className="add-job-btn-container">
                    <button className='add-job-btn'>+ Add job</button>
                </div>
            </form>
        ),
    }

    function handleStuff(this: HTMLInputElement) {
        this.style.height = "";
        this.style.height = this.scrollHeight + "px";
    }
    
    return (
        <div style={{right: `${xShift - 31}rem`}} className="edit-bar">
            <div className="tags">
                <div className={`tag ${currentEdit === 'name_theme' ? 'active' : ''}`} onClick={() => { 
                    setEditBarToggle(true);
                    setCurrentEdit('name_theme');
                }}>
                    <Icon path={mdiAccountOutline} size={1.2} />
                    <span>Name & Theme</span>
                </div>

                <div className={`tag ${currentEdit === 'summary' ? 'active' : ''}`} onClick={() => { 
                    setEditBarToggle(true);
                    setCurrentEdit('summary');
                }}>
                    <Icon path={mdiMessageOutline} size={1.2} />
                    <span>Summary</span>
                </div>

                <div className={`tag ${currentEdit === 'experience' ? 'active' : ''}`} onClick={() => { 
                    setEditBarToggle(true);
                    setCurrentEdit('experience');
                }}>
                    <Icon path={mdiBriefcaseOutline} size={1.2} />
                    <span>Experience</span>
                </div>

                <div className={`tag ${currentEdit === 'contact' ? 'active' : ''}`} onClick={() => { 
                    setEditBarToggle(true);
                    setCurrentEdit('contact');
                }}>
                    <Icon path={mdiEmailOutline} size={1.2} />
                    <span>Contact</span>
                </div>

                <div className={`tag ${currentEdit === 'education' ? 'active' : ''}`} onClick={() => { 
                    setEditBarToggle(true);
                    setCurrentEdit('education');
                }}>
                    <Icon path={mdiSchoolOutline} size={1.2} />
                    <span>Education</span>
                </div>
            </div>
            <div className='edit-section'>
                <div className='close-btn' onClick={() => { setEditBarToggle(false) }}>
                    <Icon path={mdiClose} size={1.2} />
                </div>

                {editForms[currentEdit as keyof typeof editForms]}

            </div>
        </div>
    );
}

const MonthDropdown = () => {
    return (
        <select>
            <option value="Jan">January</option>
            <option value="Feb">February</option>
            <option value="Mar">March</option>
            <option value="Apr">April</option>
            <option value="May">May</option>
            <option value="Jun">June</option>
            <option value="Jul">July</option>
            <option value="Aug">August</option>
            <option value="Sep">September</option>
            <option value="Oct">October</option>
            <option value="Nov">November</option>
            <option value="Dec">December</option>
        </select>
    )
}

const YearDropdown = () => {
    const currentYear = new Date().getFullYear();
    return (
        <select>
            {Array.from({length: 100}, (_, i) => currentYear - i).map(year => 
                <option value={year}>{year}</option>
            )}
        </select>
    )
}