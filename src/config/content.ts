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
    tagline: "are getting married!",
  },

  dateVenue: {
    date: "September 26th 2026",
    preposition: "at",
    venue: "Chateau du Pujolet, Vallesvilles",
  },

  ourSpecialDay: {
    heading: "Come party with us!",
    paragraphs: [
      "We are so excited to celebrate this special moment in our lives with our closest family and friends. Your love and support mean the world to us, and we can't wait to share this unforgettable day with you.",
      "As we count down to our big day, we've created this website to keep you updated on all the details.",
      "Thank you for being a part of our journey. We can't wait to celebrate with you!",
    ],
    closing: "With love,",
    signature: "Lou & Seb",
  },

  theDay: {
    heading: "The Wedding Day",
    subheading:
      "Our special day begins in the main lobby bar, meet there at 12:30pm",
    timeline: [
      { time: "3PM", label: "ceremony", location: "Église Saint-Pierre de Quint-Fonsegrives", icon: "rings" },
      { time: "5PM", label: "drinks", location: "Serre", icon: "champagne" },
      { time: "7PM", label: "dinner", location: "Grange", icon: "cake" },
      { time: "10PM", label: "cake cutting", location: "Reception Room", icon: "dinner" },
      { time: "11PM", label: "party", location: "Reception Room", icon: "party" },
      { time: "2AM", label: "hometime", location: "Reception Room", icon: "hometime" },
    ],
    dresscode: "Summer smart",
    children: "No children on the wedding day please, unless babes in arms.",
  },


theWeekend: {
  heading: "The weekend",
  subheading:
    "Three days in France: family, vows, food, music and a little recovery.",
  days: [
/*     {
      name: "Friday",
      title: "family night",
      description:
        "An intimate evening with immediate family. We’ll keep things quiet and save our energy for the celebrations to come. We look forward to seeing everyone on Saturday.",
    },
    {
      name: "Saturday",
      title: "the fête",
      description:
        "Join us for the ceremony where we’ll make things official, followed by a reception of eating, drinking and dancing into our first married evening together.",
      dresscode: "Summer smart",
      children:
        "No children on the wedding day please, unless babes in arms.",
    }, */
    {
      name: "Sunday",
      title: "part deux",
      description:
        "We’re in France. We’ll eat well, drink well and make the most of the surroundings.",
      timeline: [
        {
          time: "11AM",
          label: "requinquer",
          description: "Pâtisseries, Bloody Marys and mimosas",
          icon: "brunch",
        },
        {
          time: "2PM",
          label: "marché victor hugo feast",
          description: "Rosé, music and lawn games",
          icon: "party",
        },
      ],
      dresscode:
        "Beach chilled – bring swimmers, the pool is heated.",
      children:
        "Ideally no children. If you’re in a bind, we’ll arrange a childminder to help.",
    },
  ],
},



  travel: {
    heading: "Travel",
    description: "Travel information and directions will appear here.",
  },

  rsvp: {
    heading: "RSVP",
    description: "Please let us know if you can make it.",
  },

  
  accommodation: {
    heading: "Accommodation",
    description: "Details about where to stay will appear here.",
  },


  faq: {
    heading: "FAQ",
    description: "Frequently asked questions will appear here.",
  },
} as const;
