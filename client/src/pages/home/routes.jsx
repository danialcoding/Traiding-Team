import Header from "../../components/header/header";
import Auth from "../authpage/authpage";
import Home from "./home";
import Footer from "../../components/footer/footer";
import CreateTeam from "../createteam/createteam";
import Teams from "../teams/teams";
import News from "../news/news";
import UserDashboard from "../userdashboard/userDashboard";


//dashboard
import DWallet from '../dashboardPages/wallet/wallet';
import DNews from '../dashboardPages/news/news';
import DTeams from '../dashboardPages/teams/teams';

import ChatRoom from "../chatroom/chatRoom";

import React from "react";
import {createBrowserRouter,RouterProvider,Route,createRoutesFromElements,Outlet} from "react-router-dom";

// const Layout = () => (
//   <>
//     <Header/>

//     <div className="routes">
//       <Outlet/>
//     </div>

//     <Footer/>
//   </>
// );
const Layout = ({outlet}) => {
  const path = (window.location.pathname).split("/").filter((str)=> str !== "");
  
  if(path[0] === "Dashboard" | path[0] === "dashboard") {
    return (
      <div className="routes">
        {outlet}
      </div>
    )
  }
  else {
    return (
      <>
        <Header/>
  
        <div className="routes">
          {outlet}
        </div>
  
        <Footer/>
      </>
    )
  }

  
}

const Routes = () => {
    const router = createBrowserRouter(createRoutesFromElements(
        <Route >
          <Route path="/"  element={<Layout outlet={<Home/>}/>}/>
          <Route path="/home" element={<Layout outlet={<Home/>}/>}/>

          <Route path="/dashboard" element={<Layout outlet={<UserDashboard layout={<DWallet/>}/>}/>}/>
          <Route path="/dashboard" element={<Layout outlet={<UserDashboard layout={<DWallet/>}/>}/>}/>
          <Route path="/dashboard/teams" element={<Layout outlet={<UserDashboard layout={<DTeams/>}/>}/>}/>
          <Route path="/dashboard/news" element={<Layout outlet={<UserDashboard layout={<DNews/>}/>}/>}/>
          <Route path="/dashboard/wallet" element={<Layout outlet={<UserDashboard layout={<DWallet/>}/>}/>}/>

          <Route path="/chatroom" element={<Layout outlet={<ChatRoom/>}/>}/>

          <Route path="/news" element={<Layout outlet={<News/>}/>}/>

          <Route path="/create-team" element={<Layout outlet={<CreateTeam/>}/>}/>
          <Route path="/teams" element={<Layout outlet={<Teams/>}/>}/>

          <Route path="/sing-in" element={<Layout outlet={<Auth mode={"signin"}/>}/>}/>
          <Route path="/sing-up" element={<Layout outlet={<Auth mode={"signup"}/>}/>}/>
          <Route path="/forgetpsw" element={<Layout outlet={<Auth mode={"forgetpsw"}/>}/>}/>
          
          {/* <Route path="/news" element={<News/>}/>

          <Route path="/create_team" element={<CreateTeam/>}/>
          <Route path="/teams" element={<Teams/>}/>


          <Route path="/sing-in" element={<Auth mode={"signin"}/>}/>
          <Route path="/sing-up" element={<Auth mode={"signup"}/>}/>
          <Route path="/forgetpsw" element={<Auth mode={"forgetpsw"}/>}/> */}
        </Route>
        
      )
    )
          

    return (
        <>
            <RouterProvider router={router}/>
        </>
     );
}
 
export default Routes;

