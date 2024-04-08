import React from "react";
import emptyList from "../../Assets/DashboardAssets/TaskListAsset/EmptyList.svg";
const EmptyList = ({ message }) => {
  return (
    <div className="flex flex-col gap-2 justify-center p-5 items-center">
      <img className="h-20 w-20" src={emptyList} alt="empty task  banner" />
      <span className="text-sm font-light">{message}</span>
    </div>
  );
};

export default EmptyList;
