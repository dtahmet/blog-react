import './single.css'
import SideBar from "../../SideBar/SideBar"
import SinglePost from '../../SinglePost/SinglePost'

export default function Single() {
  return (


    <div className='single'> 
       <div className='sideBar'><SideBar/></div> 
       <div className='mainSinglePost'><SinglePost/></div> 
    
    
    </div>
  )
}
