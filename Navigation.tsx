import { useState } from 'react'
import { Button } from './ui/button'
import { Menu, X } from 'lucide-react'

interface NavigationProps {
  currentSection: string
  onSectionChange: (section: string) => void
}

export function Navigation({ currentSection, onSectionChange }: NavigationProps) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  const sections = [
    { key: 'home', label: '홈', description: '설화의 시작' },
    { key: 'stories', label: 'Stories', description: '이야기 속' },
    { key: 'about', label: 'About', description: '설화 소개' }
  ]

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-md border-b border-border">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <button
            onClick={() => onSectionChange('home')}
            className="text-2xl font-medium text-primary hover:text-primary/80 transition-colors"
          >
            Seolhwa
          </button>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-1">
            {sections.slice(1).map((section) => (
              <Button
                key={section.key}
                variant={currentSection === section.key ? "default" : "ghost"}
                size="sm"
                onClick={() => onSectionChange(section.key)}
                className="relative group"
              >
                {section.label}
                <span className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 text-xs text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                  {section.description}
                </span>
              </Button>
            ))}
          </div>

          {/* Mobile menu button */}
          <Button
            variant="ghost"
            size="sm"
            className="md:hidden"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X /> : <Menu />}
          </Button>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="md:hidden py-4 border-t border-border">
            <div className="space-y-2">
              {sections.slice(1).map((section) => (
                <button
                  key={section.key}
                  onClick={() => {
                    onSectionChange(section.key)
                    setIsMobileMenuOpen(false)
                  }}
                  className={`w-full text-left px-3 py-2 rounded-md text-sm transition-colors ${
                    currentSection === section.key
                      ? 'bg-primary text-primary-foreground'
                      : 'text-foreground hover:bg-accent'
                  }`}
                >
                  <div>{section.label}</div>
                  <div className="text-xs text-muted-foreground">{section.description}</div>
                </button>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}