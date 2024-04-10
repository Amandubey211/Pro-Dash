import React, { useState, useEffect, lazy, Suspense } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import { FaSpinner } from "react-icons/fa";
import Offline from "../Components/ResuableComponent/Offline.js";

const Dashboard = lazy(() =>
  import("../Components/DashBoardComponents/Dashboard.js")
);
const Error = lazy(() => import("../Components/ResuableComponent/Error.js"));
const Login = lazy(() => import("../Components/LoginComponents/Login.js"));
const ProtectRoute = lazy(() => import("./ProtectedRoutes/ProtectRoute.js"));
const ProjectPage = lazy(() =>
  import("../Components/ProjectComponent/ProjectPage.js")
);
const AwardPage = lazy(() =>
  import("../Components/AwardsComponent/AwardPage.js")
);
const EducationPage = lazy(() =>
  import("../Components/EducationComponent/EducationPage.js")
);
const PersonalInfoPage = lazy(() =>
  import("../Components/PersonalComponent/PersonalInfoPage.js")
);
const ExperiencePage = lazy(() =>
  import("../Components/ExperienceComponent/ExperiencePage.js")
);

function App() {
  const [isOnline, setIsOnline] = useState(window.navigator.onLine);

  useEffect(() => {
    const handleOnline = () => setIsOnline(true);
    const handleOffline = () => setIsOnline(false);

    // Add event listeners for online/offline events
    window.addEventListener("online", handleOnline);
    window.addEventListener("offline", handleOffline);

    // Cleanup: remove event listeners
    return () => {
      window.removeEventListener("online", handleOnline);
      window.removeEventListener("offline", handleOffline);
    };
  }, []);

  const AppRouter = createBrowserRouter([
    {
      path: "/",
      element: <Login />,
      errorElement: <Error />,
    },
    {
      path: "/dash",
      element: <ProtectRoute Component={Dashboard} />,
      errorElement: <Error />,
    },
    {
      path: "/experience",
      element: <ProtectRoute Component={ExperiencePage} />,
      errorElement: <Error />,
    },
    {
      path: "/projects",
      element: <ProtectRoute Component={ProjectPage} />,
      errorElement: <Error />,
    },
    {
      path: "/personal",
      element: <ProtectRoute Component={PersonalInfoPage} />,
      errorElement: <Error />,
    },
    {
      path: "/achivements",
      element: <ProtectRoute Component={AwardPage} />,
      errorElement: <Error />,
    },
    {
      path: "/education",
      element: <ProtectRoute Component={EducationPage} />,
      errorElement: <Error />,
    },
    {
      path: "*",
      element: <Error />,
    },
  ]);

  return (
    <div>
      {/* Render OfflineMessage component if offline */}
      {!isOnline && <Offline />}
      <Suspense
        fallback={<FaSpinner className="animate-spin" />} // Render Loader component while loading
      >
        <RouterProvider router={AppRouter} />
      </Suspense>
    </div>
  );
}

export default App;
