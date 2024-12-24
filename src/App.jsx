  
import Header from './components/Header';
import { Outlet } from 'react-router-dom';
import ThemeContextProvider, { BioContext } from './components/ThemeContext';

export default function App() {
  
  return<>
  
 <ThemeContextProvider>
 <Header/>
 <Outlet/>
</ThemeContextProvider>

</>
}
