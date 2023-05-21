// import {
//   Route,
//   createBrowserRouter,
//   createRoutesFromElements,
//   RouterProvider,
//   Routes,
//   Router,
// } from "react-router-dom";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { AuthProvider } from "./contexts/AuthContext";
import SecureRoutes from "./components/SecureRoutes";
import NotFound from "./components/NotFound";
import Hello from "./pages/Hello";
import Bye from "./pages/Bye";
import Info from "./pages/Info";
import Helloo from "./pages/Helloo";
import Forgetpassword from "./pages/Forgetpassword";

export default function App() {
  return (
    <AuthProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Hello />} />
          <Route path="/login" element={<Helloo />} />
          <Route path="/forgetpassword" element={<Forgetpassword />} />
          <Route element={<SecureRoutes />}>
            {/* <SecureRoutes> */}
            <Route path="/info" element={<Info />} />
            <Route path="/logout" element={<Bye />} />
            {/* </SecureRoutes> */}
          </Route>
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Router>
    </AuthProvider>
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
