import StepPhotos from "./components/StepPhotos";
import StepProfile from "./components/StepProfile";
import StepVerification from "./components/StepVerification";
import StepIndustry from "./components/StepIndustry";
import StepHeight from "./components/StepHeight";
import Discover from "./components/Discover";
import Farming from "./components/Farming";
import MatchModal from "./components/MatchModal";
import React from "react";

const routes = [
  {
    path: "/",
    element: <StepPhotos />,
  },
  {
    path: "/profile",
    element: <StepProfile />,
  },
  {
    path: "/verification",
    element: <StepVerification />,
  },
  {
    path: "/industry",
    element: <StepIndustry />,
  },
  {
    path: "/height",
    element: <StepHeight />,
  },
  {
    path: "/discover",
    element: <Discover />,
  },
  {
    path: "/farming",
    element: <Farming />,
  },
  {
    path: "/match",
    element: <MatchModal />,
  },
];

export default routes;