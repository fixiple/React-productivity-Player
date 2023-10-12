//Commponent for controlled checkbox
//See: https://medium.com/@colebemis/building-a-checkbox-component-with-react-and-styled-components-8d3aa1d826dd
import { ChangeEvent, ChangeEventHandler, FunctionComponent, useState } from "react"

type checkBoxProps = {
    id: string, 
    label: string,  
    onChange?: ChangeEventHandler
}


export const Checkbox: FunctionComponent<checkBoxProps> = ({id, label}) => {
    const [checked, setChecked] = useState(false);
    const handleChange = (e : ChangeEvent<HTMLInputElement>) =>{
        setChecked(() => e.target.checked );
        //console.log(e.target.nextSibling?.textContent)
        
    }

    return (
        <div>
            <label>
                <input
                    id={id}
                    type="checkbox"
                    checked={checked}
                    onChange={handleChange} />
                <label htmlFor={id}>{label}</label>
            </label>
        </div>
    );
};