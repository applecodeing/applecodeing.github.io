import { useState } from 'react'
import { Navigation } from './components/Navigation'
import { HomePage } from './components/HomePage'
import { StoriesPage } from './components/StoriesPage'
import { AboutPage } from './components/AboutPage'

export default function App() {
  const [currentSection, setCurrentSection] = useState('home')

  const renderCurrentSection = () => {
    switch (currentSection) {
      case 'stories':
        return <StoriesPage />
      case 'about':
        return <AboutPage />
      default:
        return <HomePage onSectionChange={setCurrentSection} />
    }
  }

  return (
    <div className="min-h-screen bg-background">
      <Navigation 
        currentSection={currentSection} 
        onSectionChange={setCurrentSection}
      />
      <main>
        {renderCurrentSection()}
      </main>
    </div>
  )
}