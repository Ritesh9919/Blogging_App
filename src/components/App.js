
// import {Switch, Route} from 'react-router-dom';
// import {CreatePost, PostDetail, Home} from './index';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import CreatePost from './CreatePost'; 
import PostDetail from './PostDetail';
import Home from './Home';
import Navbar from './Navbar';

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Navbar />,
      children: [
        {
          index: true,
          element: <Home />,
        },
        {
          path:"/create-post",
          element:<CreatePost/>
        }
      ],
    },
  ]);
  
  return (
    <div>
    <RouterProvider router={router} />
    </div>
  );
}

export default App;
