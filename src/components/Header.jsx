import React from "react";

const Header = () => {
  return (
    <div className="navbar bg-[#7749f8]">
      <div className="flex-1">
        <a className="btn btn-ghost text-xl text-white">Personal Blogging App</a>
      </div>
      <div className="flex-none">
        <ul className="menu menu-horizontal px-1">
          <li>
            <a className="text-white">LogIn</a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
