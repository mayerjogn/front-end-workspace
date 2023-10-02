import { createBrowserRouter } from 'react-router-dom';
import Layout from './components/Layout';
import BestPost from './pages/BestPost';
import ViewPost from './pages/ViewPost';
import Post from './pages/Post';

const router = createBrowserRouter([
    {
        path: '/',
        element: <Layout />,

        children: [
            {
                index: true,
                element: <BestPost />,
            },

            {
                path: 'ViewPost',
                element: <ViewPost />,
            },
            {
                path:'post',
                element:<Post /> ,   
            }
        ],
    },
]);

export default router;
