import React from "react";
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
        debugger
        if(prevProps.status !== this.props.status){
            this.setState({ status  : this.props.status})
        }
    }

    render() {
debugger
console.log("render")
        return (
            <div className="main">
                {
                    !this.state.isFetching &&
                    <div>
                       <span onDoubleClick={this.activateFetching} >{this.props.status}</span>
                    </div>
                }
                {
                    this.state.isFetching &&
                    <div>
                        <input type="text" autoFocus={true} value = {this.state.status} onChange={this.onStatusChangeLogic} />
                    </div>
                }
                <button onClick={this.deactivateFetching}>Submit</button>
            </div>

        );
    }


}

export default Status;
