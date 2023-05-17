// import {
//   Route,
//   createBrowserRouter,
//   createRoutesFromElements,
//   RouterProvider,
//   Routes,
//   Router,
// } from "react-router-dom";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Hello from "./pages/Hello";
import Bye from "./pages/Bye";

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Hello />} />
        <Route path="/homepage" element={<Bye />} />
      </Routes>
    </Router>
  );
}
// const router = createBrowserRouter(
//   createRoutesFromElements(
//     <Route index element={<Hello />} />,
//     <Route path="/homepage" element={<Bye />} />
//   )
// );
// export default function App() {
//   return <RouterProvider router={router} />;
// }
// export default function App() {
//   return (
//     <>
//       <Hello />
//       <Bye />
//     </>
//   );
// }
