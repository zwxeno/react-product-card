import './App.css';
import ProductCard from "./components/ProductCard/ProductCard";
import WelcomeImage from "./components/WelcomeImage/WelcomeImage";

export const firstName = "wassim";

function App() {
    return (
        <div className="App">
            <WelcomeImage/>
            <div style={{display: 'flex', flexDirection: 'row', flexWrap: 'wrap'}}>
                <ProductCard/>
                <ProductCard/>
            </div>
        </div>
    );
}

export default App;
