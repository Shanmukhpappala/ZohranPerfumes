import { ArrowDown, ArrowRight, Award, MessageCircle } from 'lucide-react'
import { aboutData } from '../data/about'

const founder = aboutData.founder
const fragranceSteps = [
	'International travel',
	'Exposure to different cultures',
	'Passion for Oud, Attars & Bakhoor',
]
const values = ['Integrity', 'Quality', 'Customer Trust', 'Tradition', 'Authentic Fragrance Craftsmanship']
const journeyStages = [
	{ title: 'Education & Early Career', start: 0, end: 1 },
	{ title: 'Corporate Experience', start: 1, end: 2 },
	{ title: 'Entrepreneurship in Saudi Arabia', start: 2, end: 4 },
	{ title: 'Expansion into the UAE', start: 4, end: 6 },
	{ title: 'Journey Into Fragrance', start: 6, end: founder.profile.length },
]

function About() {
	const whatsappUrl = `https://wa.me/919999999999?text=${encodeURIComponent('Hi, I would like to know more about BARSHIP.')}`

	return (
		<main className="about-page">
			<section className="about-page-hero reveal-up">
				<p className="about-page-eyebrow">A story shaped by experience</p>
				<h1>ABOUT BARSHIP</h1>
				<p>{founder.tagline}</p>
				<span className="about-hero-rule" aria-hidden="true" />
			</section>

			<section className="founder-profile about-content-width" aria-labelledby="founder-name">
				<div className="founder-photo-wrap reveal-up">
					<img src={founder.image} alt={founder.name} className="founder-photo" />
				</div>
				<div className="founder-intro reveal-up">
					<p className="about-section-kicker">The founder</p>
					<h2 id="founder-name">{founder.name}</h2>
					<p className="founder-role">{founder.role}</p>
					<span className="about-short-rule" aria-hidden="true" />
					<p className="founder-lede">{founder.introduction}</p>
					<div className="founder-biography">
						{founder.biography.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
					</div>
				</div>
			</section>

			<section className="founder-journey-section">
				<div className="about-content-width">
					<header className="about-section-heading">
						<p className="about-section-kicker">A career across borders</p>
						<h2>Professional Journey</h2>
						<p>Each chapter brought a new perspective, from corporate operations to entrepreneurship and perfumery.</p>
					</header>
					<ol className="founder-timeline">
						{journeyStages.map((stage, index) => (
							<li className="founder-timeline-item" key={stage.title}>
								<span className="timeline-index">{String(index + 1).padStart(2, '0')}</span>
								<span className="timeline-marker" aria-hidden="true" />
								<div className="timeline-content">
									<h3>{stage.title}</h3>
									{founder.profile.slice(stage.start, stage.end).map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
								</div>
							</li>
						))}
					</ol>
				</div>
			</section>

			<section className="about-credentials about-content-width">
				<div className="credentials-column">
					<header className="about-section-heading">
						<p className="about-section-kicker">A record built over time</p>
						<h2>Achievements</h2>
					</header>
					<ul className="achievement-list">
						{founder.achievements.map((achievement) => (
							<li key={achievement}>
								<Award size={18} strokeWidth={1.4} aria-hidden="true" />
								<span>{achievement}</span>
							</li>
						))}
					</ul>
				</div>
				<div className="credentials-column expertise-column">
					<header className="about-section-heading">
						<p className="about-section-kicker">Experience and perspective</p>
						<h2>Areas of Expertise</h2>
					</header>
					<ul className="expertise-list">
						{founder.expertise.map((expertise) => (
							<li key={expertise}>{expertise}</li>
						))}
					</ul>
				</div>
			</section>

			<section className="fragrance-journey">
				<div className="fragrance-journey-inner about-content-width">
					<div className="fragrance-journey-copy">
						<p className="about-section-kicker">A new chapter</p>
						<h2>{founder.fragranceJourney.title}</h2>
						<p>{founder.fragranceJourney.description}</p>
					</div>
					<ol className="fragrance-route">
						{fragranceSteps.map((step, index) => (
							<li key={step}>
								<span>{String(index + 1).padStart(2, '0')}</span>
								<p>{step}</p>
								<ArrowDown size={18} strokeWidth={1.3} aria-hidden="true" />
							</li>
						))}
						<li className="fragrance-route-brand">
							<span>04</span>
							<p>{founder.fragranceJourney.brand}</p>
						</li>
					</ol>
				</div>
			</section>

			<section className="about-closing">
				<p className="about-section-kicker">Our foundation</p>
				<p className="closing-brand">{founder.fragranceJourney.brand}</p>
				<h2>{founder.fragranceJourney.closing}</h2>
				<ul className="closing-values">
					{values.map((value) => <li key={value}>{value}</li>)}
				</ul>
			</section>

			<section className="about-whatsapp-cta">
				<div>
					<p className="about-section-kicker">Continue the conversation</p>
					<h2>Discover the world of BARSHIP.</h2>
				</div>
				<a href={whatsappUrl} target="_blank" rel="noreferrer" aria-label="Contact BARSHIP on WhatsApp">
					<MessageCircle size={18} strokeWidth={1.6} aria-hidden="true" />
					<span>Connect on WhatsApp</span>
					<ArrowRight size={17} strokeWidth={1.5} aria-hidden="true" />
				</a>
			</section>
		</main>
	)
}

export default About
