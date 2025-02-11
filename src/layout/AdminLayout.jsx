import React from "react";
import { NavLink, Outlet, useNavigate } from "react-router";
import { clearStorage } from "../utils/localStorage";
import logoutIcon from "../assets/icons/logout.png";
import dashboardIconGrey from "../assets/icons/dashboard-grey.png";
import dashboardIconWhite from "../assets/icons/dashboard-white.png";
import inventoryIconGrey from "../assets/icons/inventory-grey.png";
import inventoryIconWhite from "../assets/icons/inventory-white.png";
import userIconGrey from "../assets/icons/user-grey.png";
import userIconWhite from "../assets/icons/user-white.png";
import walletIconGrey from "../assets/icons/wallet-grey.png";
import walletIconWhite from "../assets/icons/wallet-white.png";
import approveIconGrey from "../assets/icons/approval-grey.png";
import approveIconWhite from "../assets/icons/approval-white.png";

const AdminLayout = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    clearStorage();
    navigate("/sign-in");
  };

  return (
    <div className="bg-customGrey h-dvh p-4">
      <div className="w-full h-full flex flex-col md:flex-row md:space-x-4">
        <nav className="hidden md:block md:w-[25%] h-full bg-white rounded-md shadow-xl overflow-y-auto custom-scrollbar">
          <div className="h-32 w-full p-4">
            <img
              src="/logo/kitlon-nobg-small.png"
              alt="logo"
              className="h-full w-full object-contain"
            />
          </div>
          <div>
            <ul>
              <li>
                <NavLink
                  to="dashboard"
                  className={({ isActive }) =>
                    `w-full h-16 px-3 lg:pl-7 border-t-2 flex items-center space-x-3 font-medium ${
                      isActive && "bg-customLightGrey"
                    }`
                  }
                >
                  <img src={dashboardIconGrey} alt="..." className="h-7 w-7" />
                  <span>Dashboard</span>
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="approve-sku"
                  className={({ isActive }) =>
                    `w-full h-16 px-2 lg:pl-6 border-t-2 flex items-center space-x-4 font-medium ${
                      isActive && "bg-customLightGrey"
                    }`
                  }
                >
                  <img src={approveIconGrey} alt="..." className="h-7 w-7" />
                  <span>Approve SKU</span>
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="labour-management"
                  className={({ isActive }) =>
                    `w-full h-16 px-2 lg:pl-6 border-t-2 flex items-center space-x-2 font-medium ${
                      isActive && "bg-customLightGrey"
                    }`
                  }
                >
                  <img src={userIconGrey} alt="..." className="h-9 w-9" />
                  <span>Labour Management</span>
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="inventory-management"
                  className={({ isActive }) =>
                    `w-full h-16 px-2 lg:pl-6 border-t-2 flex items-center space-x-2 font-medium ${
                      isActive && "bg-customLightGrey"
                    }`
                  }
                >
                  <img src={inventoryIconGrey} alt="..." className="h-9 w-9" />
                  <span>Inventory Management</span>
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="payout-management"
                  className={({ isActive }) =>
                    `w-full h-16 px-3 lg:pl-7 border-y-2 flex items-center space-x-3 font-medium ${
                      isActive && "bg-customLightGrey"
                    }`
                  }
                >
                  <img src={walletIconGrey} alt="..." className="h-7 w-7" />
                  <span>Payout Management</span>
                </NavLink>
              </li>
            </ul>
          </div>
        </nav>

        <div className="md:w-[75%] w-full h-full flex flex-col space-y-4 mb-10">
          <div className="flex items-center justify-between space-x-4 px-5 h-[9%] md:h-[10%] w-full bg-white rounded-md shadow-xl">
            <span>
              Welcome&nbsp;<span className="text-lg font-medium">Admin</span>
            </span>
            <img
              src={logoutIcon}
              onClick={handleLogout}
              alt="logout"
              className="h-6 cursor-pointer"
              title="Logout"
            />
          </div>

          <div className="h-[81%] md:h-full w-full bg-white rounded-md p-5 overflow-y-auto custom-scrollbar shadow-xl">
            <Outlet />
          </div>
        </div>
      </div>

      {/* Bottom Navbar for Small Screens */}
      <nav className="fixed bottom-0 left-0 w-full bg-white shadow-lg md:hidden flex justify-around items-center h-14">
        <NavLink
          to="dashboard"
          className={({ isActive }) =>
            `flex flex-col items-center ${
              isActive && "bg-customGrey rounded-full p-3"
            }`
          }
        >
          {({ isActive }) => (
            <img
              src={isActive ? dashboardIconWhite : dashboardIconGrey}
              alt="Dashboard"
              className="h-6 w-6"
            />
          )}
        </NavLink>

        <NavLink
          to="approve-sku"
          className={({ isActive }) =>
            `flex flex-col items-center ${
              isActive && "bg-customGrey rounded-full p-3"
            }`
          }
        >
          {({ isActive }) => (
            <img
              src={isActive ? approveIconWhite : approveIconGrey}
              alt="Approve Sku"
              className="h-6 w-6"
            />
          )}
        </NavLink>

        <NavLink
          to="labour-management"
          className={({ isActive }) =>
            `flex flex-col items-center ${
              isActive && "bg-customGrey rounded-full p-2"
            }`
          }
        >
          {({ isActive }) => (
            <img
              src={isActive ? userIconWhite : userIconGrey}
              alt="Labour Management"
              className="h-8 w-8"
            />
          )}
        </NavLink>

        <NavLink
          to="inventory-management"
          className={({ isActive }) =>
            `flex flex-col items-center ${
              isActive && "bg-customGrey rounded-full p-2"
            }`
          }
        >
          {({ isActive }) => (
            <img
              src={isActive ? inventoryIconWhite : inventoryIconGrey}
              alt="Inventory Management"
              className="h-8 w-8"
            />
          )}
        </NavLink>

        <NavLink
          to="payout-management"
          className={({ isActive }) =>
            `flex flex-col items-center ${
              isActive && "bg-customGrey rounded-full p-3"
            }`
          }
        >
          {({ isActive }) => (
            <img
              src={isActive ? walletIconWhite : walletIconGrey}
              alt="Payout Management"
              className="h-6 w-6"
            />
          )}
        </NavLink>
      </nav>
    </div>
  );
};

export default AdminLayout;
