import AboutPage from "./components/AboutPage/AboutPage";
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
		</div>
	);
}

export default App;
