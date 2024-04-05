import { Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import NotFound from "./Pages/NotFound";
const App = () => {
    return(
        <div>
            <Routes>
                <Route path="/*" element={<NotFound />}/>
                <Route path="/" element={<Home />}/>
                <Route path="/Home" element={<Home />}/>
            </Routes>
        </div>
    );
}
export default App;