import { useState } from 'react'
import './App.css'

function App() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <div className="App">
      {/* Header */}
      <header className="header">
        <div className="container">
          <div className="header-content">
            <div className="logo">
              <h1>Astana CartToner</h1>
            </div>
            <button 
              className="mobile-menu-btn"
              onClick={() => setMenuOpen(!menuOpen)}
            >
              ☰
            </button>
            <nav className={`nav ${menuOpen ? 'open' : ''}`}>
              <a href="#home">Главная</a>
              <a href="#services">Услуги</a>
              <a href="#benefits">Преимущества</a>
              <a href="#contact">Контакты</a>
            </nav>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section id="home" className="hero">
        <div className="container">
          <div className="hero-content">
            <h2 className="hero-title">Профессиональная заправка картриджей в Астане</h2>
            <p className="hero-subtitle">
              Качественная заправка лазерных и струйных картриджей с гарантией. 
              Быстро, недорого, профессионально!
            </p>
            <div className="hero-buttons">
              <a href="#contact" className="btn btn-primary">Заказать услугу</a>
              <a href="#services" className="btn btn-secondary">Наши услуги</a>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="services">
        <div className="container">
          <h2 className="section-title">Наши услуги</h2>
          <div className="services-grid">
            <div className="service-card">
              <div className="service-icon">🖨️</div>
              <h3>Заправка картриджей</h3>
              <p>Заправка лазерных и струйных картриджей всех моделей принтеров</p>
            </div>
            <div className="service-card">
              <div className="service-icon">🚚</div>
              <h3>Доставка</h3>
              <p>Бесплатная доставка по Астане при заказе от 5000 тг</p>
            </div>
            <div className="service-card">
              <div className="service-icon">⚡</div>
              <h3>Срочный сервис</h3>
              <p>Экспресс-заправка за 30 минут с доплатой</p>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section id="benefits" className="benefits">
        <div className="container">
          <h2 className="section-title">Почему выбирают нас</h2>
          <div className="benefits-grid">
            <div className="benefit-item">
              <div className="benefit-number">01</div>
              <h3>Опыт более 10 лет</h3>
              <p>Работаем на рынке с 2014 года</p>
            </div>
            <div className="benefit-item">
              <div className="benefit-number">02</div>
              <h3>Гарантия качества</h3>
              <p>100% гарантия на все виды работ</p>
            </div>
            <div className="benefit-item">
              <div className="benefit-number">03</div>
              <h3>Низкие цены</h3>
              <p>Лучшие цены в Астане</p>
            </div>
            <div className="benefit-item">
              <div className="benefit-number">04</div>
              <h3>Быстрое обслуживание</h3>
              <p>Заправка за 1-2 часа</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="contact">
        <div className="container">
          <h2 className="section-title">Свяжитесь с нами</h2>
          <div className="contact-content">
            <div className="contact-info">
              <div className="contact-item">
                <span className="contact-icon">📞</span>
                <div>
                  <h4>Телефон</h4>
                  <p>+7 747 672 7856</p>
                </div>
              </div>
              <div className="contact-item">
                <span className="contact-icon">📧</span>
                <div>
                  <h4>Email</h4>
                  <p>info@astanacarttoner.kz</p>
                </div>
              </div>
              <div className="contact-item">
                <span className="contact-icon">📍</span>
                <div>
                  <h4>Адрес</h4>
                  <p>г. Астана, ул. Абая 10/1</p>
                </div>
              </div>
              <div className="contact-item">
                <span className="contact-icon">🕐</span>
                <div>
                  <h4>Режим работы</h4>
                  <p>Пн-Пт: 9:00 - 19:00</p>
                  <p>Сб: 10:00 - 16:00</p>
                </div>
              </div>
            </div>
            <div className="contact-form">
              <a 
                href="https://wa.me/87071470445" 
                target="_blank" 
                rel="noopener noreferrer"
                className="btn btn-primary whatsapp-btn"
              >
                💬 Написать в WhatsApp
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="container">
          <div className="footer-content">
            <div className="footer-section">
              <h3>Astana CartToner</h3>
              <p>Профессиональная заправка картриджей в Астане</p>
            </div>
            <div className="footer-section">
              <h4>Навигация</h4>
              <a href="#home">Главная</a>
              <a href="#services">Услуги</a>
              <a href="#benefits">Преимущества</a>
              <a href="#contact">Контакты</a>
            </div>
            <div className="footer-section">
              <h4>Контакты</h4>
              <p>+7 747 672 7856</p>
              <p>info@astanacarttoner.kz</p>
            </div>
          </div>
          <div className="footer-bottom">
            <p>&copy; 2024 Astana CartToner. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App
