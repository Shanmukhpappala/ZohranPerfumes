import bloominHeaven from '../Images/Perfuems/OwnBrands/bloominheaven.png'
import dehnulOud from '../Images/Perfuems/OwnBrands/dehnuloud.png'
import glacier from '../Images/Perfuems/OwnBrands/glacier.png'
import oudLavender from '../Images/Perfuems/OwnBrands/oudlavender.png'
import qahwatulMalakia from '../Images/Perfuems/OwnBrands/qahwatulmalakia.png'
import rosesVanila from '../Images/Perfuems/OwnBrands/rosesvanila.png'
import zohranBlueMajesty from '../Images/Perfuems/OwnBrands/zohranbluemajesty.png'

export const perfumes = [
	{
		id: 1,
		name: 'Bloomin Heaven',
		slug: 'bloomin-heaven',
		type: 'own',
		category: 'Perfumes',
		image: bloominHeaven,
		shortDescription: 'A graceful floral impression with a bright, uplifting spirit.',
		description: 'Bloomin Heaven evokes the ease of a garden in bloom. Its floral character feels open and graceful, with a polished softness that suits unhurried days and thoughtful occasions.',
		fragranceCharacter: ['Floral', 'Bright', 'Graceful'],
		ingredients: 'Specific ingredients and composition details have not been provided.',
		usage: 'Use according to the product label and your personal preference.',
		whatsappMessage: 'Hi, I am interested in Bloomin Heaven perfume.',
	},
	{
		id: 2,
		name: 'Dhenul Oud',
		slug: 'dhenul-oud',
		type: 'own',
		category: 'Perfumes',
		image: dehnulOud,
		shortDescription: 'A composed oud-inspired fragrance with a rich, warm impression.',
		description: 'Dhenul Oud is presented with the depth and poise associated with oud-inspired perfumery. A warm, measured character gives this expression a quietly confident presence without prescribing a specific note structure.',
		fragranceCharacter: ['Oud-inspired', 'Warm', 'Composed'],
		ingredients: 'Specific ingredients and composition details have not been provided.',
		usage: 'Use according to the product label and your personal preference.',
		whatsappMessage: 'Hi, I am interested in Dhenul Oud perfume.',
	},
	{
		id: 3,
		name: 'Glacier',
		slug: 'glacier',
		type: 'own',
		category: 'Perfumes',
		image: glacier,
		shortDescription: 'A crisp, clear fragrance impression with a cool sense of freshness.',
		description: 'Glacier suggests a cool and refreshing point of view. Its clean, airy character offers a composed alternative for those drawn to fragrances that feel light and clear in spirit.',
		fragranceCharacter: ['Fresh', 'Crisp', 'Airy'],
		ingredients: 'Specific ingredients and composition details have not been provided.',
		usage: 'Use according to the product label and your personal preference.',
		whatsappMessage: 'Hi, I am interested in Glacier perfume.',
	},
	{
		id: 4,
		name: 'Oud Lavender',
		slug: 'oud-lavender',
		type: 'own',
		category: 'Perfumes',
		image: oudLavender,
		shortDescription: 'A poised meeting of an oud-inspired depth and a calm aromatic character.',
		description: 'Oud Lavender brings together the contrasting ideas of depth and calm. The result is an assured, aromatic impression with a balanced character, described here as an overall style rather than a precise note breakdown.',
		fragranceCharacter: ['Oud-inspired', 'Aromatic', 'Balanced'],
		ingredients: 'Specific ingredients and composition details have not been provided.',
		usage: 'Use according to the product label and your personal preference.',
		whatsappMessage: 'Hi, I am interested in Oud Lavender perfume.',
	},
	{
		id: 5,
		name: 'Qahwatul Malakia',
		slug: 'qahwatul-malakia',
		type: 'own',
		category: 'Perfumes',
		image: qahwatulMalakia,
		shortDescription: 'A distinctive, enveloping fragrance with a warm and elegant mood.',
		description: 'Qahwatul Malakia has a rich, welcoming character and a sense of occasion. Its warm impression is balanced by a refined finish, creating a fragrance identity that feels expressive yet considered.',
		fragranceCharacter: ['Warm', 'Rich', 'Refined'],
		ingredients: 'Specific ingredients and composition details have not been provided.',
		usage: 'Use according to the product label and your personal preference.',
		whatsappMessage: 'Hi, I am interested in Qahwatul Malakia perfume.',
	},
	{
		id: 6,
		name: 'Roses Vanila',
		slug: 'roses-vanila',
		type: 'own',
		category: 'Perfumes',
		image: rosesVanila,
		shortDescription: 'A soft, romantic fragrance character with a smooth, comforting feel.',
		description: 'Roses Vanila suggests a romantic and softly enveloping fragrance style. Its graceful character feels smooth and comforting, while remaining polished enough for an evening or a personal everyday ritual.',
		fragranceCharacter: ['Soft', 'Romantic', 'Smooth'],
		ingredients: 'Specific ingredients and composition details have not been provided.',
		usage: 'Use according to the product label and your personal preference.',
		whatsappMessage: 'Hi, I am interested in Roses Vanila perfume.',
	},
	{
		id: 7,
		name: 'Zohran Blue Majesty',
		slug: 'zohran-blue-majesty',
		type: 'own',
		category: 'Perfumes',
		image: zohranBlueMajesty,
		shortDescription: 'A confident, contemporary fragrance with an elegant, expansive character.',
		description: 'Zohran Blue Majesty carries a confident and contemporary spirit. Its poised character feels expansive yet composed, offering a distinctive expression under the Zohran name.',
		fragranceCharacter: ['Contemporary', 'Confident', 'Elegant'],
		ingredients: 'Specific ingredients and composition details have not been provided.',
		usage: 'Use according to the product label and your personal preference.',
		whatsappMessage: 'Hi, I am interested in Zohran Blue Majesty perfume.',
	},
]

export function getPerfumesByType(type) {
	return perfumes.filter((product) => product.type === type)
}

export function getProductsByCategory(category) {
	return perfumes.filter((product) => product.category.toLowerCase() === category.toLowerCase())
}

export function getProduct(slug) {
	return perfumes.find((product) => product.slug === slug)
}
