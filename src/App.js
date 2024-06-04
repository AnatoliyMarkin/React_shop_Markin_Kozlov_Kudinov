import {BrowserRouter as Router} from 'react-router-dom';
import Header from './layout/Header';
import Footer from './layout/Footer';
import Content from './layout/Content';
import {CatalogContextProvider} from './catalog/Context';
import { BrowserRouter } from 'react-router-dom/cjs/react-router-dom.min';

export default function App() {
    return (
        <BrowserRouter basename="/React_shop_Markin_Kozlov_Kudinov">
            <Router>
                <Header />
                <CatalogContextProvider>
                    <Content />
                </CatalogContextProvider>
                <Footer />
            </Router>
        </BrowserRouter>
    );
}
