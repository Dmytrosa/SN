import UsersAPIContainer from "./UsersAPIContainer";
import {Sub,
         UnSub,
            SetUsers,
               SetCurrentPage,
                   SetTotalUsersCount,
                          TogleIsFetching,
        } from "../../../redux/usersReduser";
import {connect} from "react-redux";

let mapStateToProps = (state) =>{
 // debugger
    return{
      usersinfo: state.userspage.usersinfo,
      pageSize: state.userspage.pageSize,
      totalUsersCount: state.userspage.totalUsersCount,
      currentPage: state.userspage.currentPage,
      isFetching: state.userspage.isFetching,
    }
    }
    
    
    
    const UsersContainer = connect 
    (mapStateToProps,{Sub, UnSub, SetUsers, SetCurrentPage, SetTotalUsersCount, TogleIsFetching})(UsersAPIContainer);
    export default UsersContainer;