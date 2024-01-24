import React, { useState } from 'react'

function AddUser({ names, setNames }) {

    const [text, setText] = useState(() => '');

    const handleChange = e => {
        // if submit
            //use setnames to add to names
        //else
        console.log(e.target.value);
        setText(e.target.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('submitted');
        console.log(names);
        console.log(text);
        let addUser = [...names];
        addUser.push(text);
        console.log(addUser);
        setNames(addUser);
    }


    return (
        <form onSubmit= {handleSubmit}>
            <input 
                onChange={e => handleChange(e)}
                type="text"
                value= {text}
            />
            <br />
            <input type="submit" value="Add" />
        </form>
    )
}

export default AddUser