import {
    ChevronDownIcon,
    ShoppingBagIcon,
    UserGroupIcon,
} from "@heroicons/react/outline";
import {
    CalendarIcon,
    ClockIcon,
    DesktopComputerIcon,
    UsersIcon
} from "@heroicons/react/solid";

import SidebarRow from "./SidebarRow";

function Sidebar() {
  return (
    <div className="p-2 mt-5 max-w[600px] xl:min-w-[300px]">
        <SidebarRow src={"https://firebasestorage.googleapis.com/v0/b/midterm-redux.appspot.com/o/274213862_253831063584385_2282428805788619329_n.jpg?alt=media&token=d4d442a6-8d7f-4abf-88d3-1bc9b34ea282"}
         title="Jb Regore"/>

        <SidebarRow Icon={UsersIcon} title="Friends"/>
        <SidebarRow Icon={UserGroupIcon} title="Groups"/>
        <SidebarRow Icon={ShoppingBagIcon} title="MarketPlace"/>
        <SidebarRow Icon={DesktopComputerIcon} title="Watch"/>
        <SidebarRow Icon={CalendarIcon} title="Events"/>
        <SidebarRow Icon={ClockIcon} title="Memories"/>
        <SidebarRow Icon={ChevronDownIcon} title="See More"/>
    </div>
  )
}

export default Sidebar