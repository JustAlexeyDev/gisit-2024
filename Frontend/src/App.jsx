import { Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import NotFound from "./Pages/NotFound";
import MapPage from "./Pages/MapPage";
const App = () => {
    return(
        <div>
            <Routes>
                <Route path="/*" element={<NotFound />}/>
                <Route path="/" element={<Home />}/>
                <Route path="/Home" element={<Home />}/>
                <Route path="/MapPage" element={<MapPage />}/>
            </Routes>
        </div>
    );
}
export default App;