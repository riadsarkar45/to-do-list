import { createBrowserRouter } from "react-router-dom";
import Header from "../Components/Header/Header";
import Content from "../Components/Contents/Content";

const routes = createBrowserRouter(
    [
        {
            path : "/",
            element: <Header></Header>,
            children: [
                {
                    path: "/",
                    element: <Content></Content>
                }
            ]
        }
    ]
)
export default routes