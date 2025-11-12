'use client'

import { useState, useRef } from 'react'
import styles from './page.module.css'

export default function Home() {
  const [dragActive, setDragActive] = useState(false)
  const [selectedFile, setSelectedFile] = useState<File | null>(null)
  const [prompt, setPrompt] = useState('')
  const fileInputRef = useRef<HTMLInputElement>(null)

  const handleDrag = (e: React.DragEvent) => {
    e.preventDefault()
    e.stopPropagation()
    if (e.type === "dragenter" || e.type === "dragover") {
      setDragActive(true)
    } else if (e.type === "dragleave") {
      setDragActive(false)
    }
  }

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault()
    e.stopPropagation()
    setDragActive(false)

    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      setSelectedFile(e.dataTransfer.files[0])
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault()
    if (e.target.files && e.target.files[0]) {
      setSelectedFile(e.target.files[0])
    }
  }

  const handleButtonClick = () => {
    fileInputRef.current?.click()
  }

  const handleSubmit = () => {
    if (selectedFile && prompt) {
      alert(`Bildbearbeitung gestartet!\nDatei: ${selectedFile.name}\nPrompt: ${prompt}`)
    }
  }

  return (
    <div className={styles.container}>
      {/* Header */}
      <header className={styles.header}>
        <div className={styles.headerContent}>
          <div className={styles.logo}>
            <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
              <rect width="40" height="40" rx="8" fill="url(#gradient)" />
              <path d="M20 10 L30 20 L20 30 L10 20 Z" fill="white" opacity="0.9" />
              <defs>
                <linearGradient id="gradient" x1="0" y1="0" x2="40" y2="40">
                  <stop offset="0%" stopColor="#667eea" />
                  <stop offset="100%" stopColor="#764ba2" />
                </linearGradient>
              </defs>
            </svg>
            <span>AI Bildwerk</span>
          </div>
          <nav className={styles.nav}>
            <a href="#features">Features</a>
            <a href="#upload">Ausprobieren</a>
            <a href="#examples">Beispiele</a>
            <a href="#contact">Kontakt</a>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className={styles.hero}>
        <div className={styles.heroContent}>
          <h1 className={styles.heroTitle}>
            Revolutionäre KI-Bildbearbeitung
          </h1>
          <p className={styles.heroSubtitle}>
            Blitzschnell, kreativ, intuitiv
          </p>
          <p className={styles.heroDescription}>
            Verwandeln Sie Ihre Bilder mit der Kraft künstlicher Intelligenz.
            Keine komplizierten Werkzeuge – einfach beschreiben, was Sie wollen.
          </p>
          <a href="#upload" className={styles.ctaButton}>
            Jetzt kostenlos starten
          </a>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className={styles.features}>
        <div className={styles.sectionContent}>
          <h2 className={styles.sectionTitle}>Wie funktioniert es?</h2>
          <div className={styles.featureGrid}>
            <div className={styles.featureCard}>
              <div className={styles.featureIcon}>🎨</div>
              <h3>Automatische Retusche</h3>
              <p>
                Unsere KI erkennt automatisch Gesichter und optimiert Helligkeit,
                Kontrast und Farben für perfekte Ergebnisse.
              </p>
            </div>
            <div className={styles.featureCard}>
              <div className={styles.featureIcon}>✨</div>
              <h3>Kreative Veränderungen</h3>
              <p>
                Fügen Sie neue Elemente hinzu, ändern Sie Stile oder verwandeln
                Sie Ihre Fotos mit natürlicher Sprache.
              </p>
            </div>
            <div className={styles.featureCard}>
              <div className={styles.featureIcon}>🌅</div>
              <h3>Hintergrundaustausch</h3>
              <p>
                Entfernen oder ersetzen Sie Hintergründe in Sekunden.
                Von professionellen Studios bis zu exotischen Orten.
              </p>
            </div>
            <div className={styles.featureCard}>
              <div className={styles.featureIcon}>⚡</div>
              <h3>Blitzschnell</h3>
              <p>
                Dank modernster KI-Technologie erhalten Sie Ergebnisse
                in wenigen Sekunden – nicht Minuten oder Stunden.
              </p>
            </div>
            <div className={styles.featureCard}>
              <div className={styles.featureIcon}>🎯</div>
              <h3>Präzise Ergebnisse</h3>
              <p>
                Unsere fortschrittlichen Algorithmen liefern fotorealistische
                Ergebnisse, die natürlich aussehen.
              </p>
            </div>
            <div className={styles.featureCard}>
              <div className={styles.featureIcon}>🔒</div>
              <h3>Sicher & Privat</h3>
              <p>
                Ihre Bilder werden verschlüsselt übertragen und nach der
                Bearbeitung automatisch gelöscht.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Upload Section */}
      <section id="upload" className={styles.uploadSection}>
        <div className={styles.sectionContent}>
          <h2 className={styles.sectionTitle}>Probieren Sie es jetzt aus</h2>
          <p className={styles.sectionDescription}>
            Laden Sie ein Bild hoch und beschreiben Sie, was Sie ändern möchten
          </p>

          <div className={styles.uploadContainer}>
            <div
              className={`${styles.dropZone} ${dragActive ? styles.dragActive : ''} ${selectedFile ? styles.hasFile : ''}`}
              onDragEnter={handleDrag}
              onDragLeave={handleDrag}
              onDragOver={handleDrag}
              onDrop={handleDrop}
            >
              <input
                ref={fileInputRef}
                type="file"
                accept="image/*"
                onChange={handleChange}
                className={styles.fileInput}
              />

              {selectedFile ? (
                <div className={styles.fileInfo}>
                  <div className={styles.fileIcon}>📷</div>
                  <p className={styles.fileName}>{selectedFile.name}</p>
                  <button
                    className={styles.changeFileButton}
                    onClick={handleButtonClick}
                  >
                    Anderes Bild wählen
                  </button>
                </div>
              ) : (
                <>
                  <div className={styles.uploadIcon}>📁</div>
                  <p className={styles.uploadText}>
                    Bild hierher ziehen oder klicken zum Auswählen
                  </p>
                  <button
                    className={styles.uploadButton}
                    onClick={handleButtonClick}
                  >
                    Bild hochladen
                  </button>
                </>
              )}
            </div>

            <div className={styles.promptContainer}>
              <label className={styles.promptLabel}>
                Was möchten Sie mit Ihrem Bild machen?
              </label>
              <textarea
                className={styles.promptInput}
                placeholder='z.B. "Füge einen Sonnenuntergang hinzu", "Entferne den Hintergrund", "Mache das Bild heller und kontrastreicher"'
                value={prompt}
                onChange={(e) => setPrompt(e.target.value)}
                rows={4}
              />
              <button
                className={`${styles.submitButton} ${(!selectedFile || !prompt) ? styles.disabled : ''}`}
                onClick={handleSubmit}
                disabled={!selectedFile || !prompt}
              >
                Bearbeitung starten
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Examples Section */}
      <section id="examples" className={styles.examples}>
        <div className={styles.sectionContent}>
          <h2 className={styles.sectionTitle}>Beispiele aus der Praxis</h2>
          <p className={styles.sectionDescription}>
            Sehen Sie, was mit KI-Bildbearbeitung möglich ist
          </p>

          <div className={styles.exampleGrid}>
            <div className={styles.exampleCard}>
              <div className={styles.exampleImages}>
                <div className={styles.exampleImage}>
                  <div className={styles.placeholderBefore}>
                    <div className={styles.placeholderContent}>
                      <span className={styles.placeholderLabel}>Vorher</span>
                      <div className={styles.placeholderIcon}>🌆</div>
                    </div>
                  </div>
                </div>
                <div className={styles.arrow}>→</div>
                <div className={styles.exampleImage}>
                  <div className={styles.placeholderAfter}>
                    <div className={styles.placeholderContent}>
                      <span className={styles.placeholderLabel}>Nachher</span>
                      <div className={styles.placeholderIcon}>🌅</div>
                    </div>
                  </div>
                </div>
              </div>
              <p className={styles.examplePrompt}>
                "Füge einen dramatischen Sonnenuntergang hinzu"
              </p>
            </div>

            <div className={styles.exampleCard}>
              <div className={styles.exampleImages}>
                <div className={styles.exampleImage}>
                  <div className={styles.placeholderBefore}>
                    <div className={styles.placeholderContent}>
                      <span className={styles.placeholderLabel}>Vorher</span>
                      <div className={styles.placeholderIcon}>👤</div>
                    </div>
                  </div>
                </div>
                <div className={styles.arrow}>→</div>
                <div className={styles.exampleImage}>
                  <div className={styles.placeholderAfter}>
                    <div className={styles.placeholderContent}>
                      <span className={styles.placeholderLabel}>Nachher</span>
                      <div className={styles.placeholderIcon}>✨</div>
                    </div>
                  </div>
                </div>
              </div>
              <p className={styles.examplePrompt}>
                "Entferne den Hintergrund komplett"
              </p>
            </div>

            <div className={styles.exampleCard}>
              <div className={styles.exampleImages}>
                <div className={styles.exampleImage}>
                  <div className={styles.placeholderBefore}>
                    <div className={styles.placeholderContent}>
                      <span className={styles.placeholderLabel}>Vorher</span>
                      <div className={styles.placeholderIcon}>🏙️</div>
                    </div>
                  </div>
                </div>
                <div className={styles.arrow}>→</div>
                <div className={styles.exampleImage}>
                  <div className={styles.placeholderAfter}>
                    <div className={styles.placeholderContent}>
                      <span className={styles.placeholderLabel}>Nachher</span>
                      <div className={styles.placeholderIcon}>🏖️</div>
                    </div>
                  </div>
                </div>
              </div>
              <p className={styles.examplePrompt}>
                "Ersetze den Hintergrund mit einem tropischen Strand"
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className={styles.ctaSection}>
        <div className={styles.ctaSectionContent}>
          <h2 className={styles.ctaTitle}>Bereit, Ihre Bilder zu transformieren?</h2>
          <p className={styles.ctaDescription}>
            Starten Sie jetzt kostenlos und erleben Sie die Zukunft der Bildbearbeitung
          </p>
          <a href="#upload" className={styles.ctaButtonLarge}>
            Jetzt starten
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer id="contact" className={styles.footer}>
        <div className={styles.footerContent}>
          <div className={styles.footerSection}>
            <div className={styles.footerLogo}>
              <svg width="32" height="32" viewBox="0 0 40 40" fill="none">
                <rect width="40" height="40" rx="8" fill="url(#gradient2)" />
                <path d="M20 10 L30 20 L20 30 L10 20 Z" fill="white" opacity="0.9" />
                <defs>
                  <linearGradient id="gradient2" x1="0" y1="0" x2="40" y2="40">
                    <stop offset="0%" stopColor="#667eea" />
                    <stop offset="100%" stopColor="#764ba2" />
                  </linearGradient>
                </defs>
              </svg>
              <span>AI Bildwerk</span>
            </div>
            <p className={styles.footerDescription}>
              Revolutionäre KI-Bildbearbeitung für kreative Köpfe
            </p>
          </div>

          <div className={styles.footerSection}>
            <h4>Kontakt</h4>
            <p>Email: info@aibildwerk.de</p>
            <p>Tel: +49 (0) 123 456789</p>
          </div>

          <div className={styles.footerSection}>
            <h4>Rechtliches</h4>
            <a href="#datenschutz">Datenschutzerklärung</a>
            <a href="#impressum">Impressum</a>
            <a href="#agb">AGB</a>
          </div>

          <div className={styles.footerSection}>
            <h4>Folgen Sie uns</h4>
            <div className={styles.socialLinks}>
              <a href="#twitter">Twitter</a>
              <a href="#linkedin">LinkedIn</a>
              <a href="#instagram">Instagram</a>
            </div>
          </div>
        </div>

        <div className={styles.footerBottom}>
          <p className={styles.datenschutzNotice}>
            🔒 Ihre Daten sind sicher. Wir verwenden Verschlüsselung und löschen hochgeladene Bilder automatisch nach 24 Stunden.
          </p>
          <p className={styles.copyright}>
            © 2025 AI Bildwerk. Alle Rechte vorbehalten.
          </p>
        </div>
      </footer>
    </div>
  )
}
