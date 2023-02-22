import { SideBar } from "./components/SideBar/SideBar";
// import { BrowserRouter, Router, Route } from "react-router-dom";
import { Routes } from "./routes";

export const Tweets = [
  {
    id: "1",
    content: "tweet 1",
  },
  {
    id: "2",
    content: "tweet 2",
  },
  {
    id: "3",
    content: "tweet 3",
  },
];

export const App = () => {
  return (
      <Routes />
  );
};
