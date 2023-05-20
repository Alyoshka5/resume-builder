import { useEffect } from 'react';
import '../styles/EditBar.css';
import { EditBarProps, DateInputProp } from '../types';
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
    addJobButtonRef
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
                        <div className="job-container" key={jobIdx}>
                            <div className="job-header-container">
                                <h2 className='job-header'>Job {jobIdx + 1}</h2>
                                <div className="remove-job-btn" onClick={() => {
                                    const newExperience = [...experience];
                                    newExperience.splice(jobIdx, 1);
                                    onExperienceChange(newExperience);
                                }}>
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
                                    <input type="text" value={job.company} name="company-name" onChange={(e) => {
                                        const newExperience = [...experience];
                                        newExperience[jobIdx].company = e.target.value;
                                        onExperienceChange(newExperience);
                                    }} />
                                </div>
                                <div className='input-container'>
                                    <label htmlFor="job-location">Location</label>
                                    <input type="text" value={job.location} name="job-location" onChange={(e) => {
                                        const newExperience = [...experience];
                                        newExperience[jobIdx].location = e.target.value;
                                        onExperienceChange(newExperience);
                                    }} />
                                </div>
                                <div className='input-container'>
                                    <label htmlFor="job-start">Start Date</label>
                                    <div className='date-input-container'>
                                        <MonthDropdown experience={experience} onExperienceChange={onExperienceChange} jobIdx={jobIdx} startOrEnd="start" />
                                        <YearDropdown experience={experience} onExperienceChange={onExperienceChange} jobIdx={jobIdx} startOrEnd="start" />
                                    </div>
                                </div>
                                <div className='input-container'>
                                    <label htmlFor="job-end">End Date</label>
                                    <div className="date-input-container">
                                        <MonthDropdown experience={experience} onExperienceChange={onExperienceChange} jobIdx={jobIdx} startOrEnd="end" />
                                        <YearDropdown experience={experience} onExperienceChange={onExperienceChange} jobIdx={jobIdx} startOrEnd="end" />
                                    </div>
                                    <div className='current-job-container'>
                                        <input type="checkbox" name="job-end" checked={experience[jobIdx].end.month === 'Present'} onChange={e => {
                                            const newExperience = [...experience];
                                            newExperience[jobIdx].end.month = e.target.checked ? 'Present' : 'January';
                                            newExperience[jobIdx].end.year = e.target.checked ? '' : new Date().getFullYear().toString();
                                            onExperienceChange(newExperience);
                                        }} />
                                        <label htmlFor="job-end">I currently work here</label>
                                    </div>
                                </div>
                                <div className='input-container'>
                                    <label htmlFor="desc">Description</label>
                                        {job.description.map((desc, descIdx) => {
                                            return (
                                                <div key={descIdx} className="job-desc-container">
                                                    <textarea className='job-description' value={desc} name="job-description" autoFocus={desc === ''} onChange={(e) => {
                                                        const textarea = e.target as HTMLTextAreaElement;
                                                        textarea.style.height = "auto";
                                                        textarea.style.height = textarea.scrollHeight + "px";
                                                        const newExperience = [...experience];
                                                        newExperience[jobIdx].description[descIdx] = e.target.value;
                                                        onExperienceChange(newExperience);
                                                    }} />
                                                    <div className="delete-btn" onClick={() => {
                                                        const newExperience = [...experience];
                                                        newExperience[jobIdx].description.splice(descIdx, 1);
                                                        onExperienceChange(newExperience);
                                                    }}>
                                                        <Icon path={mdiDeleteOutline} size={1.05}></Icon>
                                                    </div>
                                                </div>
                                            );
                                        })}
                                    <div className="add-point-btn-container">
                                        <button className='add-point-btn' onClick={e => {
                                            e.preventDefault();
                                            const newExperience = [...experience];
                                            newExperience[jobIdx].description.push('');
                                            onExperienceChange(newExperience);
                                        }}>+ Add point</button>
                                    </div>
                                </div>
                            </div>
                            <hr></hr>
                        </div>
                    );
                })}
                <div className="add-job-btn-container" ref={addJobButtonRef}>
                    <button className='add-job-btn' onClick={e => {
                        e.preventDefault();
                        const newExperience = [...experience];
                        newExperience.push({
                            position: '',
                            company: '',
                            location: '',
                            start: {
                                month: 'January',
                                year: new Date().getFullYear().toString(),
                            },
                            end: {
                                month: 'Present',
                                year: '',
                            },
                            description: [''],
                        });
                        onExperienceChange(newExperience);
                    }}>+ Add job</button>
                </div>
            </form>
        ),
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

const MonthDropdown = ({ experience, onExperienceChange, jobIdx, startOrEnd }: DateInputProp) => {
    useEffect(() => {
        const job = experience[jobIdx];
        const month = startOrEnd === 'start' ? job.start.month : job.end.month;
        if (month === 'Present') return;
        const select = document.querySelector(`select.monthInput[data-jobIdx="${jobIdx}"][data-startOrEnd="${startOrEnd}"]`) as HTMLSelectElement;
        select.value = month;
        console.log(select.value);
    }, [(startOrEnd === 'start' ? experience[jobIdx].start.month : experience[jobIdx].end.month)]);

    return (
        <select className='monthInput' data-jobIdx={jobIdx} data-startOrEnd={startOrEnd} disabled={startOrEnd === 'end' && experience[jobIdx].end.month === 'Present'} onChange={e => {
            const select = e.target as HTMLSelectElement;
            const newExperience = [...experience];
            const job = newExperience[jobIdx];
            if (startOrEnd === 'start') job.start.month = select.value;
            else job.end.month = select.value;
            newExperience[jobIdx] = job;
            onExperienceChange(newExperience);
        }}>
            <option value="January">January</option>
            <option value="February">February</option>
            <option value="March">March</option>
            <option value="April">April</option>
            <option value="May">May</option>
            <option value="June">June</option>
            <option value="July">July</option>
            <option value="August">August</option>
            <option value="September">September</option>
            <option value="October">October</option>
            <option value="November">November</option>
            <option value="December">December</option>
            <option value="Present" style={{display: 'none'}}>Present</option>
        </select>
    );
}

const YearDropdown = ({ experience, onExperienceChange, jobIdx, startOrEnd }: DateInputProp) => {
    const currentYear = new Date().getFullYear();
    
    useEffect(() => {
        const job = experience[jobIdx];
        const year = startOrEnd === 'start' ? job.start.year : job.end.year;
        if (year === '') return;
        const select = document.querySelector(`select.yearInput[data-jobIdx="${jobIdx}"][data-startOrEnd="${startOrEnd}"]`) as HTMLSelectElement;
        select.value = year;
    }, [(startOrEnd === 'start' ? experience[jobIdx].start.year : experience[jobIdx].end.year)]);

    return (
        <select className='yearInput' data-jobIdx={jobIdx} data-startOrEnd={startOrEnd} disabled={startOrEnd === 'end' && experience[jobIdx].end.month === 'Present'} onChange={e => {
            const select = e.target as HTMLSelectElement;
            const newExperience = [...experience];
            const job = newExperience[jobIdx];
            if (startOrEnd === 'start') job.start.year = select.value;
            else job.end.year = select.value;
            newExperience[jobIdx] = job;
            onExperienceChange(newExperience);
        }}> 
            {Array.from({length: 100}, (_, i) => currentYear - i).map(y => 
                <option key={y} value={y}>{y}</option>
            )}
        </select>
    );
}