
import "./sidebar.css"

export default function SideBar() {
  return (
    <div className="sideBarContent">
        <hr className="longLine"></hr>
            <img src="https://plus.unsplash.com/premium_photo-1680344513203-dcc609b9be68?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fGZsb3dlciUyMGJveXxlbnwwfHwwfHx8MA%3D%3D" alt="" className="sideImage" />
        <hr className="longLine"></hr>
        <h1 className="sideMainTitle">Welcome to my Kitch Blog</h1>
        <hr className="longLine"></hr>
        <hr></hr>
        <h2>Categories</h2>
        <ul className="categoryItems">
            <li className="categoryItem">Books</li>
            <li className="categoryItem">Cinema</li>
            <li className="categoryItem">Games</li>
            <li className="categoryItem">Sports</li>
            <li className="categoryItem">Hobbies</li>
            <li className="categoryItem">Lifestyle</li>
        </ul>
        <hr className="longLine"></hr>
        <hr></hr>
        <h2>Who is me?</h2>
        <p> Anim adipisicing veniam nulla pariatur officia Lorem labore reprehenderit proident id qui irure officia qui.</p>
        <hr className="longLine"></hr>
        <h2>Contact Us</h2>
        <ul className="iconList">
          <li class="fa-brands fa-facebook"></li>
          <li class="fa-brands fa-twitter"></li>
          <li class="fa-brands fa-instagram"></li>
          <li class="fa-brands fa-tiktok"></li>
          <li class="fa-brands fa-linkedin"></li>
          <li class="fa-brands fa-github"></li>
        </ul>
    
    </div>

  )
}
