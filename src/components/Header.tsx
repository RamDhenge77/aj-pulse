import React from "react";
import { Settings, User, UserCircle } from "lucide-react";
import SettingsDialog from "./SettingsDialog";
import { Link } from "react-router-dom";

const Header: React.FC = () => {
  return (
    <header className="border-b border-gray-200 bg-white shadow-sm">
      <div className="container mx-auto px-4 py-3 flex items-center justify-between">
        <Link to='/' className="flex items-center">
          <div className="w-12 h-12 mr-3">
            <img
              src="/lovable-uploads/f6d21fb8-8be7-4c07-82b6-710b4f0636cd.png"
              alt="AI Icon"
              className="w-full h-full object-contain"
            />
          </div>
          <div>
            <h1 className="text-[#2596be] font-bold text-xl">AJ Pulse</h1>
            <p className="text-gray-500 text-sm">Your mobility assistant</p>
          </div>
        </Link>

        <div className="flex items-center space-x-2">
          <Link
            to='/user-profile'
            className="hover:text-white duration-150 hover:bg-[#2595be7e] p-[.64rem] rounded-full"
          >
            <User className="h-5 w-5" />
          </Link>
          <SettingsDialog />
        </div>
      </div>
    </header>
  );
};

export default Header;
