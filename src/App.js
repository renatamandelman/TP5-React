import './App.css';
import AppRouter from './AppRouter';
import './css/style.css'
//import './css/responsive.css'
//import './css/carousel.css'
import { ShoppingCartProvider } from './Components/Context/cartContext';

function App() {
  return (
    <ShoppingCartProvider>
      <AppRouter/>
    </ShoppingCartProvider>
  );
}

export default App;
