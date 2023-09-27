import { SyntheticEvent, useRef } from "react";

function NewTask(){
    const inputRef = useRef<HTMLInputElement>(null);
    

    function handleSubmit(event: SyntheticEvent){
        console.log("Input value:", inputRef.current?.value);
        //TODO: How to add data in the list now?

        event.preventDefault();
    }

    return (
        <> 
        <form onSubmit={handleSubmit}>
            <label htmlFor="task">task:</label> 
            <input type="text" ref={inputRef} id="task"/>
            <input type="submit" value="Add Todo"/>
        </form>
        </>
    )
    
    
}

export default NewTask;

