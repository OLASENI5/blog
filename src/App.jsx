import {Routes, Route} from "react-router-dom";

import './App.css';
import ArticleDetailPage from "./pages/articleDetail/ArticleDetailPage";
import HomePage from './pages/Home/HomePage';

function App() {
    return (
        <div className='App font-opensans'>
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/blog/:id" element={<ArticleDetailPage />} />
            </Routes>
        </div>
    );
}

export default App;
