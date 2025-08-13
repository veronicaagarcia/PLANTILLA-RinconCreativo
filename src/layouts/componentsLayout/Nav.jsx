import { useState, useEffect } from "react";

const navigationItems = [
  { href: "/", label: "Inicio", exact: true },
  { href: "/nosotros", label: "Nosotros", exact: false },
  { href: "/proyectos", label: "Proyectos", exact: false },
  { href: "/servicios", label: "Servicios", exact: false },
  { href: "/contacto", label: "Contacto", exact: false }
];

export default function Nav() {
    const [currentPath, setCurrentPath] = useState("");

  useEffect(() => {
    setCurrentPath(window.location.pathname);
  }, []);

  const isActive = (item) => {
    if (item.exact) {
      return currentPath === item.href;
    }
    return currentPath.includes(item.href);
  };

  return (
    <nav 
      className="flex flex-col md:flex-row gap-4 md:gap-6 lg:gap-8 items-center"
      role="navigation"
      aria-label="Navegación principal"
    >
      {navigationItems.map((item, index) => (
        <a
          key={item.href}
          href={item.href}
          className={`
            group relative px-4 py-2 md:px-6 md:py-3
            text-CBACKGROUND font-medium
            transition-all duration-300
            hover:text-COLOR3-dark focus:text-COLOR3-dark
            focus:outline-none focus:ring-2 focus:ring-COLOR3-dark focus:ring-offset-2 focus:ring-offset-COLOR1
            rounded-lg
            ${isActive(item) ? 'text-COLOR3-dark' : ''}
          `}
          aria-current={isActive(item) ? 'page' : undefined}
          tabIndex={0}
        >
          <span className="relative z-10">
            {item.label}
          </span>
          
          {/* Active indicator */}
          <span 
            className={`
              absolute bottom-0 left-1/2 transform -translate-x-1/2
              h-0.5 bg-COLOR3-dark transition-all duration-300
              ${isActive(item) ? 'w-full' : 'w-0 group-hover:w-full'}
            `}
            aria-hidden="true"
          />
        </a>
      ))}
    </nav>
  );
}