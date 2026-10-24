const brands = ['Amouage', 'Creed', 'Tom Ford', 'Jo Malone']

function InternationalBrands() {
	return <main className="catalog-page international-page"><header className="catalog-heading"><p className="section-kicker">Curated beyond borders</p><h1>International Brands</h1><p>Explore a considered edit of renowned houses, selected for the BARSHIP collection.</p></header><div className="brand-list">{brands.map((brand) => <div className="brand-list-item" key={brand}><span>{brand}</span><span aria-hidden="true">↗</span></div>)}</div></main>
}

export default InternationalBrands
