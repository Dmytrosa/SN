import React, { useState } from "react";
import { useEffect } from "react";
import q from "../../Assets/Form.module.css";

const Status = React.memo((props) => {

    const [isFetching, setisFetching] = useState(false);
    const [status, setstatus] = useState(props.status);

    const activateFetching = () => {
        setisFetching(true)
    }

    const deactivateFetching = () => {
        setisFetching(false)
        props.SetStatusThunk(status)
    }

    const onStatusChangeLogic = (e) => {
        setstatus(e.target.value)
    }

    useEffect(() => {
        setstatus(props.status)
    }, [props.status])

    return (
        <div className={q.body}>
            <div className={q.status}>
                {props.state.auth.userId === props.profile.userId
? 
                 <div>
                 {
                     !isFetching &&
                     <div className={q.st}>
                         <span className={q.sttext} onDoubleClick={activateFetching} > Status: {status}</span>
                     </div>
                 }
                 {
                     isFetching &&
                     <div>
                         <input type="text" autoFocus={true} value={status} onChange={onStatusChangeLogic} />
                     </div>
                 }
                 <button className={q.button} type="submit" onClick={deactivateFetching}>Submit</button>
                 </div>:
                                          <span className={q.sttext} onDoubleClick={activateFetching} > Status: {status}</span>

                 }
               
            </div>
        </div>
    );
})

export default Status;
