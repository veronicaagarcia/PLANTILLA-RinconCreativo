import { useState, useEffect } from 'react';
import { LogoComponent } from "../../components/LogoComponent"
import { FooterText } from "../../mock/footer";
import { homeText } from "../../mock/textViews/homeText";

export default function Footer() {
  const [isDesktop, setIsDesktop] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsDesktop(window.innerWidth >= 768);
    };
    
    // Set initial value
    handleResize();
    
    // Add event listener
    window.addEventListener('resize', handleResize);
    
    // Cleanup
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return(
    <>
      <style jsx global>{`
        .footer-dark {
          background-color: #1A1E2E !important;
          color: #F4F5F7 !important;
        }
        .footer-dark * {
          color: #F4F5F7 !important;
        }
        .footer-dark a {
          color: #F4F5F7 !important;
        }
        .footer-dark p {
          color: #F4F5F7 !important;
        }
        .footer-dark h2 {
          color: #F4F5F7 !important;
        }
      `}</style>
      
      <footer className="footer-dark" style={{
        backgroundColor: '#1A1E2E',
        color: '#F4F5F7',
        width: '100%',
        zIndex: 10,
        padding: '2rem 0'
      }}>
        <section className="footer-dark" style={{
          backgroundColor: '#1A1E2E',
          color: '#F4F5F7',
          width: '100%',
          maxWidth: '1200px',
          margin: '0 auto',
          padding: isDesktop ? '2rem' : '1rem',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: '2rem'
        }}>

          {/* LOGO Y TITULO */}
          <div style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: '0.5rem'
          }}>
            <LogoComponent 
              style={{
                width: isDesktop ? '3rem' : '2.5rem',
                height: isDesktop ? '3rem' : '2.5rem',
                borderRadius: '50%'
              }}
            />
            <h2 style={{
              color: '#F4F5F7',
              fontWeight: 'bold',
              fontSize: isDesktop ? '2rem' : '1.5rem',
              textAlign: 'center',
              fontFamily: 'Bebas Neue, sans-serif',
              margin: 0
            }}>
              {homeText.clientName}
            </h2>
          </div>

          {/* NAVEGACION */}
          <nav style={{
            display: 'flex',
            flexDirection: isDesktop ? 'row' : 'column',
            gap: isDesktop ? '2rem' : '1rem',
            alignItems: 'center'
          }}>
            <a 
              href="/" 
              className="footer-nav-link group relative px-3 py-2 rounded-lg"
              style={{
                color: '#F4F5F7',
                textDecoration: 'none',
                fontSize: '1rem',
                transition: 'all 0.3s ease',
                position: 'relative'
              }}
              onMouseEnter={(e) => {
                e.target.style.color = '#FFD700';
                e.target.style.transform = 'translateY(-2px)';
              }}
              onMouseLeave={(e) => {
                e.target.style.color = '#F4F5F7';
                e.target.style.transform = 'translateY(0)';
              }}
            >
              Inicio
            </a>
            <a 
              href="/nosotros" 
              className="footer-nav-link group relative px-3 py-2 rounded-lg"
              style={{
                color: '#F4F5F7',
                textDecoration: 'none',
                fontSize: '1rem',
                transition: 'all 0.3s ease',
                position: 'relative'
              }}
              onMouseEnter={(e) => {
                e.target.style.color = '#FFD700';
                e.target.style.transform = 'translateY(-2px)';
              }}
              onMouseLeave={(e) => {
                e.target.style.color = '#F4F5F7';
                e.target.style.transform = 'translateY(0)';
              }}
            >
              Nosotros
            </a>
            <a 
              href="/proyectos" 
              className="footer-nav-link group relative px-3 py-2 rounded-lg"
              style={{
                color: '#F4F5F7',
                textDecoration: 'none',
                fontSize: '1rem',
                transition: 'all 0.3s ease',
                position: 'relative'
              }}
              onMouseEnter={(e) => {
                e.target.style.color = '#FFD700';
                e.target.style.transform = 'translateY(-2px)';
              }}
              onMouseLeave={(e) => {
                e.target.style.color = '#F4F5F7';
                e.target.style.transform = 'translateY(0)';
              }}
            >
              Proyectos
            </a>
            <a 
              href="/servicios" 
              className="footer-nav-link group relative px-3 py-2 rounded-lg"
              style={{
                color: '#F4F5F7',
                textDecoration: 'none',
                fontSize: '1rem',
                transition: 'all 0.3s ease',
                position: 'relative'
              }}
              onMouseEnter={(e) => {
                e.target.style.color = '#FFD700';
                e.target.style.transform = 'translateY(-2px)';
              }}
              onMouseLeave={(e) => {
                e.target.style.color = '#F4F5F7';
                e.target.style.transform = 'translateY(0)';
              }}
            >
              Servicios
            </a>
            <a 
              href="/contacto" 
              className="footer-nav-link group relative px-3 py-2 rounded-lg"
              style={{
                color: '#F4F5F7',
                textDecoration: 'none',
                fontSize: '1rem',
                transition: 'all 0.3s ease',
                position: 'relative'
              }}
              onMouseEnter={(e) => {
                e.target.style.color = '#FFD700';
                e.target.style.transform = 'translateY(-2px)';
              }}
              onMouseLeave={(e) => {
                e.target.style.color = '#F4F5F7';
                e.target.style.transform = 'translateY(0)';
              }}
            >
              Contacto
            </a>
          </nav>

          {/* CONTACTO */}
          <div style={{
            display: 'flex',
            flexDirection: isDesktop ? 'row' : 'column',
            gap: isDesktop ? '2rem' : '0.5rem',
            alignItems: 'center',
            textAlign: 'center'
          }}>
            <p style={{
              color: '#F4F5F7',
              fontSize: '0.875rem',
              margin: 0
            }}>
              Email: {FooterText.email}
            </p>
            <p style={{
              color: '#F4F5F7',
              fontSize: '0.875rem',
              margin: 0
            }}>
              Teléfono: {FooterText.tel}
            </p>
            <p style={{
              color: '#F4F5F7',
              fontSize: '0.875rem',
              margin: 0
            }}>
              Dirección: {FooterText.text4}
            </p>
          </div>

          {/* REDES SOCIALES */}
          <div style={{
            display: 'flex',
            gap: '1.5rem',
            alignItems: 'center'
          }}>
            <a href={FooterText.link1} target="_blank" rel="noopener noreferrer">
              <img 
                src={FooterText.imgLink1} 
                alt={`Síguenos en ${FooterText.link1.includes('facebook') ? 'Facebook' : FooterText.link1.includes('instagram') ? 'Instagram' : FooterText.link1.includes('twitter') ? 'Twitter' : FooterText.link1.includes('linkedin') ? 'LinkedIn' : 'nuestra red social'} - ${homeText.clientName}`}
                style={{
                  width: '24px',
                  height: '24px',
                  transition: 'transform 0.3s ease'
                }}
                onMouseEnter={(e) => e.target.style.transform = 'scale(1.2)'}
                onMouseLeave={(e) => e.target.style.transform = 'scale(1)'}
              />
            </a>
            <a href={FooterText.link2} target="_blank" rel="noopener noreferrer">
              <img 
                src={FooterText.imgLink2} 
                alt={`Síguenos en ${FooterText.link2.includes('facebook') ? 'Facebook' : FooterText.link2.includes('instagram') ? 'Instagram' : FooterText.link2.includes('twitter') ? 'Twitter' : FooterText.link2.includes('linkedin') ? 'LinkedIn' : 'nuestra red social'} - ${homeText.clientName}`}
                style={{
                  width: '24px',
                  height: '24px',
                  transition: 'transform 0.3s ease'
                }}
                onMouseEnter={(e) => e.target.style.transform = 'scale(1.2)'}
                onMouseLeave={(e) => e.target.style.transform = 'scale(1)'}
              />
            </a>
            <a href={FooterText.link3} target="_blank" rel="noopener noreferrer">
              <img 
                src={FooterText.imgLink3} 
                alt={`Síguenos en ${FooterText.link3.includes('facebook') ? 'Facebook' : FooterText.link3.includes('instagram') ? 'Instagram' : FooterText.link3.includes('twitter') ? 'Twitter' : FooterText.link3.includes('linkedin') ? 'LinkedIn' : 'nuestra red social'} - ${homeText.clientName}`}
                style={{
                  width: '24px',
                  height: '24px',
                  transition: 'transform 0.3s ease'
                }}
                onMouseEnter={(e) => e.target.style.transform = 'scale(1.2)'}
                onMouseLeave={(e) => e.target.style.transform = 'scale(1)'}
              />
            </a>
          </div>

          {/* DIVIDER */}
          <div style={{
            width: '80%',
            height: '1px',
            backgroundColor: '#F4F5F7',
            opacity: 0.3
          }} />

          {/* COPYRIGHT */}
          <p style={{
            color: '#F4F5F7',
            fontSize: '0.875rem',
            textAlign: 'center',
            opacity: 0.8,
            margin: 0,
            fontWeight: 300
          }}>
            {FooterText.text5}
          </p>

        </section>
      </footer>
    </>
  )
}