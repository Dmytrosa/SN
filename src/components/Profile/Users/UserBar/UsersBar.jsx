
// // const avat = () => "https://media.licdn.com/dms/image/C4E03AQF3pQ4_tjkmrQ/profile-displayphoto-shrink_200_200/0/1653871425929?e=1681344000&v=beta&t=U-rkmTBtapxl8zl57-lQhI5M2hia8vqOLwn0RgkmT-Q";

// // const UsersBar = (props) => {
// //  // debugger
// // // debugger
// //   if(props.state.userspage.usersinfo.length === 0){
// //     // debugger
// //     props.SetUsers([
// //     { id: 0, ava: avat(), name: "Alina", lastpost: "aboba", city: "Vinnutsia", sub: true },
// //     { id: 1, ava: avat(), name: "Natalia", lastpost: "aboba", city: "Vinnytsya", sub: false },
// //     { id: 2, ava: avat(), name: "Sashko", lastpost: "aboba", city: "Vinnutsia", sub: false },
// //     { id: 3, ava: avat(), name: "Denis", lastpost: "aboba", city: "Vinnutsia", sub: false },
// // ])
// //   }
// //   debugger

// //   return (
// //     props.state.userspage.usersinfo.map(user =>{return(<div className="main">
// //     <div>__________</div>
// // <div className={q.name}> <div>{user.name}</div> </div>
// // <div className={q.sub}>{user.sub ? 
// //                       <button onClick={()=>{props.UnSub(user.id)}}>unfollow</button>
// //                      : <button onClick={()=>{props.Sub(user.id)}}>follow</button> }</div>
// // <div ><div> <img className={q.ava} src={user.ava}/> </div></div>
// // <div className={q.lp}><div>{user.lastpost}</div></div>
// // <div className={q.city}><div>{user.city}</div></div>
// //   </div>)})

// //   );
// // };

// //class UsersBar extends React.Component {
  
//   // componentDidMount() {
//   //  // debugger
//   //   axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`)
//   //     .then(response => {
        
//   //       this.props.SetUsers(response.data.items)
//   //       this.props.SetTotalUsersCount(response.data.totalCount)
//   //     });
//   // }

//   // onPageChanged = (pageNumber) => {
//   //   //debugger
//   //   this.props.SetCurrentPage(pageNumber);
//   //   axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`)
//   //     .then(response => {
//   //       this.props.SetUsers(response.data.items);
//   //     })
//   // }
  
//   //render() {
//    // debugger
//     // let pagesCount = Math.ceil(this.props.totalUsersCount / this.props.pageSize);
//     // pagesCount= 10;
//     // let pages = [];
//     // for (let i = 1; i <= pagesCount; i++) {
//     //   pages.push(i);
//     // }
//     // return <div>
//     //   <div>
//     //     {pages.map(p => {
//     //       debugger
//     //       return <span className={this.props.currentPage === p && q.selectedPage}
//     //         onClick={() => { this.onPageChanged(p) }} >_{p}_</span>
//     //     })}
//     //   </div>
//     //   {this.props.usersinfo.map(u => <div key={u.id}>
//     //     <span>
//     //       <div>
//     //         <img src={u.photos.small != null ? u.photos.small : userPhoto} className={q.Ava} alt="aboba" />
//     //       </div>
//     //       <div>
//     //         {u.sub ?
//     //           <button onClick={() => { this.props.UnSub(u.id) }}>unfollow</button>
//     //           : <button onClick={() => { this.props.Sub(u.id) }}>follow</button>}
//     //       </div>
//     //       <div>{u.name}</div>
//     //     </span>
//     //   </div>)}
//     // </div>
//   }
// }




import React from "react";
import q from "./../Users.module.css";
import userPhoto from "../../../../additions/UsersAva.jpg";
import Reloader from "../../../Assets/Loader"
import { NavLink } from "react-router-dom";
import { Unfollow, Follow } from "../../../../api/api";
// import axios from "axios";

const UsersBar=(props)=>{
  let pagesCount = Math.ceil(props.props.totalUsersCount / props.props.pageSize);
  pagesCount= 10;
  let pages = [];
  for (let i = 1; i <= pagesCount; i++) {
    pages.push(i);
  }
  // debugger
return(
  <div>

    {props.props.isFetching? <Reloader/> :<>
    <div>
        {pages.map(p => { return <span className={props.props.currentPage === p && q.selectedPage}
            onClick={() => { props.onPageChanged(p) }} >_{p}_</span>
        })}
      </div>
      {props.props.usersinfo.map(u =>  <div key={u.id}>
        <span>
          
          <div>
          <NavLink
          
            to={'./../Profile/'+u.id}>
            <img  src={u.photos.small != null ? u.photos.small : userPhoto} className={q.Ava} alt="aboba" />
            </NavLink> 

          </div>
          <div>
            {u.followed ?
            
              <button 
                disabled={props.props.isFetchingFollowing.some(id => id === u.id)} 
              onClick={() => { 
                props.props.TogleIsFetchingFollowing(true, u.id)
                Unfollow(u.id)
                // axios.delete(`https://social-network.samuraijs.com/api/1.0/follow/${u.id}`,{
                //   withCredentials: true,
                //   headers:{"API-KEY": "34000a0a-8661-49d6-8fb7-04c1af10a555"}
                // })
                .then(response => {

                  if(response.resultCode == 0 ){
                    props.props.UnSub(u.id)
                  }
                 props.props.CleanTogleIsFetchingFollowing();
                });

                 }}>unfollow</button>

              : <button
               disabled={props.props.isFetchingFollowing.some(id => id === u.id)}
               onClick={() => {
                props.props.TogleIsFetchingFollowing(true, u.id)

                //  debugger 
                Follow(u.id)
                // axios.post(`https://social-network.samuraijs.com/api/1.0/follow/${u.id}`, {},{
                //   withCredentials: true,
                //   headers:{"API-KEY": "34000a0a-8661-49d6-8fb7-04c1af10a555"}
                // })
                .then(response => {
                  debugger
                  props.props.CleanTogleIsFetchingFollowing();
                  if(response.resultCode == 0 ){
               
                    props.props.Sub(u.id)
                  }

                });
                 }}>follow</button>}
          </div>
          <div>{u.name}</div>
        </span>
      </div>)}</>}
      
    </div>
)
}
 export default UsersBar