import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { MenuDocument } from "./app/menudocument.jsx";
import { WriteReview } from "./app/writereview.jsx";
import { ReadReview } from "./app/readreview.jsx";
import { Home } from "./app/home.jsx";
import { Contact } from "./app/contact.jsx";
import { Calendar } from "./app/calendar.jsx";
import { CourseBook } from "./app/coursebook.jsx";
import { CourseSyllabus } from "./app/coursesyllabus.jsx";
import { PeeOne } from "./app/peeone.jsx";
import { PeeTwo } from "./app/peetwo.jsx";
import { PeeThree } from "./app/peethree.jsx";
import { PeeFour } from "./app/peefour.jsx";
import { Topic } from "./app/topic.jsx";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "writereview",
    element: <WriteReview />,
  },
  {
    path: "readreview",
    element: <ReadReview />,
  },
  {
    path: "menudocument",
    element: <MenuDocument />,
  },
  {
    path: "contact",
    element: <Contact />,
  },
  {
    path: "calendar",
    element: <Calendar />,
  },
  {
    path: "coursebook",
    element: <CourseBook />,
  },
  {
    path: "coursesyllabus",
    element: <CourseSyllabus />,
  },
  {
    path: "peeone",
    element: <PeeOne />,
  },
  {
    path: "peetwo",
    element: <PeeTwo />,
  },
  {
    path: "peethree",
    element: <PeeThree />,
  },
  {
    path: "peefour",
    element: <PeeFour />,
  },
  {
    path: "topic",
    element: <Topic />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
