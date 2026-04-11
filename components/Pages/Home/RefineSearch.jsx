"use client";

import { useCallback, useMemo, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
// import { useRouter } from "next/router";
import { useProperties } from "@/context/PropertiesContext";
import styles from "./RefineSearch.module.css";

const AMENITIES = [
  { id: "pool", label: "Pool", icon: "pool" },
  { id: "spa", label: "Spa", icon: "spa" },
  { id: "gym", label: "Gym", icon: "fitness_center" },
  { id: "parking", label: "Parking", icon: "local_parking" },
  { id: "elevator", label: "Elevator", icon: "elevator" },
  { id: "terrace", label: "Terrace", icon: "balcony" },
  { id: "wine", label: "Wine room", icon: "wine_bar" },
  { id: "security", label: "Security", icon: "shield" },
];

const ANY = "any";

const BED_BATH_OPTIONS = [
  { value: ANY, label: "Any" },
  { value: "1", label: "1" },
  { value: "2", label: "2" },
  { value: "3", label: "3" },
  { value: "4", label: "4" },
  { value: "5", label: "5" },
  { value: "6", label: "6" },
];

const AREA_OPTIONS = [
  { value: ANY, label: "Any" },
  { value: "lt100", label: "< 100" },
  { value: "100-200", label: "100 – 200" },
  { value: "200-300", label: "200 – 300" },
  { value: "300+", label: "300+" },
];

const TYPE_OPTIONS = [
  { value: ANY, label: "Any" },
  { value: "villa", label: "Villa" },
  { value: "apartment", label: "Apartment" },
  { value: "chalet", label: "Chalet" },
];

function formatMillions(m) {
  return `$${m}M`;
}

export default function RefineSearch() {
  const router = useRouter();
  const { properties } = useProperties();

  const [minM, setMinM] = useState(1);
  const [maxM, setMaxM] = useState(25);
  const [bedrooms, setBedrooms] = useState(ANY);
  const [bathrooms, setBathrooms] = useState(ANY);
  const [area, setArea] = useState(ANY);
  const [propertyType, setPropertyType] = useState(ANY);
  const [amenities, setAmenities] = useState(() => new Set(["security"]));
  const [floorPlan, setFloorPlan] = useState(false);

  const onMinChange = useCallback(
    (e) => {
      const v = Number(e.target.value);
      setMinM(() => {
        const next = Math.min(v, maxM - 1);
        return Math.max(1, next);
      });
    },
    [maxM],
  );

  const onMaxChange = useCallback(
    (e) => {
      const v = Number(e.target.value);
      setMaxM(() => {
        const next = Math.max(v, minM + 1);
        return Math.min(25, next);
      });
    },
    [minM],
  );

  const toggleAmenity = useCallback((id) => {
    setAmenities((prev) => {
      const next = new Set(prev);
      if (next.has(id)) next.delete(id);
      else next.add(id);
      return next;
    });
  }, []);

  const reset = useCallback(() => {
    setMinM(1);
    setMaxM(25);
    setBedrooms(ANY);
    setBathrooms(ANY);
    setArea(ANY);
    setPropertyType(ANY);
    setAmenities(new Set());
    setFloorPlan(false);
  }, []);


  const viewMatches = useCallback(() => {
    let bestMatches = [];

    properties.forEach((p) => {
      let score = 0;

      if (propertyType !== ANY && p.type !== propertyType) return;
      if (propertyType !== ANY) score += 3;

      if (bedrooms !== ANY) {
        if (p.beds >= Number(bedrooms)) score += 3;
        else return;
      }

      if (bathrooms !== ANY) {
        if (p.baths >= Number(bathrooms)) score += 3;
        else return;
      }

      score += Math.random() * 0.5; 

      bestMatches.push({ ...p, score });
    });

    if (bestMatches.length === 0) {
      alert("No matching property found");
      return;
    }

    bestMatches.sort((a, b) => b.score - a.score);

    const bestMatch = bestMatches[0];

    console.log("BEST MATCH:", bestMatch);

    router.push(`/properties/${bestMatch.id}`);
  }, [properties, propertyType, bedrooms, bathrooms, router]);

  const selectFields = useMemo(
    () => [
      {
        id: "beds",
        label: "Bedrooms",
        value: bedrooms,
        onChange: setBedrooms,
        options: BED_BATH_OPTIONS,
      },
      {
        id: "baths",
        label: "Bathrooms",
        value: bathrooms,
        onChange: setBathrooms,
        options: BED_BATH_OPTIONS,
      },
      {
        id: "area",
        label: "Area (sqm)",
        value: area,
        onChange: setArea,
        options: AREA_OPTIONS,
      },
      {
        id: "type",
        label: "Property type",
        value: propertyType,
        onChange: setPropertyType,
        options: TYPE_OPTIONS,
      },
    ],
    [bedrooms, bathrooms, area, propertyType],
  );
  console.log("PROPERTIES:", properties);
  return (
    <section className={styles.section}>
      <div className={styles.inner}>
        <header className={styles.intro}>
          <p className={styles.eyebrow}>Refine search</p>
          <h2 className={styles.title}>Match homes to your brief</h2>
        </header>

        <div className={styles.columns}>
          <div className={styles.mainStack}>
            {/* PRICE RANGE */}
            <div className={styles.card}>
              <h3 className={styles.cardTitle}>Price range</h3>

              <div className={styles.priceRow}>
                <div>
                  <div className={styles.priceLabel}>Minimum</div>
                  <div className={styles.priceValue}>
                    {formatMillions(minM)}
                  </div>
                </div>

                <div>
                  <div className={styles.priceLabel}>Maximum</div>
                  <div className={styles.priceValue}>
                    {formatMillions(maxM)}
                  </div>
                </div>
              </div>

              <div className={styles.sliderRow}>
                <input
                  type="range"
                  min={1}
                  max={25}
                  value={minM}
                  onChange={onMinChange}
                  className={styles.range}
                />
                <input
                  type="range"
                  min={1}
                  max={25}
                  value={maxM}
                  onChange={onMaxChange}
                  className={styles.range}
                />
              </div>
            </div>

            {/* SELECT FIELDS */}
            <div className={styles.selectGrid}>
              {selectFields.map((field) => (
                <div key={field.id} className={styles.selectField}>
                  <span className={styles.selectLabel}>{field.label}</span>

                  <select
                    className={styles.select}
                    value={field.value}
                    onChange={(e) => field.onChange(e.target.value)}
                  >
                    {field.options.map((opt) => (
                      <option key={opt.value} value={opt.value}>
                        {opt.label}
                      </option>
                    ))}
                  </select>
                </div>
              ))}
            </div>

            {/* AMENITIES */}
            <div className={styles.card}>
              <h3 className={styles.cardTitle}>Amenities</h3>

              <div className={styles.amenityGrid}>
                {AMENITIES.map((item) => {
                  const selected = amenities.has(item.id);

                  return (
                    <button
                      key={item.id}
                      type="button"
                      className={`${styles.amenityBtn} ${
                        selected ? styles.amenityBtnSelected : ""
                      }`}
                      onClick={() => toggleAmenity(item.id)}
                    >
                      <span className={styles.amenityIcon}>{item.icon}</span>
                      <span className={styles.amenityLabel}>{item.label}</span>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* ACTIONS */}
            <div className={styles.actionsRow}>
              <button
                type="button"
                className={styles.btnPrimaryWide}
                onClick={viewMatches}
              >
                View matching listings
              </button>

              <button className={styles.btnGhost} onClick={reset}>
                Reset
              </button>
            </div>
          </div>

          {/* SIDEBAR */}
          <aside className={styles.sidebarCard} aria-label="Contact">
            <div className={styles.sidebarHeader}>
              <span className={styles.sidebarIcon} aria-hidden>
                support_agent
              </span>
              <h3 className={styles.sidebarTitle}>Contact an agent</h3>
            </div>
            <p className={styles.sidebarBody}>
              Send this brief and a licensed advisor will reply with curated
              options—often within twelve hours.
            </p>
            <div className={styles.sidebarActions}>
              <Link href="/contact" className={styles.btnSidebarPrimary}>
                <span className={styles.btnIcon} aria-hidden>
                  mail
                </span>
                Open contact form
              </Link>
              <a
                href="mailto:omniaeldessouki6@gmail.com?subject=Property%20brief"
                className={styles.btnSidebarSecondary}
              >
                <span className={styles.btnIcon} aria-hidden>
                  alternate_email
                </span>
                Email brief
              </a>
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
}
