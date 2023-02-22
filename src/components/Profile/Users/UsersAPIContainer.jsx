import React from "react";
import axios from 'axios';
import UsersBar from "./UserBar/UsersBar"
import {GetUsers} from "../../../api/api"

class UsersAPIContainer extends React.Component{
     componentDidMount =()=> {
        this.props.TogleIsFetching(true);
        GetUsers(this.props.currentPage, this.props.pageSize)
           .then(data => {
            this.props.TogleIsFetching(false);
             this.props.SetUsers(data.items)
             this.props.SetTotalUsersCount(data.totalCount)
           });
       }
     
      onPageChanged = (pageNumber) => {
         this.props.TogleIsFetching(true);
         this.props.SetCurrentPage(pageNumber);
         GetUsers(pageNumber, this.props.pageSize)
           .then(data => {
            this.props.TogleIsFetching(false);
             this.props.SetUsers(data.items);
           })
       }
render()
{return <UsersBar props={this.props} componentDidMount={this.componentDidMount} onPageChanged ={this.onPageChanged} />
}


}




export default UsersAPIContainer;