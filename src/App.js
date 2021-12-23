import AboutPage from "./components/AboutPage/AboutPage";
import CardSet from "./components/CardSet/CardSet";
import Contact from "./components/Contact/Contact";
import ImageSet from "./components/ImageSet/ImageSet";
import StartPage from "./components/StartPage/StartPage";

function App() {
	return (
		<div className="App">
			<StartPage />
			<AboutPage />
			<Contact />
			<ImageSet />
			<CardSet />
		</div>
	);
}

export default App;
