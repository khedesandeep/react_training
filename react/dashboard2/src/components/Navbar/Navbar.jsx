import React from 'react'
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import LanguageIcon from '@mui/icons-material/Language';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';
import { Link } from 'react-router-dom';
import MenuOutlinedIcon from '@mui/icons-material/MenuOutlined';

const Navbar = () => {
    const [navbarOpen, setNavbarOpen] = React.useState(false);

  return (
        
    <>
        <nav className="relative flex flex-wrap items-center justify-between px-2 py-3 bg-slate-500  ">
        <div className="container px-4 mx-auto flex flex-wrap items-center justify-between">
          <div className="w-full text-white relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start">
            <button
              className="text-white cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none"
              type="button"
              onClick={() => setNavbarOpen(!navbarOpen)}
            >
              <MenuOutlinedIcon />
            </button>
          </div>
          <div
            className={
              "lg:flex flex-grow items-center" +
              (navbarOpen ? " flex" : " hidden")
            }
            id="example-navbar-danger"
          >
            <ul className="flex flex-col lg:flex-row list-none lg:ml-auto">
              <li className="nav-item">
                <button
                  className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75"
                  
                >
                  <HomeOutlinedIcon /><span className="ml-2"><Link to='/'>Home</Link></span>
                </button>
              </li>
              <li className="nav-item">
                <button
                  className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75"
                  
                >
                  <LanguageIcon /><span className="ml-2">Language</span>
                </button>
              </li>
              <li className="nav-item">
                <button
                  className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75"
                  
                >
                  <NotificationsNoneIcon /><span className="ml-2"></span>
                </button>
              </li>

              <li className="nav-item">
                <button
                  className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75"
                  
                >
                   <ChatBubbleOutlineIcon /><span className="ml-2">Message</span>
                </button>
              </li>

    

              <div className="nav-item">
                    <img className='rounded-full w-10 h-10' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTQEZrATmgHOi5ls0YCCQBTkocia_atSw0X-Q&usqp=CAU" alt="navbarimage" />                   
                </div>

             
            </ul>
          </div>
        </div>
      </nav>
    </>

  )
}

export default Navbar