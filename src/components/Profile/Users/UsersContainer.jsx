import UsersAPIContainer from "./UsersAPIContainer";
import {Sub,
         UnSub,
            SetUsers,
               SetCurrentPage,
                   SetTotalUsersCount,
                          TogleIsFetching,
                                    TogleIsFetchingFollowing,
                                                     CleanTogleIsFetchingFollowing,
                                                                                GetUsersThunk,
                                                     FollowThunk,
                                    UnFollowThunk
        } from "../../../redux/usersReduser";
import {connect} from "react-redux";
import { withAuthRedirect } from "../../../hoc/withAuthRedirect";

let mapStateToProps = (state) =>{
    return{
      usersinfo: state.userspage.usersinfo,
      pageSize: state.userspage.pageSize,
      totalUsersCount: state.userspage.totalUsersCount,
      currentPage: state.userspage.currentPage,
      isFetching: state.userspage.isFetching,
      isFetchingFollowing: state.userspage.isFetchingFollowing,
    }
    }

    
    const UsersContainer =     withAuthRedirect(connect 
    (mapStateToProps,
      {Sub, UnSub, SetUsers, SetCurrentPage, SetTotalUsersCount,
          TogleIsFetching, TogleIsFetchingFollowing, CleanTogleIsFetchingFollowing,
          GetUsersThunk, FollowThunk, UnFollowThunk})(UsersAPIContainer));
    export default UsersContainer;