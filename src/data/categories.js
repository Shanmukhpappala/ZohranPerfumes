import heroPerfume from '../Images/hero-perfume.png'
import mainAttar from '../Images/Attars/mainattar.png'
import mainBakhoor from '../Images/Bakhhors/mainbakoor.png'
import mainAgarbatti from '../Images/Agarbattis/mainagarbatti.png'

export const categories = [
	{ slug: 'perfumes', name: 'Perfumes', description: 'Fine compositions with a lasting, unmistakable presence.', image: heroPerfume },
	{ slug: 'attars', name: 'Attars', description: 'Concentrated oils shaped by tradition and quiet ritual.', image: mainAttar },
	{ slug: 'bakhoor', name: 'Bakhoor', description: 'A fragrant incense ritual for rooms, gatherings and memory.', image: mainBakhoor },
	{ slug: 'agarbattis', name: 'Agarbattis', description: 'A familiar fragrant trail, prepared for everyday rituals.', image: mainAgarbatti },
]

export function getCategory(slug) {
	return categories.find((category) => category.slug === slug)
}
