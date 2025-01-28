import {BrowserRouter as Router, Routes} from "react-router-dom";
import {route} from "./routes/path";
import BackToTopbuton from "./atoms/BackToTopbuton";
import Navbar from "./atoms/navbar";
import Footer from "./atoms/Footer";
import { cloneElement } from "react";

function App() {
	return (
		<Router>
			<Navbar />
			<Routes>
				{Object.values(route).map((routeElement, index) =>
					cloneElement(routeElement, {key: index}),
				)}
			</Routes>
			<BackToTopbuton />
			<Footer />
		</Router>
	);
}

export default App;