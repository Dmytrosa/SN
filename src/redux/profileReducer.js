const POSTADDING  =()=>'POST-ADDING';
const REWRITENEWPOSTTITLE = () =>'REWRITE-NEW-POST-TITLE';
const REWRITENEWPOSTTEXT = () =>'REWRITE-NEW-POST-TEXT';



const profileReducer =(state, action)=>{
    
  if (action.type === POSTADDING )
  {
    let postadd = {
      id: 1,
      text: action.postaddingtext,
      title: action.postaddingtitle,
      date: "15:10:2022"
    };
    state.postsinfo.push(postadd);
  }
  
  else if(action.type === REWRITENEWPOSTTITLE){
  //debugger;
    state.newposttitletext = action.postaddingtitle;
   // console.log(state.newposttitletext);
  
  }
  else if (action.type === REWRITENEWPOSTTEXT){
  
    state.newposttexttext = action.postaddingtext;
  
   }
}
export default profileReducer;