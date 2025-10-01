import { Link } from "react-router-dom";

export const Navbar = () => {

	return (
		<nav className="navbar navbar-light bg-light">
			<div className="container">
				<Link to="/">
					<span className="navbar-brand mb-0 h1">Starwars Blog</span>
				</Link>
				<div className="ml-auto">
					<div className="dropdown">
						<button className="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
							Favorites
						</button>
						<ul className="dropdown-menu">
							<li className="px-2 d-flex justify-content-between">Luke Skywalker <span><i className="fa-solid fa-trash-can"></i></span></li>
						</ul>
					</div>
				</div>
			</div>
		</nav>
	);
};