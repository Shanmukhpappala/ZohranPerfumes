import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Footer from './components/Footer'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import CategoryProducts from './pages/CategoryProducts'
import ProductDetails from './pages/ProductDetails'
import NotFound from './pages/NotFound'
import About from './pages/About'
import InternationalBrands from './pages/InternationalBrands'
import './App.css'

function PlaceholderPage({ eyebrow, title }) {
  return (
    <main className="page-shell">
      <p className="page-eyebrow">{eyebrow}</p>
      <h1 className="page-title">{title}</h1>
      <p className="page-copy">This page is being thoughtfully prepared.</p>
    </main>
  )
}

function App() {
  return (
    <BrowserRouter>
      <div className="flex min-h-screen flex-col bg-[#fffaf0] text-[#3d1020]">
        <Navbar />
        <div className="flex-1">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/collection/:categorySlug" element={<CategoryProducts />} />
            <Route path="/international-brands" element={<InternationalBrands />} />
            <Route path="/product/:slug" element={<ProductDetails />} />
            <Route path="/special-oud" element={<PlaceholderPage eyebrow="BARSHIP Fragrances" title="Special Oud" />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<PlaceholderPage eyebrow="BARSHIP Fragrances" title="Contact" />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </BrowserRouter>
  )
}

export default App
