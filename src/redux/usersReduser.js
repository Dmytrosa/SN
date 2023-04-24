import { GetUsers, Follow, Unfollow } from "../api/api";
const SUB = () => 'SUB';
const UNSUB = () => 'UNSUB';
const SETUSERS =() =>"SET_USERS"
const SETCURRENTPAGE =() =>"SET_CURRENT_PAGE"
const SETTOTALUSERSCOUNT =() =>"SET_TOTAL_USERS_COUNT"
const TOGLEISFETCHING =() =>"TOGLE_IS_FETCHING"
const TOGLEISFETCHINGFOLLOWING =()=>"TOGLE_IS_FETCHING_FOLLOWING"
const CLEANISFETCHINGFOLLOWING =()=>"CLEAN_IS_FETCHING_FOLLOWING"

let initialState = {
    usersinfo: [],
    pageSize: 5,
    totalUsersCount: null,
    currentPage:1,
    pagePortion: 5,
    isFetching : false,
    isFetchingFollowing: [],
};


const usersReducer = (state = initialState, action) => {

    switch (action.type) {
        case SUB:
             {
            return {
              ...state,
              usersinfo: state.usersinfo.map(u =>{if (u.id ===action.userId)
                {return {...u, followed: true}}
                return u;
              })
            }
        }
        case UNSUB:
             {
            return {
              ...state,
              usersinfo: state.usersinfo.map(u =>{if (u.id ===action.userId)
                {return {...u, followed: false}}
                return u;
              })
            }
        }
        case SETUSERS:
            {
                return {...state, usersinfo:action.users}
            }
        case SETCURRENTPAGE:
          {
            return {...state, currentPage: action.currentPage}
          }
        case SETTOTALUSERSCOUNT:
            {
              return {...state, totalUsersCount:action.count }
            }
        case TOGLEISFETCHING:
          {
            return {...state, isFetching: action.set }
          }
          case TOGLEISFETCHINGFOLLOWING:
          {
            return {...state, 
              isFetchingFollowing: action.set
               ? [...state.isFetchingFollowing, action.userId]
               : state.isFetchingFollowing.filter(id => id != action.userid)

             }
          }
          case CLEANISFETCHINGFOLLOWING:
          {
            return {...state, isFetchingFollowing: [] }
          }
        default:
            return state;
    }
}



export const Sub =
  (userId) => ({ type: SUB, userId });

export const UnSub =
  (userId) => ({ type: UNSUB, userId });

export const SetUsers =
  (users)  => ({type: SETUSERS, users });

export const SetCurrentPage =
  (currentPage)  => ({type: SETCURRENTPAGE, currentPage });

export const SetTotalUsersCount =
  (count)  => ({type: SETTOTALUSERSCOUNT, count });

export const TogleIsFetching  =
  (set) => ({type: TOGLEISFETCHING, set});
  
export const TogleIsFetchingFollowing  =
  (set, userId) => ({type: TOGLEISFETCHINGFOLLOWING, set, userId});

export const CleanTogleIsFetchingFollowing  =
  () => ({type: CLEANISFETCHINGFOLLOWING});


export const GetUsersThunk = (currentPage, pageSize) =>{ return async(dispatch) =>{
  dispatch(TogleIsFetching(true));
 let data= await GetUsers(currentPage,pageSize)
      dispatch(SetCurrentPage(currentPage));
      dispatch(TogleIsFetching(false));
      dispatch(SetUsers(data.items))
      dispatch(SetTotalUsersCount(data.totalCount))
}}

export const FollowThunk = (userId) =>{ return async(dispatch) =>{
  dispatch(TogleIsFetchingFollowing(true, userId))
  let response= await Follow(userId)
  
    if(response.resultCode == 0 ){
      dispatch(Sub(userId))
    }
    dispatch(CleanTogleIsFetchingFollowing())
  
}}


export const  UnFollowThunk = (userId) =>{ return async(dispatch) =>{
  dispatch(TogleIsFetchingFollowing(true, userId))
  let response= await Unfollow(userId)

    if(response.resultCode == 0 ){
      dispatch(UnSub(userId))
    }
    dispatch(CleanTogleIsFetchingFollowing())

}}

export default usersReducer;