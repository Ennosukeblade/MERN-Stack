import { Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./components/Home";
import DisplayParam from "./components/DisplayParam";
import WordColor from "./components/WordColor";

function App() {
    return (
        <div className="App">
            <Routes>
                <Route path="/home" element={<Home />} />
                <Route path="/:element" element={<DisplayParam />} />
                <Route
                    path="/:word/:txtColor/:bgColor"
                    element={<WordColor />}
                />
            </Routes>
        </div>
    );
}

export default App;
