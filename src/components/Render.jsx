import React, { useState } from 'react';

const Render = () => {
    const [password,setPassword] = useState("")
    console.log(password);
    return (
        <div>
            <input type="password" onChange={(e) => setPassword(e.target.value)} />
            {password.length <= 8 ? (<div>Weak password</div>) : (<div>Strong password</div>)}
        </div>
    );
};

export default Render;