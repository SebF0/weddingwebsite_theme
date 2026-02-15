import { SITE_CONTENT } from "@/config/content";

/** Simple footer with couple names */
export default function Footer() {
  const { name1, name2 } = SITE_CONTENT.hero;

  return (
    <footer className="bg-olive py-12 text-center">
      <p className="font-script text-2xl text-cream">
        {name1} & {name2}
      </p>
    </footer>
  );
}
