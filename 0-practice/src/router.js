import { createBrowserRouter } from 'react-router-dom';
import Layout from './components/Layout';
import Post from './pages/Post';

const router = createBrowserRouter([
    {
        path: '/',
        element: <Layout />,

        children: [
            {
                index: true,
                element: <Post />,
            },
        ],
    },
]);

export default router;
