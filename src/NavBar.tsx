import React from "react";

function NavBar() {
  return (
    <nav className="bg-blue-500 py-4 w-full">
      <ul className="flex justify-center list-none m-0 p-0">
        <li className="mr-5">
          <a href="#" className="text-white no-underline text-xl font-bold hover:text-[#2f5d6b]">
            Buy a Business
          </a>
        </li>
        <li className="mr-5">
          <a href="#" className="text-white no-underline text-xl font-bold hover:text-[#2f5d6b]">
            Buy a Franchise
          </a>
        </li>
        <li className="mr-5">
          <a href="#" className="text-white no-underline text-xl font-bold hover:text-[#2f5d6b]">
            Sell a Business
          </a>
        </li>
        <li>
          <a href="#" className="text-white no-underline text-xl font-bold hover:text-[#2f5d6b]">
            Sell a Franchise
          </a>
        </li>
      </ul>
    </nav>
  );
}

export default NavBar;
