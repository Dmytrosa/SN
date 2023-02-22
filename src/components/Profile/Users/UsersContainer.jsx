import UsersAPIContainer from "./UsersAPIContainer";
import {Sub,
         UnSub,
            SetUsers,
               SetCurrentPage,
                   SetTotalUsersCount,
                          TogleIsFetching,
                                    TogleIsFetchingFollowing,
                                                     CleanTogleIsFetchingFollowing
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
      isFetchingFollowing: state.userspage.isFetchingFollowing,
    }
    }
    
    
    const UsersContainer = connect 
    (mapStateToProps,
      {Sub, UnSub, SetUsers, SetCurrentPage, SetTotalUsersCount,
          TogleIsFetching, TogleIsFetchingFollowing, CleanTogleIsFetchingFollowing})(UsersAPIContainer);
    export default UsersContainer;