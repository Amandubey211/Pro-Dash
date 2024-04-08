import { lazy, Suspense } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import EmptyList from "../Components/DashBoardComponents/EmptyList.js";

const Dashboard = lazy(() =>
  import("../Components/DashBoardComponents/Dashboard.js")
);
const Error = lazy(() => import("../Components/Error.js"));
const Login = lazy(() => import("../Components/Login.js"));
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
  ]);

  return (
    <div>
      {/* //add loader */}
      <Suspense
        fallback={
          <div className="flex justify-center items-center w-screen h-screen">
            <b className="text-3xl ">ProDash</b>
          </div>
        }
      >
        <RouterProvider router={AppRouter} />
      </Suspense>
    </div>
  );
}

export default App;
