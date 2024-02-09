import { createBrowserRouter } from "react-router-dom";
import Header from "../Components/Header/Header";
import Content from "../Components/Contents/Content";
import AllToDoList from "../Components/Contents/AllToDoList";

const routes = createBrowserRouter(
    [
        {
            path : "/",
            element: <Header></Header>,
            children: [
                {
                    path: "/",
                    element: <Content></Content>
                },
                {
                    path: "/all-to-do-list",
                    element: <AllToDoList></AllToDoList>
                }
            ]
        }
    ]
)
export default routes