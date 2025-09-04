import { AboutSection } from "../components/AboutSection"
import { HeroSection } from "../components/HeroSection"
import { Navbar } from "../components/Navbar"
import { StarBackground } from "../components/StarBackground"
import { ThemeToggle } from "../components/ThemeToggle"

export const Home = () => {
  return <div className='min-h-screen bg-background text-foreground overflow-x-hidden'>

    {/* Theme toggle */}
    <ThemeToggle />

    {/* Background Effects */}
    <StarBackground/>

    {/* Navbar */}
    <Navbar />

    {/* Main Content */}
    <main>
      {/* Hero Section */}
       <HeroSection />
      {/* About Section */}
      <AboutSection />
      {/* Skills Section */}
      {/* Projects Section */}
      {/* Contact Section */}
    </main>

    {/* Footer */}
  </div>
  
}