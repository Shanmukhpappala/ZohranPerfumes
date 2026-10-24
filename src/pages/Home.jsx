import AboutPreview from '../components/AboutPreview'
import CollectionPreview from '../components/CollectionPreview'
import Contact from '../components/Contact'
import Hero from '../components/Hero'
import Highlights from '../components/Highlights'
import SpecialOudPreview from '../components/SpecialOudPreview'
import VideoSection from '../components/VideoSection'

function Home() {
  return <>
    <Hero />
    <CollectionPreview />
    <Highlights />
    <SpecialOudPreview />
    <AboutPreview />
    <VideoSection />
    <Contact />
  </>
}

export default Home
