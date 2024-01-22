import "./topbar.css"

export default function TopBar() {
  return (
    <div className="top">
      <div className="topLeft">
        <ul className="iconList">
          <li class="fa-brands fa-facebook"></li>
          <li class="fa-brands fa-twitter"></li>
          <li class="fa-brands fa-instagram"></li>
          <li class="fa-brands fa-tiktok"></li>
          <li class="fa-brands fa-linkedin"></li>
          <li class="fa-brands fa-github"></li>
        </ul>
      

      </div>
      <div className="topCenter">
        <ul className="topList">
          <li className="topListItem">Home</li>
          <li className="topListItem">About</li>
          <li className="topListItem">Contact</li>
          <li className="topListItem">Write</li>
          <li className="topListItem">Logout</li>
        </ul>
      </div>
      <div className="topRight">
        <img className="profile_photo" src="https://png.pngtree.com/thumb_back/fh260/background/20230516/pngtree-an-illustration-of-a-young-male-in-sunglasses-and-black-face-image_2563109.jpg" alt="profile_photo" />
        <i class="fa-solid fa-magnifying-glass"></i>

      </div>



    </div>
    
   
  )
}
