import '../styles/EditBar.css';
import { EditBarProps } from '../types';
import Icon from '@mdi/react';
import { mdiClose, mdiAccount, mdiArrowRightBoldHexagonOutline } from '@mdi/js';

const hexToRgb = (hex: string) => {
    const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
    return result ? `${parseInt(result[1], 16)}, ${parseInt(result[2], 16)}, ${parseInt(result[3], 16)}` : '';
}

const rgbToHex = (rgb: string) => {
    const result = /^rgb\((\d+),\s*(\d+),\s*(\d+)\)$/i.exec(rgb);
    return result ? `#${parseInt(result[1]).toString(16)}${parseInt(result[2]).toString(16)}${parseInt(result[3]).toString(16)}` : '';
}

export default function EditBar({ currentEdit, name, onNameChange, xShift, setEditBarToggle, themeColor, setThemeColor }: EditBarProps) {
    const editForms = {
        'name-theme': (
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
        )
    }
    
    return (
        <div style={{right: `${xShift - 31}rem`}} className="edit-bar">
            <div className="tags">
                <div className="tag" onClick={() => { setEditBarToggle(true) }}>
                    <Icon path={mdiAccount} size={1.2} />
                    <span>Name & Theme</span>
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