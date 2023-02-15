const SUB = () => 'SUB';
const UNSUB = () => 'UNSUB';
const SETUSERS =() =>"SET_USERS"
const SETCURRENTPAGE =() =>"SET_CURRENT_PAGE"
const SETTOTALUSERSCOUNT =() =>"SET_TOTAL_USERS_COUNT"
const TOGLEISFETCHING =() =>"TOGLE_IS_FETCHING"

let initialState = {
    usersinfo: [],
    pageSize: 5,
    totalUsersCount: 20,
    currentPage:1,
    isFetching : false,
};


const usersReducer = (state = initialState, action) => {

    switch (action.type) {
        case SUB:
             {
               // debugger
            return {
              ...state,
              
              usersinfo: state.usersinfo.map(u =>{if (u.id ===action.userId)
                {return {...u, sub: true}}
                return u;
              })
            }
        }
        case UNSUB:
             {
               debugger
            return {
              ...state,
              usersinfo: state.usersinfo.map(u =>{if (u.id ===action.userId)
                {return {...u, sub: false}}
                return u;
              })
            }
        }
        case SETUSERS:
            {
                //  debugger
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

export default usersReducer;