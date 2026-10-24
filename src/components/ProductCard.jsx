import { Link } from 'react-router-dom'
import { MessageCircle } from 'lucide-react'

function ProductCard({ product }) {
	const slug = product.slug || product.id
	const whatsappUrl = `https://wa.me/919999999999?text=${encodeURIComponent(product.whatsappMessage || `Hi, I'm interested in ${product.name}.`)}`
	return (
		<article className="product-card">
			<Link to={`/product/${slug}`} className="product-image-link"><img src={product.image} alt={product.name} className="product-image" /></Link>
			<div className="product-card-body"><h2>{product.name}</h2><p>{product.shortDescription || product.description}</p>{product.fragranceCharacter && <p className="product-character">{product.fragranceCharacter.join(' · ')}</p>}<div className="product-actions"><Link to={`/product/${slug}`} className="product-details-button">View Details</Link><a href={whatsappUrl} className="product-whatsapp" aria-label={`Ask about ${product.name} on WhatsApp`}><MessageCircle size={16} aria-hidden="true" /></a></div></div>
		</article>
	)
}

export default ProductCard
