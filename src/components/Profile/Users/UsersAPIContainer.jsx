import React, { PureComponent } from "react";
import UsersBar from "./UserBar/UsersBar"
class UsersAPIContainer extends PureComponent{
  


     componentDidMount =()=> {
      this.props.GetUsersThunk(this.props.currentPage, this.props.pageSize)
       }
      onPageChanged = (pageNumber) => {
         this.props.GetUsersThunk(pageNumber, this.props.pageSize)
       }
render()
{

  return <UsersBar {...this.props} componentDidMount={this.componentDidMount} onPageChanged ={this.onPageChanged} />
}


}




export default UsersAPIContainer;