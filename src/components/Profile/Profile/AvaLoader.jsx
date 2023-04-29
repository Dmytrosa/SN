import React, { useState } from "react";
import q from "./Profile.module.css"

const AvaLoader = (props) => {
    const onAvaSelected = (e) => {
        if (e.target.files.length) {
            props.SetAvaThunk
                (e.target.files[0])
        }
    }
    return (

        <div className={q.AvaLoader}>
            <label htmlFor="a" className={q.button}>Change avatar photo</label>  
            <input id="a" className={q.uploadFile} type="file" onChange={onAvaSelected} />
        </div>
    )
}
export default AvaLoader