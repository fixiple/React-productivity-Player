//Commponent for controlled checkbox
//See: https://medium.com/@colebemis/building-a-checkbox-component-with-react-and-styled-components-8d3aa1d826dd
import { ChangeEvent, ChangeEventHandler, FunctionComponent, useState } from "react"

type checkBoxProps = {
    id: string, 
    label: string,  
    checked? : boolean,
    onChange?: ChangeEventHandler,
}


export const Checkbox: FunctionComponent<checkBoxProps> = ({id, label, checked, onChange}) => {
    return (
        <div>
            <label>
                <input
                    id={id}
                    type="checkbox"
                    checked={checked}
                    onChange={onChange} 
                    />
                <label htmlFor={id}>{label}</label>
            </label>
        </div>
    );
};