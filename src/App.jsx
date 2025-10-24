
import Hero from './sections/Hero';
import Banner from './sections/Banner';
import Section3 from './sections/Section3';
import './App.css'
import { Box } from '@mui/material';
import { Route, Routes } from 'react-router-dom';
import CategoriesNavigation from './component/CategoriesNavigation';
import Men from './sections/categories/Men';
import Womans from './sections/categories/Womans';
import Footer from './component/Footers';
function App() {

  return (
    <Box sx={{ overflow: 'hidden' }}>
      <Hero />
      <Banner />
      <Section3 />
      <CategoriesNavigation />
      <Routes>
        <Route path="/" element={<Men />} />
        <Route path="/womans" element={<Womans />} />
        <Route path="*" element={<h1>404: Page Not Found</h1>} />
      </Routes>
      <Footer />
    </Box>
  );

}

export default App
