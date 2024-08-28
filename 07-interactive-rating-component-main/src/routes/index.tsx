import { createBrowserRouter } from 'react-router-dom';

// page components
import App from '../App';
import Rating from '../pages/Rating';
import Result from '../pages/Result';
import ErrorPage from '../pages/ErrorPage';

const router = createBrowserRouter([
	{
		path: '/',
		element: <App />,
		errorElement: <ErrorPage />,
		children: [
			{
				index: true,
				element: <Rating />,
			},
			{
				path: 'result/:points',
				element: <Result />,
				loader: Result.loader,
			},
		],
	},
]);

export default router;
