import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Login from "../pages/Login";
import ValidateOTP from "../pages/ValidateOTP";
import Success from "../pages/Success";


const router = createBrowserRouter([
    { path: "/", element: <Login /> },
    { path: "/validate", element: <ValidateOTP /> },
    { path: "/success", element: <Success /> },
])
function LoginApp() {
    return <RouterProvider router={router} />
}

export default LoginApp;
