import { createBrowserRouter, Route, RouterProvider, Routes, BrowserRouter } from "react-router";
import "./App.css";
import About from "./components/About";
import Dashboard from "./components/Dashboard";
import Home from "./components/Home";
import Student from "./components/Student";
import NavigationBar from "./components/NavigationBar";
import RootLayout from "./common/RouteLayout";

// With Create Browser Router
function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <RootLayout />,
      children: [
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "/about",
          element: <About />,
        },
        {
          path: "/dashboard",
          element: <Dashboard />,
        },
        {
          path: "/student/:id",
          element: <Student />,
        },
      ],
    },
  ]);

  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

// With BrowserRouter , Routes and Route
// function App() {
//   return (
//     <BrowserRouter>
//       <NavigationBar />
//       <Routes>
//         <Route path="/" element={<Home />} />
//         <Route path="/about" element={<About />} />
//         <Route path="/dashboard" element={<Dashboard />} />
//       </Routes>
//     </BrowserRouter>
//   );
// }

export default App;
