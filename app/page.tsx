// import AboutMe from './components/AboutMe'
import About from './about/page'
import Experience from './experience/page'
import Introduction from './components/Introduction'
import Projects from './components/Projects'

export default function Home() {
  return (
    <>
      <Introduction />
      {/* <AboutMe /> */} 
      <About/>
      <Experience/>

      <Projects />
    </>
  )
}
