import { useEffect, useId, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import styles from "./Header.module.css";

const NAV_LINKS = [
  { label: "Home", href: "/", pathMatch: "/" },
  { label: "About", href: "/about", pathMatch: "/about" },
  { label: "Services", href: "/services", pathMatch: "/services" },
  { label: "Properties", href: "/properties", pathMatch: "/properties" },
  { label: "Contact", href: "/contact", pathMatch: "/contact" },
];

function desktopNavLinkClass(active) {
  return active ? `${styles.navLink} ${styles.navLinkActive}` : styles.navLink;
}

function mobileNavLinkClass(active) {
  return active
    ? `${styles.mobileNavLink} ${styles.mobileNavLinkActive}`
    : styles.mobileNavLink;
}

export default function Header() {
  const router = useRouter();
  const [mobileOpen, setMobileOpen] = useState(false);
  const panelId = useId();

  const path = router.pathname;

  useEffect(() => {
    if (!mobileOpen) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = prev;
    };
  }, [mobileOpen]);

  useEffect(() => {
    const onRoute = () => setMobileOpen(false);
    router.events.on("routeChangeComplete", onRoute);
    return () => router.events.off("routeChangeComplete", onRoute);
  }, [router.events]);

  useEffect(() => {
    if (!mobileOpen) return;
    const onKey = (e) => {
      if (e.key === "Escape") setMobileOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [mobileOpen]);

  return (
    <nav className={styles.navRoot} aria-label="Primary">
      <div className={styles.navInner}>
        <Link
          href="/"
          className={styles.logo}
          onClick={() => setMobileOpen(false)}
        >
          Architectural Curator
        </Link>

        <div className={styles.desktopNav}>
          {NAV_LINKS.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={desktopNavLinkClass(path === item.pathMatch)}
            >
              {item.label}
            </Link>
          ))}
        </div>

        <div className={styles.actions}>
          <Link href="/contact" className={styles.scheduleCtaDesktop}>
            Schedule Tour
          </Link>
          <button
            type="button"
            className={styles.menuButton}
            aria-expanded={mobileOpen}
            aria-controls={panelId}
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
            onClick={() => setMobileOpen((o) => !o)}
          >
            <span className={styles.menuIcon} aria-hidden="true">
              {mobileOpen ? "close" : "menu"}
            </span>
          </button>
        </div>
      </div>

      {mobileOpen ? (
        <button
          type="button"
          className={styles.backdrop}
          aria-label="Close menu"
          tabIndex={-1}
          onClick={() => setMobileOpen(false)}
        />
      ) : null}

      <div
        id={panelId}
        className={`${styles.mobilePanel} ${
          mobileOpen ? styles.mobilePanelOpen : ""
        }`}
      >
        <nav className={styles.mobileNav} aria-label="Main">
          {NAV_LINKS.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={mobileNavLinkClass(path === item.pathMatch)}
              onClick={() => setMobileOpen(false)}
            >
              {item.label}
            </Link>
          ))}
          <Link
            href="/contact"
            className={styles.mobileScheduleCta}
            onClick={() => setMobileOpen(false)}
          >
            Schedule Tour
          </Link>
        </nav>
      </div>
    </nav>
  );
}
