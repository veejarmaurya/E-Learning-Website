import Hero from "./pages/app/hero/Hero";
import Nav from "./components/nav/Nav";
import Courses from "./pages/app/courses/Courses";
import Details from "./pages/app/details/Details"
import { BrowserRouter,createBrowserRouter,RouterProvider } from "react-router-dom";
import Learn from "./pages/app/learn/Learn";
import Chapter from "./pages/app/chapter/Chapter";
import ErrorPage from "./pages/misc/Page404/Page404"
function App() {
const browserrouter = createBrowserRouter([
  {
    path: '/',
    element: <Nav />,
    children: [
      {path:'', element:<Hero />},
      {path:'/courses',
        children :[
        {index:true ,element: <Courses />},
        {path : ':courseId', element: <Details/>},
         ] , 
     },
     {
      path:'/learn/:courseId',element:<Learn />,
      children:[
        {
        path:'chapter/:chapterId',
        element: <Chapter />,
        },
      ]
     },
     {
      path:"*" ,element:<ErrorPage />,
     }
    ],
    },
]);
return (
   <RouterProvider router={browserrouter} />
);
 
}

export default App;
