import { Link } from "react-router-dom";
import useGlobalReducer from "../hooks/useGlobalReducer.jsx";

export const Navbar = () => {
	const { store, dispatch } = useGlobalReducer();

	return (
		<nav className="navbar navbar-light bg-light">
			<div className="container">
				<Link to="/">
					<img src="/images/sw_logo.svg" alt="Star Wars Logo" />
				</Link>
				<div className="ml-auto">
					<div className="dropdown">
						<button className="btn btn-danger dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
							Favorites <span className="badge bg-secondary">{store.favorites.length}</span>
						</button>
						<ul className="dropdown-menu">
							{store.favorites.map((favorite) =>
								<li
									key={favorite.name}
									className="dropdown-item px-2 d-flex justify-content-between">
									{favorite.name}
									<span onClick={(e) => {
										dispatch({
											type: "toggle_favorite",
											payload: {
												id: character.uid,
												name: character.properties.name,
												nature: "character"
											}
										})
									}}><i className="fa-solid fa-trash-can"></i></span>
								</li>
							)}
						</ul>
					</div>
				</div>
			</div>
		</nav>
	);
};