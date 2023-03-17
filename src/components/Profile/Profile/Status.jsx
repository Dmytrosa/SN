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
                {
                    !isFetching &&
                    <div className={q.st}>
                        <span className={q.sttext} onDoubleClick={activateFetching} > Статус: {status}</span>
                    </div>
                }
                {
                    isFetching &&
                    <div>
                        <input type="text" autoFocus={true} value={status} onChange={onStatusChangeLogic} />
                    </div>
                }
                <button className={q.resetStatus} type="submit" onClick={deactivateFetching}>Підтвердити</button>
            </div>
        </div>
    );
})

export default Status;
