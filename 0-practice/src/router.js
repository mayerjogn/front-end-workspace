import { createBrowserRouter } from 'react-router-dom';
import Layout from './components/Layout';
import BestPost from './pages/BestPost';
import ViewPost from './pages/ViewPost';

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
        ],
    },
]);

export default router;
