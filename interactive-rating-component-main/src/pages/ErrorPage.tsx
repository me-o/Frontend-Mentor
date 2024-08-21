import { useRouteError } from 'react-router-dom';

export default function ErrorPage() {
	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	const error = useRouteError() as any;

	return (
		<div
			id="error-page"
			className=" bg-Very-Dark-Blue min-h-screen text-white grid place-content-center text-center gap-3 text-[20px] font-Overpass"
		>
			<h1 className="text-[40px]">Oops!</h1>
			<p>Sorry, an unexpected error has occurred.</p>
			<p>
				<i>{error.statusText || error.message}</i>
			</p>
		</div>
	);
}
