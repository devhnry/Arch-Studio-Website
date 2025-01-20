import { Link } from 'react-router-dom';

export default function NotFound() {
		return (
				<div className="min-h-screen flex items-center justify-center">
						<div className="text-center">
								<h2 className="text-2xl font-bold mb-4">Page Not Found</h2>
								<p className="mb-4">Could not find requested resource</p>
								<Link
										to="/home"
										className="text-blue-500 hover:text-blue-700 underline"
								>
										Return Home
								</Link>
						</div>
				</div>
		);
}