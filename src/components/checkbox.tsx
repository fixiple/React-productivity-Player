/*checkbox component*/

import { ChangeEventHandler, FunctionComponent } from 'react';

interface checkBoxProps  {
    id: string, 
    label: String, 
    checked: boolean, 
    onChange?: ChangeEventHandler
}

const Checkbox: FunctionComponent<checkBoxProps> = ({id, label, checked, onChange}) => {
    return (
        <div>
            <input
                id={id}
                type="checkbox"
                checked={checked}
                onChange={onChange} />
            <label htmlFor={id}>{label}</label>
        </div>
    );
};
  

export default Checkbox;