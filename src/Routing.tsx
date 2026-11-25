import { BrowserRouter ,  Routes, Route } from 'react-router-dom';
import App from './App';
import Bio from './Bio';

const Routing = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<App />} />
                <Route path="/Bio" element={<Bio />} />
            </Routes>
        </BrowserRouter>
    );
};
export default Routing;