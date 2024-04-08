import { Tooltip } from "@chakra-ui/react";
import React from "react";
import { NavLink } from "react-router-dom";
import { ProfileLinkLogo } from "../../Data/DashboardData/ProfileCardLogo";
import { useSelector } from "react-redux";

const Navigation = ({ size }) => {
  const currentPalette = useSelector(
    (state) => state.themes.palettes[state.themes.currentPalette]
  );

  return (
    <div className="flex items-center justify-end flex-wrap lg:gap-3 gap-1 lg:p-3 p-1  ">
      {ProfileLinkLogo?.map((data) => {
        return (
          <div className="flex flex-col items-center" key={data.name}>
            <NavLink
              title={data?.name}
              to={`/${data?.name}`}
              key={data?.name}
              style={{ backgroundColor: currentPalette.accent2 }}
              className="border shadow-md lg:rounded-lg rounded-md transform hover:scale-110 transition-transform duration-300 lg:p-1 p-1"
            >
              <Tooltip label={data?.name}>
                <span
                  className={`lg:text-4xl text-lg ${
                    window.location.pathname === `/${data?.name}`
                      ? ` scale-105 font-semibold  `
                      : ` capitalize`
                  }`}
                >
                  {data?.logo}
                </span>
              </Tooltip>
            </NavLink>
            <span
              className={`capitalize lg:text-sm text-[10px]  ${
                window.location.pathname === `/${data?.name}`
                  ? `  font-semibold   scale-105 block text-blue-500  `
                  : ` capitalize  text-[7px]`
              }`}
            >
              {data?.name}
            </span>
          </div>
        );
      })}
    </div>
  );
};

export default Navigation;
