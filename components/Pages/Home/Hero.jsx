// import { useId } from "react";
// import styles from "./Hero.module.css";

// export default function Hero() {
//   const headingId = useId();

//   function handleSearch(e) {
//     e.preventDefault();
//   }

//   return (
//     <section id="hero" className={styles.hero} aria-labelledby={headingId}>
//       <div className={styles.bg} aria-hidden />
//       <div className={styles.overlay} aria-hidden />
//       <div className={styles.inner}>
//         <div className={styles.copy}>
//           <h1 className={styles.headline} id={headingId}>
//             <span className={styles.headlineLine}>Curating Spaces</span>
//             <span className={styles.headlineLine}>For Extraordinary</span>
//             <span className={styles.headlineLine}>Living.</span>
//           </h1>
//           <p className={styles.subhead}>
//             Discover a handpicked collection of significant luxury homes and
//             estates—from coastal villas and mountain retreats to glass-walled
//             city penthouses.
//           </p>
//         </div>

//         <form className={styles.searchForm} onSubmit={handleSearch}>
//           <div className={styles.searchBar}>
//             <div className={styles.field}>
//               <div className={styles.fieldHeader}>
//                 <span className={styles.materialIcon} aria-hidden>
//                   location_on
//                 </span>
//                 <span className={styles.fieldLabel}>Location</span>
//               </div>
//               <input
//                 type="text"
//                 name="location"
//                 className={styles.fieldInput}
//                 placeholder="Where would you like to live?"
//                 autoComplete="off"
//               />
//             </div>

//             <div className={styles.field}>
//               <div className={styles.fieldHeader}>
//                 <span className={styles.materialIcon} aria-hidden>
//                   payments
//                 </span>
//                 <span className={styles.fieldLabel}>Price range</span>
//               </div>
//               <select
//                 name="price"
//                 className={styles.fieldSelect}
//                 defaultValue="1m-5m"
//               >
//                 <option value="1m-5m">$1M - $5M</option>
//                 <option value="5m-10m">$5M - $10M</option>
//                 <option value="10m+">$10M+</option>
//               </select>
//             </div>

//             <div className={styles.field}>
//               <div className={styles.fieldHeader}>
//                 <span className={styles.materialIcon} aria-hidden>
//                   apartment
//                 </span>
//                 <span className={styles.fieldLabel}>Property type</span>
//               </div>
//               <select
//                 name="type"
//                 className={styles.fieldSelect}
//                 defaultValue="penthouse"
//               >
//                 <option value="penthouse">Penthouse</option>
//                 <option value="villa">Villa</option>
//                 <option value="estate">Estate</option>
//                 <option value="townhouse">Townhouse</option>
//               </select>
//             </div>

//             <button type="submit" className={styles.searchButton}>
//               <span className={styles.searchButtonIcon} aria-hidden>
//                 search
//               </span>
//               Search listings
//             </button>
//           </div>
//         </form>
//       </div>
//     </section>
//   );
// }
import React from "react";
import styles from "./Hero.module.css";

export default function Hero() {
  return (
    <section className={styles.section}>
      {/* Background */}
      <div className={styles.bg}></div>
      <div className={styles.overlay}></div>

      {/* Content */}
      <div className={styles.content}>
        <h1 className={styles.maskText}>Luxury Homes</h1>
        <p className={styles.subtitle}>
          Curating Spaces For Extraordinary Living. Discover a handpicked
          collection of significant luxury homes and estates—from coastal villas
          and mountain retreats to glass-walled city penthouses.
        </p>
        <a href="/about" className={styles.cta}>
          Explore About
        </a>
      </div>
    </section>
  );
}
