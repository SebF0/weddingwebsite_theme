/**
 * All site copy lives here for easy editing.
 * Change text without touching component files.
 *
 * Each key maps 1-to-1 with a section component.
 * Add new section keys when you add new sections.
 */

export const SITE_CONTENT = {
  meta: {
    title: "Louise & Sebastian — Wedding",
    description: "Join us to celebrate our wedding day.",
  },

  hero: {
    name1: "Louise",
    name2: "Sebastian",
    conjunction: "and",
    tagline: "are getting married",
  },

  dateVenue: {
    date: "Weekend of September 26th 2026",
    preposition: "at",
    venue: "Chateau du Pujolet, Vallesvilles",
  },

  ourSpecialDay: {
    heading: "The French Chapter",
    paragraphs: [
      "France has quietly framed many of our biggest life decisions, so it felt only natural to continue that story and host our wedding there.",
      "Some of you may have, very vocally, noted the gap between the proposal in 2023 and us finally setting a date. Unlike other milestones, such as securing a mortgage or coming engaged, planning a wedding did not require urgent action in response to worsening weather or rising avalanche risk. More significantly, our focus shifted to something far more important: welcoming our baby girl, Amélie, in September 2025.",
      "Toulouse looked after Seb for five years, leaving him with great friends, even greater memories, and a deep, arguably unhealthy, attachment to Victor Hugo Market.",
      "Since, Seb was surprisingly accepted as a French national, with the sole objective of accessing to the “EU” airport queue. Despite our hopes, this new citizenship has done nothing to improve his French, which had reached an all-time low, a fact only fully revealed after we had paid the deposit.",
      "We are so excited to host this next French chapter and celebrate with you in Toulouse."
    ],
    closing: "With love,",
    signature: "Lou & Seb",
  },

  theDay: {
    heading: "Wedding Fête",
    subheading:
      "Please meet at Église Saint-Pierre de Quint-Fonsegrives at 2:30pm, then we'll head to the reception at Chateau du Pujolet.",
    timeline: [
      { time: "3PM", label: "ceremony", location: "Église Saint-Pierre de Quint-Fonsegrives", icon: "rings" },
      { time: "5PM", label: "drinks", location: "Serre", icon: "champagne" },
      { time: "7PM", label: "dinner", location: "Grange", icon: "dinner" },
      { time: "10PM", label: "cake cutting", location: "Reception Room", icon: "cake" },
      { time: "11PM", label: "party", location: "Reception Room", icon: "party" },
      { time: "2AM", label: "hometime", location: "Reception Room", icon: "hometime" },
    ],
    dresscode: "Dresscode: Summer smart",
    children: "Children: No children at the reception please, unless babes in arms.",
  },

  theWeekend: {
    heading: "Part Deux",
    subheading:
      "We're in France. We'll eat well, drink well and make the most of the surroundings.",
    timeline: [
      {
        time: "11AM",
        label: "requinquer",
        description: "Pâtisseries, Bloody Marys and mimosas",
        icon: "brunch",
      },
      {
        time: "2PM",
        label: "The best of Marché Victor Hugo",
        description: "Rosé, music and lawn games",
        icon: "dinner",
      },
    ],
    dresscode:
      "Beach chilled – bring swimmers, the pool is heated.",
    children:
      "Ideally no children. If you're in a bind, we'll arrange a childminder to help.",
  },

  gettingToEvents: {
    heading: "Getting to the events",
    sections: [
      {
        title: "Flying",
        icon: "plane",
        content: [
          "The nearest airport is Toulouse–Blagnac (around 35 minutes by Uber or taxi).",
          "Other nearby airports:",
        ],
        list: [
          "Carcassonne – 1 hour",
          "Béziers – 2 hours",
          "Bordeaux – 2.5 hours",
        ],
        note: "Toulouse will have the best range of flights.",
      },
      {
        title: "Taxi or car hire",
        icon: "car",
        content: [
          "If you are staying near the venue, taxis or Ubers will be easiest.",
          "We will provide transport between the church and the reception. Ubers should be available late into the night.",
          "If you would like to explore the region, hiring a car is worthwhile.",
        ],
      },
    ],
  },

  whereToStay: {
    heading: "Where to stay",
    sections: [
      {
        title: "Near the venue",
        icon: "countryside",
        content: [
          "For countryside calm and convenience, look for nearby Airbnbs or small hotels.",
        ],
      },
      {
        title: "In Toulouse",
        icon: "city",
        content: [
          "For restaurants, markets and beautiful architecture, stay in the city.",
          "Prettiest areas: Carmes, Esquirol, Saint-Cyprien, Saint-Georges, Saint-Étienne.",
          "The metro is simple and inexpensive.",
        ],
      },
    ],
  },

  rsvp: {
    heading: "RSVP",
    description: "Please let us know by phone, email or via this form:",
    items: [
      "If you're joining us on Saturday",
      "If you're joining us on Sunday",
      "Any dietary requirements",
      "Any questions",
    ],
    closing: "We're looking forward to celebrating with you.",
  },

  exploreRegion: {
    heading: "Explore the region",
    destinations: [
      {
        name: "Toulouse",
        description: "Medieval streets, markets, excellent food and wine.",
      },
      {
        name: "Albi",
        description: "Striking cathedral, Toulouse-Lautrec Museum, Gaillac wines nearby.",
      },
      {
        name: "Carcassonne",
        description: "A beautifully preserved fortified city.",
      },
    ],
    note: "You might also explore some of the Plus Beaux Villages de France: Cordes-sur-Ciel, Lautrec, Castelnau-de-Montmiral.",
  },

  faq: {
    heading: "FAQ",
    questions: [
      {
        question: "What does the dresscode mean?",
        answer: [
          {
            type: "subtitle",
            content: "Summer Smart:",
          },
          {
            type: "text",
            content: "Chinos, suits, dresses are the go. Feel good and look good.",
          },
          {
            type: "subtitle",
            content: "Beach Chilled:",
          },
          {
            type: "text",
            content: "Party shirts are encouraged. Shorts and sandals are welcome. Boaties work 100% of the time, every time.",
          },
        ],
      },
      {
        question: "Parking",
        answer: [
          {
            type: "text",
            content: "See the detailed map below about where to direct Ubers, Taxis or Drivers.",
          },
          {
            type: "image",
            src: "/Assets/Arrival.jpeg",
            alt: "Parking map",
          },
        ],
      },
      {
        question: "Childcare",
        answer: [
          {
            type: "text",
            content: "We'd love to enjoy everyone's company without them worrying about their children all day every day. If you can't get childcare and need any help coming up with solutions, just reach out to us.",
          },
        ],
      },
      {
        question: "Wedding Gifts",
        answer: [
          {
            type: "text",
            content: "Don't worry about presents for us, but if you'd like to, any contributions towards Amélie's future would be extremely gratefully received.",
          },
          {
            type: "link",
            text: "Contribute here",
            url: "#",
          },
        ],
      },
    ],
  },
} as const;
