import React from "react";
import q from"../Assets/Form.module.css";

class Status extends React.Component {
    state = {
        isFetching: false,
        status: this.props.status,
    }
    activateFetching = () => {
        this.setState({isFetching: true}) 
    }

    deactivateFetching = () => {
        this.setState({ isFetching: false })
         this.props.SetStatusThunk(this.state.status)
    }

    onStatusChangeLogic =(e) =>{
        this.setState({ status: e.target.value})
    }

    componentDidUpdate(prevProps, prevState){
        if(prevProps.status !== this.props.status){
            this.setState({ status  : this.props.status})
        }
    }

    render() {
console.log("render")
        return (
            <div className={q.body}>
                <div className={q.status}>
                {
                    !this.state.isFetching &&
                    <div className={q.st}>
                       <span  className={q.sttext}  onDoubleClick={this.activateFetching} > Статус: {this.props.status}</span>
                    </div>
                }
                {
                    this.state.isFetching &&
                    <div>
                        <input  type="text" autoFocus={true} value = {this.state.status} onChange={this.onStatusChangeLogic} />
                    </div>
                }
                <button className={q.resetStatus} type="submit" onClick={this.deactivateFetching}>Підтвердити</button>
                </div>
            </div>

        );
    }


}

export default Status;
