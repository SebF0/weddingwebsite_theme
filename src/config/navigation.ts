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
  { label: "Our Day", href: "#our-special-day" },
  { label: "The Day", href: "#the-day" },
  { label: "RSVP", href: "#rsvp" },
  { label: "Accommodation", href: "#accommodation" },
  { label: "Travel", href: "#travel" },
  { label: "FAQ", href: "#faq" },
];
