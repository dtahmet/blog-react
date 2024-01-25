import "./homepage.css"
import Header from "../../Header/Header"
import SideBar from "../../SideBar/SideBar"
import MainScreen from "../../MainScreen/MainScreen"

export default function HomePage() {
  return (
    <>
      <Header/>
      <div className="home">
        <div className="sideBar"><SideBar/></div>
        <div className="mainScreen"><MainScreen/></div>

      </div>
      
    </>
  
  
  )
}
