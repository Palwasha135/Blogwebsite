import './App.css';
import { Routes,BrowserRouter,Route } from 'react-router-dom';
import Home from './Homepgs/Home'
import Aboutus from './Pages/Aboutus';
import ArticlesListPage from './Pages/ArticleListPage';
import ArticlePage from './Pages/ArticlePage';
import  Navbar from './Components/Navbar';
import Pricing from './Pages/Pricing';
import Premium_pro from './Pages/Premium_pro';
import Bot from './Components/Bot'
import Footer from './Components/Footer';


function App() {
  return (
    <div className="bg-customGray  min-w-min ">
<BrowserRouter>
<Navbar/>
<Bot/>

<Routes>

<Route path='/' element={<Home/>} />

<Route path='/about' element={<Aboutus/>} />
<Route path="/articles" element={<ArticlesListPage />} />
 <Route path="/articles/:articleId" element={<ArticlePage />} />
</Routes>
</BrowserRouter>
</div>
  );
}

export default App;