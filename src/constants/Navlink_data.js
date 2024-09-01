
import {IoHome } from "react-icons/io5"
import { FaSearch} from "react-icons/fa"
import {MdExplore } from "react-icons/md"
import {IoMdNotifications} from "react-icons/io"
import {FaFacebookMessenger} from "react-icons/fa6"
import {CgProfile } from "react-icons/cg"

export const NAV_LINK_DATA =

    [
        {
            Name:"Home",
            icons: <IoHome size={25}/>,
        },
        {
            Name:"Search",
            icons: <FaSearch size={25}/>,
        },
        {
            Name:"Explore",
            icons: <MdExplore size={25}/>,
        },
    {
            Name:"Notification",
            icons: <IoMdNotifications  size={25}/>,
        },
      {
        Name:"Messanger",
        icons: <FaFacebookMessenger  size={25}/>
      },
      {
        Name:"Profile",
        icons: <CgProfile   size={25}/>
      }




    ]
