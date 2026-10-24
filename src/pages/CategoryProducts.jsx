import { Link, useParams, useSearchParams } from 'react-router-dom'
import { MessageCircle } from 'lucide-react'
import ProductGrid from '../components/ProductGrid'
import { getCategory } from '../data/categories'
import { getPerfumesByType, getProductsByCategory } from '../data/perfumes'
import { attars } from '../data/attars'
import { agarbattis } from '../data/agarbattis'

function CollectionTypeSelector({ category, value, onChange }) {
	const typeLabel = category.slug === 'perfumes' ? 'Brands' : category.name
	const types = [
		{ value: 'own', label: `Own ${typeLabel}` },
		{ value: 'international', label: `International ${typeLabel}` },
	]
	return <div className="collection-type-selector" role="group" aria-label={`${category.name} type`}>
		{types.map((type) => <button key={type.value} type="button" className={`collection-type-option${value === type.value ? ' is-active' : ''}`} aria-pressed={value === type.value} onClick={() => onChange(type.value)}>{type.label}</button>)}
	</div>
}

function EmptyCollection({ category, type }) {
	const isInternational = type === 'international'
	return <section className="empty-category collection-empty-state">
		<p className="section-kicker">{isInternational ? 'A considered edit' : 'Coming into focus'}</p>
		<h2>{isInternational ? `International ${category.name} are not listed yet.` : `The ${category.name} collection is being thoughtfully prepared.`}</h2>
		<p>{isInternational ? 'No confirmed international products are available in this collection yet. BARSHIP will share the edit when product details and imagery are ready.' : `BARSHIP is selecting the pieces for this chapter. Enquire with us to begin a conversation about ${category.name.toLowerCase()}.`}</p>
	</section>
}

function AttarCategory({ category, selectedType, onTypeChange }) {
	const process = attars[0].makingProcess
	const products = attars.filter((product) => product.type === selectedType)
	const whatsappUrl = `https://wa.me/919999999999?text=${encodeURIComponent('Hi, I would like to know more about BARSHIP Attars.')}`
	return <main className="attar-page">
		<section className="attar-hero">
			<div><p className="section-kicker">The BARSHIP Attar Edit</p><h1>Attars, held in oil and memory.</h1><p>Concentrated fragrance shaped by ritual, patience and the quiet intimacy of applying a scent close to the skin.</p></div>
			<img src={category.image} alt="Traditional BARSHIP attar presentation" />
		</section>
		<section className="attar-introduction"><p className="section-kicker">An introduction</p><h2>A fragrance that stays close.</h2><p>Attar is an oil-based fragrance experience with depth and presence. Each drop is made to unfold gradually, leaving a personal trail rather than filling a room all at once.</p></section>
		<section className="attar-products"><header className="section-heading"><div><p className="section-kicker">{products.length} expressions</p><h2>The Attar Collection</h2></div><p className="section-intro">Explore the character of each fragrance, then enquire directly with BARSHIP.</p></header><CollectionTypeSelector category={category} value={selectedType} onChange={onTypeChange} />{products.length ? <ProductGrid products={products} /> : <EmptyCollection category={category} type={selectedType} />}</section>
		<section className="attar-process"><div className="section-heading"><div><p className="section-kicker">A story of craft</p><h2>Traditional Attar Making</h2></div><p className="section-intro">{process}</p></div></section>
		<section className="attar-experience"><p className="section-kicker">The attar experience</p><h2>Small gestures. Lasting character.</h2><p>Choose attars for their concentrated format, their warmth on skin and the way a fragrance becomes distinctly yours over time.</p></section>
		<section className="attar-cta"><div><p className="section-kicker">Begin your ritual</p><h2>Find the fragrance that feels like yours.</h2></div><a href={whatsappUrl} className="button-primary"><MessageCircle size={17} aria-hidden="true" /> Enquire on WhatsApp</a></section>
	</main>
}

function CategoryProducts() {
	const { categorySlug } = useParams()
	const [searchParams, setSearchParams] = useSearchParams()
	const selectedType = searchParams.get('type') === 'international' ? 'international' : 'own'
	const changeType = (type) => setSearchParams({ type })
	const category = getCategory(categorySlug)
	if (!category) return <main className="page-shell"><h1 className="page-title">Collection not found</h1><Link to="/#collections" className="product-details-button">Back to collection</Link></main>
	if (category.slug === 'attars') return <AttarCategory category={category} selectedType={selectedType} onTypeChange={changeType} />
	if (category.slug === 'perfumes') {
		const products = getPerfumesByType(selectedType)
		return <main className="catalog-page"><header className="catalog-heading"><img className="catalog-cover" src={category.image} alt={`${category.name} collection`} /><div><p className="section-kicker">BARSHIP Collections</p><h1>{category.name}</h1><p>{category.description}</p></div></header><CollectionTypeSelector category={category} value={selectedType} onChange={changeType} />{products.length ? <ProductGrid products={products} /> : <EmptyCollection category={category} type={selectedType} />}</main>
	}
	const products = category.slug === 'agarbattis' ? agarbattis : getProductsByCategory(category.slug)
	return <main className="catalog-page"><header className="catalog-heading"><img className="catalog-cover" src={category.image} alt={`${category.name} collection`} /><div><p className="section-kicker">BARSHIP Collections</p><h1>{category.name}</h1><p>{category.description}</p></div></header>{products.length ? <ProductGrid products={products} /> : <EmptyCollection category={category} type="own" />}</main>
}

export default CategoryProducts
