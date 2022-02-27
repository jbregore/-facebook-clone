import Image from "next/image";
import {
  BellIcon,
  ChatIcon,
  ChevronDownIcon,
  HomeIcon,
  UserGroupIcon,
  ViewGridIcon,
} from "@heroicons/react/solid";
import {
  FlagIcon,
  PlayIcon,
  SearchIcon,
  ShoppingCartIcon,
} from "@heroicons/react/outline";

//components
import HeaderIcon from "./HeaderIcon";

function Header() {
  return (
    <div className="sticky top-0 z-50 bg-white flex items-center p-2 lg:px-5 shadow-md">
      {/* Header left */}
      <div className="flex items-center">
        <Image
          src="https://links.papareact.com/5me"
          width={40}
          height={40}
          layout="fixed"
        />

        <div className="flex ml-2 items-center rounded-full bg-gray-100 p-2">
          <SearchIcon className="h-6 text-gray-600 " />
          <input className="flex ml-2 items-center 
          bg-transparent outline-none placeholder-gray-500 flex-shrink
          hidden md:inline-flex"
            type="text" placeholder="Search Facebook" />
        </div>
      </div>

      {/* Header center */}
      <div className="flex justify-center flex-grow">
        <div className="flex space-x-6 md:space-x-2">
          <HeaderIcon active Icon={HomeIcon} />
          <HeaderIcon Icon={FlagIcon} />
          <HeaderIcon Icon={PlayIcon} />
          <HeaderIcon Icon={ShoppingCartIcon} />
          <HeaderIcon Icon={UserGroupIcon} />
        </div>
      </div>


      {/* Header right */}
      <div className="flex items-center sm:space-x-2 justify-end">
        {/* Profile pic */}
        <Image 
        src="https://firebasestorage.googleapis.com/v0/b/midterm-redux.appspot.com/o/274213862_253831063584385_2282428805788619329_n.jpg?alt=media&token=d4d442a6-8d7f-4abf-88d3-1bc9b34ea282" 
        className="rounded-full cursor-pointer object-cover"
          width="40"
          height="40"
          layout="fixed"
        />
        <p className="whitespace-nowrap font-semibold pr-3 hidden md:block">Jb Regore</p>
        <ViewGridIcon className="icon" />
        <ChatIcon className="icon" />
        <BellIcon className="icon" />
        <ChevronDownIcon className="icon" />
      </div>

    </div>
  );
}

export default Header;
