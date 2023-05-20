import '../styles/Resume.css';
import Icon from '@mdi/react';
import { mdiPhone, mdiEmailOutline, mdiMapMarker } from '@mdi/js';
import { NameProps, SummaryProps, ExperienceProps, ContactProps, EducationProps, ResumeProps } from '../types';
import React from 'react';


export default function Resume({ info, xShift, setEditBarToggle, setCurrentEdit, themeColor, onExperienceChange, scrollToAddJobButton }: ResumeProps) {
    return (
        <div style={{right: `${xShift === 0 ? 0 : xShift - 10}rem`, '--theme-color': themeColor} as React.CSSProperties} className='resume'>
            <div className='main-content'>
                <Name name={info.name} setEditBarToggle={setEditBarToggle} setCurrentEdit={setCurrentEdit} />
                <Summary summary={info.summary} setEditBarToggle={setEditBarToggle} setCurrentEdit={setCurrentEdit} />
                <Experience experience={info.experience} setEditBarToggle={setEditBarToggle} setCurrentEdit={setCurrentEdit} onExperienceChange={onExperienceChange} scrollToAddJobButton={scrollToAddJobButton} />
            </div>
            <div className='secondary-content'>
                <Contact contact={info.contact} setEditBarToggle={setEditBarToggle} setCurrentEdit={setCurrentEdit} />
                <Education education={info.education} setEditBarToggle={setEditBarToggle} setCurrentEdit={setCurrentEdit} />
            </div>
        </div>
    );
}


function Name({ name, setEditBarToggle, setCurrentEdit }: NameProps) {
    return (
        <div className='name component'>
            <h1 className='name-header' onClick={() => { 
                setEditBarToggle(true);
                setCurrentEdit('name_theme')
            }} >
                {name.first_name} {name.last_name}
            </h1>
            <div className='divider'></div>
        </div>
    );
}

function Summary({ summary, setEditBarToggle, setCurrentEdit }: SummaryProps) {
    return (
        <div className='summary component' onClick={() => { 
            setEditBarToggle(true);
            setCurrentEdit('summary');
        }}>
            <h2 className='section-header' >Summary</h2>
            <p className='content'>{summary}</p>
        </div>
    );
}

function Experience({ experience, setCurrentEdit, setEditBarToggle, onExperienceChange, scrollToAddJobButton }: ExperienceProps) {
    const monthShortener: { [key: string]: string } = {
        'January': 'Jan',
        'February': 'Feb',
        'March': 'Mar',
        'April': 'Apr',
        'May': 'May',
        'June': 'Jun',
        'July': 'Jul',
        'August': 'Aug',
        'September': 'Sep',
        'October': 'Oct',
        'November': 'Nov',
        'December': 'Dec',
        'Present': 'Present'
    }

    return (
        <div className='experience component'>
            <div className='section-header-container'>
                <h2 className='section-header'>Experience</h2>
                <button className='add-experience-btn' onClick={e => {
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
                        scrollToAddJobButton();
                        setCurrentEdit('experience');
                        setEditBarToggle(true);
                    }}>Add Experience</button>
            </div>
            {experience.map((job, jobIdx) => {
                return (
                    <div className='job-info' key={jobIdx} onClick={() => { 
                        setCurrentEdit('experience');
                        setEditBarToggle(true);
                    }}>
                        <div className='job-details'>
                            <div className='line-one-details'>
                                <span className='job-position'>{job.position}</span> <span className='job-date'>{monthShortener[job.start.month]} {job.start.year} - {monthShortener[job.end.month]} {job.end.year}</span>
                            </div>
                            <div>
                                <span className='job-company'>{job.company},</span> <span className='job-location'>{job.location}</span>
                            </div>
                        </div>
                        <ul className='job-description'>
                            {job.description.map((descriptionPoint, pointIdx) => {
                                return (
                                    <li key={pointIdx}>
                                        <div className='bullet-point'></div>
                                        <div className='job-point'>{descriptionPoint}</div>
                                    </li>
                                );
                            })}
                        </ul>
                    </div>
                );
            })}
        </div>
    );
}

function Contact({ contact, setEditBarToggle, setCurrentEdit }: ContactProps) {
    return (
        <div className='contact component' onClick={() => { 
            setEditBarToggle(true);
            setCurrentEdit('contact');
        }}>
            <h2 className='section-header'>Contact</h2>
            <div className='contact-info'>
                <div className='contact-detail'>
                    <Icon path={mdiPhone} size={1} color={'#fff'} />
                    <span>{contact.phone}</span>
                </div>
                <div className='contact-detail'>
                    <Icon path={mdiEmailOutline} size={1} color={'#fff'} />
                    <span>{contact.email}</span>
                </div>
                <div className='contact-detail'>
                    <Icon path={mdiMapMarker} size={1} color={'#fff'} />
                    <span>{contact.address}</span>
                </div>
            </div>
        </div>
    );
}

function Education({ education, setEditBarToggle, setCurrentEdit }: EducationProps) {
    const numMonthToMonth: { [key: string]: string } = {
        '01': 'Jan',
        '02': 'Feb',
        '03': 'Mar',
        '04': 'Apr',
        '05': 'May',
        '06': 'Jun',
        '07': 'Jul',
        '08': 'Aug',
        '09': 'Sep',
        '10': 'Oct',
        '11': 'Nov',
        '12': 'Dec',
    }

    const inputDateToDisplayDate = (date: string) => {
        const dateArr = date.split('-');
        return `${numMonthToMonth[dateArr[1]]} ${dateArr[0]}`;
    }

    return (
        <div className='education component' onClick={() => { 
            setEditBarToggle(true);
            setCurrentEdit('education');
        }}>
            <h2 className='section-header'>Education</h2>
            <div className='education-info'>
                <div>
                    <span className='education-degree'>{education.degree}</span>
                </div>
                <div>
                    <span className='education-graduation'>Expected in {inputDateToDisplayDate(education.graduation)}</span>
                </div>
                <div>
                    <span className='education-school'>{education.school}</span> - <span className='educaiton-location'>{education.location}</span>
                </div>
            </div>
        </div>
    )
}
