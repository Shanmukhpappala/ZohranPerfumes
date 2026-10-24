import arabianOud from '../Images/Agarbattis/arabianoud.png'
import bakhoor from '../Images/Agarbattis/bakhoor.png'
import imperial from '../Images/Agarbattis/imperial.png'
import laban from '../Images/Agarbattis/laban.png'
import maghra from '../Images/Agarbattis/maghra.png'
import mukhallat from '../Images/Agarbattis/mukhallat.png'
import ruhE_gulab from '../Images/Agarbattis/ruhegulab.png'
import sandal from '../Images/Agarbattis/sandal.png'

const productDetails = [
	['arabian-oud-agarbatti', 'Arabian Oud', arabianOud],
	['bakhoor-agarbatti', 'Bakhoor', bakhoor],
	['imperial-agarbatti', 'Imperial', imperial],
	['laban-agarbatti', 'Laban', laban],
	['maghra-agarbatti', 'Maghra', maghra],
	['mukhallat-agarbatti', 'Mukhallat', mukhallat],
	['ruhe-gulab-agarbatti', 'Ruhe Gulab', ruhE_gulab],
	['sandal-agarbatti', 'Sandal', sandal],
]

export const agarbattis = productDetails.map(([slug, name, image], index) => ({
	id: index + 1,
	name,
	slug,
	type: 'own',
	category: 'Agarbattis',
	image,
	shortDescription: `${name} agarbatti for everyday fragrant rituals.`,
	description: `${name} is presented as part of the BARSHIP Agarbatti collection, for creating a considered fragrant atmosphere at home or during daily rituals.`,
	whatsappMessage: `Hi, I am interested in ${name} agarbatti.`,
}))

export function getAgarbatti(slug) {
	return agarbattis.find((product) => product.slug === slug)
}