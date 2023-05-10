import React, { useEffect, useState } from "react";
import q from "../Profile/Users/Users.module.css"
const Paginator = (props) => {
    const [portionNumber, setPortionNumber] = useState(1)
    const pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);
    let pages = [];
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i);
    }
    let currentPortion = Math.ceil(props.currentPage / props.pageSize);
    let portionCount = Math.ceil(pagesCount / props.pagePortion);
    let rightPortionPageNumber = props.pagePortion * portionNumber + 1
    let leftPortionPageNumber = ((portionNumber - 1) * props.pagePortion);

    useEffect(() => { setPortionNumber(currentPortion) }, [])
    return (
        <div className={q.paginatorBox}>
            {portionNumber > 1 && <button onClick={() => { setPortionNumber(portionNumber - 1) }}>{`<=`}</button>}
            {pages
                .filter(p => p < rightPortionPageNumber && p > leftPortionPageNumber)
                .map(p => {
                    return <span key={p} className={props.currentPage === p? q.selectedPage : null}
                        onClick={() => {
                            props.onPageChanged(p);
                        }} > _{p}_</span>
                })}
            {portionCount > portionNumber && <button onClick={() => { setPortionNumber(portionNumber + 1) }}>{`=>`}</button>
            }
        </div>
    )
}

export default Paginator;