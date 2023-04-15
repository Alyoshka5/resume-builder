import '../styles/EditBar.css';
import { EditBarProps } from '../types';
import Icon from '@mdi/react';
import { mdiClose, mdiAccountOutline, mdiMessageOutline, mdiBriefcaseOutline, mdiEmailOutline, mdiSchoolOutline, mdiCardAccountMail } from '@mdi/js';

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