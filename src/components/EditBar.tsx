import '../styles/EditBar.css';
import { EditBarProps } from '../types';

export default function EditBar({ xShift, name, onNameChange, switchXShift }: EditBarProps) {
    return (
        <div style={{right: `${xShift - 31}rem`}} className="edit-bar">
            <div className="tags">
                <div className="tag" onClick={() => {
                    switchXShift(xShift === 0 ? 30 : 0)
                }}>Name</div>
            </div>
            <div className="forms">
                <form className="name-form">
                    <label htmlFor="first-name">First name</label>
                    <input type="text" value={name.first_name} name="first-name" id="first-name" onChange={(e) => onNameChange({...name, first_name: e.target.value})} />
                    <label htmlFor="first-name">Last name</label>
                    <input type="text" value={name.last_name} name="last-name" id="last-name" onChange={(e) => onNameChange({...name, last_name: e.target.value})} />
                </form>
            </div>
        </div>
    );
}