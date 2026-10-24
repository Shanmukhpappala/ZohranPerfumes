import { Link, useParams } from 'react-router-dom'
import { MessageCircle } from 'lucide-react'
import { getProduct } from '../data/perfumes'
import { getAttar } from '../data/attars'
import { getAgarbatti } from '../data/agarbattis'

function ProductDetails() {
	const { slug } = useParams()
	const product = getAttar(slug) || getProduct(slug) || getAgarbatti(slug)
	if (!product) return <main className="page-shell"><h1 className="page-title">Product not found</h1><Link to="/#collections" className="product-details-button">Back to collection</Link></main>
	const isAttar = product.category === 'Attars'
	const whatsappUrl = `https://wa.me/919999999999?text=${encodeURIComponent(product.whatsappMessage || `Hi, I'm interested in ${product.name}.`)}`
	return <main className="product-detail-page"><div className="product-detail-image"><img src={product.image} alt={product.name} /></div><div className="product-detail-copy"><p className="section-kicker">{isAttar ? 'BARSHIP Attars' : 'BARSHIP Fragrances'}</p><h1>{product.name}</h1><p>{product.description}</p>{product.fragranceCharacter?.length > 0 && <><h2>Fragrance character</h2><p>{product.fragranceCharacter.join(' · ')}</p></>}{product.ingredients && <><h2>Ingredients</h2><p>{product.ingredients}</p></>}{product.usage && <><h2>How to use</h2><p>{product.usage}</p></>}{isAttar && product.makingProcess && <><h2>Traditional making</h2><p>{product.makingProcess}</p></>}<div className="product-detail-actions"><a href={whatsappUrl} className="button-primary"><MessageCircle size={16} aria-hidden="true" /> Enquire on WhatsApp</a><Link to={`/collection/${product.category.toLowerCase()}`} className="button-secondary">Back to collection</Link></div></div></main>
}

export default ProductDetails
