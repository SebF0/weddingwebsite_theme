/**
 * Navigation items for the sticky nav bar.
 * Each `href` must match a section `id` on the page.
 * Add or remove entries here to update the nav automatically.
 */
export interface NavItem {
  label: string;
  href: string;
}

export const NAV_ITEMS: NavItem[] = [
  { label: "The Fête", href: "#the-day" },
  { label: "Part Deux", href: "#the-weekend" },
  { label: "RSVP", href: "#rsvp" },
/*   { label: "Accommodation", href: "#where-to-stay" },
  { label: "Travel", href: "#getting-to-events" },
  { label: "FAQ", href: "#faq" }, */
];
