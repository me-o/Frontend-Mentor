import { Outlet } from 'react-router-dom';

function App() {
	return (
		<div className=" min-h-screen font-Overpass bg-Very-Dark-Blue text-white grid place-content-center text-[.9375rem]">
			<Outlet />
		</div>
	);
}

export default App;
