import { Header } from "./header/Header"
import { SideNav } from "./sideNav/SideNav"
import { Outlet } from "react-router"

const Dashboard = () => {
  return (
    <div className="w-full relative ">

        {/* header */}
        <div className=" w-full md:w-[calc(100%-200px)]  p-2 transition-all h-[60px] absolute top-0 left-0 md:left-[200px] border-gray-300">
            <Header/>

        </div>
        {/* SideNav */}
        <div className="hidden md:inline-block w-[200px]  transition-all h-screen bg-secondary border-gray-300 overflow-y-scroll sticky left-0 top-0 py-4 px-2">
            <SideNav/>
        </div>

        {/* main */}
        <div className="  w-full md:w-[calc(100%-200px)] h-[calc(100vh-60px)] transition-all absolute  top-[60px] left-0 md:left-[200px] border-gray-300 bg-white overflow-y-scroll p-4">
           <Outlet/>
        </div>
        
    </div>
  )
}

export default Dashboard