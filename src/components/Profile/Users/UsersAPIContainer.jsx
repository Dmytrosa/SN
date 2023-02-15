import React from "react";
import axios from 'axios';
import UsersBar from "./UserBar/UsersBar"

class UsersAPIContainer extends React.Component{
    debugger
     componentDidMount =()=> {
        // debugger
        this.props.TogleIsFetching(true);
         axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`)
           .then(response => {
            this.props.TogleIsFetching(false);
             this.props.SetUsers(response.data.items)
             this.props.SetTotalUsersCount(response.data.totalCount)
           });
       }
     
      onPageChanged = (pageNumber) => {
         //debugger
         this.props.TogleIsFetching(true);
         this.props.SetCurrentPage(pageNumber);
         axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`)
           .then(response => {
            this.props.TogleIsFetching(false);
             this.props.SetUsers(response.data.items);
           })
       }
render()
{return <UsersBar props={this.props} componentDidMount={this.componentDidMount} onPageChanged ={this.onPageChanged} />
}


}




export default UsersAPIContainer;