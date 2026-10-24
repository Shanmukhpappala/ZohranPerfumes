import { Link } from 'react-router-dom'
import { categories } from '../data/categories'

function CollectionPreview() {
	return (
		<section className="collection-preview" id="collections">
			<div className="section-heading">
				<div><p className="section-kicker">The BARSHIP edit</p><h2>Collections</h2></div>
				<p className="section-intro">Distinct expressions of fragrance, each selected to become part of your own ritual.</p>
			</div>
			<div className="collection-grid">
				{categories.map((category, index) => {
					const isDirectCollection = category.slug === 'bakhoor' || category.slug === 'agarbattis'
					const Card = isDirectCollection ? Link : 'article'
					return <Card className="collection-card" key={category.slug} {...(isDirectCollection ? { to: `/collection/${category.slug}` } : {})}>
						<div className="collection-image-wrap"><img src={category.image} alt="" className="collection-image" /></div>
						<div className="collection-card-body"><p className="card-index">0{index + 1}</p><h3>{category.name}</h3><p>{category.description}</p>{!isDirectCollection && <div className="collection-actions"><Link to={`/collection/${category.slug}?type=own`} className="collection-action collection-action-own">Own {category.slug === 'perfumes' ? 'Brands' : category.name}</Link>{category.slug === 'perfumes' || category.slug === 'attars' ? <Link to={`/collection/${category.slug}?type=international`} className="collection-action collection-action-international">International {category.slug === 'perfumes' ? 'Brands' : category.name}</Link> : <Link to="/international-brands" className="collection-action collection-action-international">International Products</Link>}</div>}</div>
						</Card>
				})}
			</div>
		</section>
	)
}

export default CollectionPreview
