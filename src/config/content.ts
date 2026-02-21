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
      "France has framed some of our biggest life moments, from securing our home to getting engaged, so it felt like the natural place for our wedding.",
      "We settled on Toulouse which was Seb’s home for years, providing him with great friends, fond memories, and an attachment to the Sud-Ouest.",
      "So please join us as we create our most meaningful French memory yet.",
    ],
    closing: "With love,",
    signature: "Louise & Sebastian",
  },

  theDay: {
    heading: "Wedding Fête",
    ceremony: "Ceremony: Église Saint-Pierre de Quint-Fonsegrives.", 
    reception: "Reception: Chateau du Pujolet, Vallesvilles.",
    timeline: [
      { time: "2PM", label: "ceremony", location: "Église Saint-Pierre de Quint-Fonsegrives", icon: "rings" },
      { time: "4PM", label: "drinks", location: "Serre", icon: "champagne" },
      { time: "5PM", label: "dinner", location: "Grange", icon: "dinner" },
      { time: "8PM", label: "cake cutting", location: "Reception Room", icon: "cake" },
      { time: "9PM", label: "party", location: "Reception Room", icon: "party" },
      { time: "2AM", label: "hometime", location: "Reception Room", icon: "hometime" },
    ],
    dresscode: "Dresscode: Summer smart",
    children: "Children: No children at the reception please, unless babes in arms.",
  },

  theWeekend: {
    heading: "Part Deux",
    subheading:
      "We'd love to see as many of you as we can for a more relaxed day around the pool and grounds to debrief, catch up.",
    timeline: [
      {
        time: "11AM",
        label: "Requinquer",
        description: "Pâtisseries, Bloody Marys and Mimosas",
        icon: "brunch",
      },
      {
        time: "2PM",
        label: "The Best of the Marché",
        description: "Food, drinks, music and lawn games",
        icon: "dinner",
      },
    ],
    dresscode:
      "Summer casual... bring swimmers and a towel, the pool is heated.",
    children:
      "Ideally no children.",
  },

  gettingToEvents: {
    heading: "Getting to the events",
    sections: [
      {
        title: "Flying",
        icon: "plane",
        content: [
          "The nearest airport is Toulouse–Blagnac (around 35 minutes by Uber).",
          "Other nearby airports:",
        ],
        list: [
          "Carcassonne – 1 hour",
          "Béziers – 2 hours",
          "Bordeaux – 2.5 hours",
        ],
        // note: "Toulouse will have the best range of flights.",
      },
      {
        title: "Taxi or car hire",
        icon: "car",
        content: [
          "Taxis or Ubers will be easiest, especially if you're staying nearer Toulouse.",
          "We will provide transport from the church to the reception. Ubers can be booked late into the night.",
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
          "For convenience and countryside calm, look for nearby Airbnbs or small hotels.",
        ],
      },
      {
        title: "In Toulouse",
        icon: "city",
        content: [
          "For restaurants, markets and medieval streets, stay in the city.",
          "Prettiest areas: Carmes, Esquirol, Saint-Cyprien, Saint-Georges, Saint-Étienne.",
          "The metro is simple and inexpensive.",
        ],
      },
    ],
  },

  rsvp: {
    heading: "RSVP",
    description: "Please let us know:",
    items: [
      "If you're joining us on Saturday.",
      "If you're joining us on Sunday.",
      "Have any dietary requirements.",
      "Have any other questions or need help.",
    ],
    description2: "by phone, email or via this form.",
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
        description: "A beautifully preserved fortified city. Minervois wines nearby.",
      },
    ],
    note: "You might also explore some of the Plus Beaux Villages de France: Cordes-sur-Ciel, Lautrec, Castelnau-de-Montmiral.",
  },

  faq: {
    heading: "FAQ",
    questions: [
      {
        question: "More on the Dresscode",
        answer: [
          {
            type: "subtitle",
            content: "Summer Smart:",
          },
          {
            type: "text",
            content: "Suits, chinos, dresses are the go. Please come looking and feeling good.",
          },
          {
            type: "subtitle",
            content: "Beach Chilled:",
          },
          {
            type: "text",
            content: "Party shirts are encouraged. Shorts and sandals are welcome. Needless to say, Boaties work every time.",
          },
        ],
      },
      {
        question: "Parking",
        answer: [
          {
            type: "text",
            content: "This is one thing the venue was fussy about so please help by parking in the right place. See the detailed map below about where to direct Ubers, Taxis or Drivers.",
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
            content: "We’ve asked for no children because we’'d love to enjoy everyone's company and for them to enjoy the weekend. If you are struggling with childcare, get in touch with us to help coming up with solutions.",
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

  askJeeves: {
    heading: "Ask... Seb",
    heading2: "G&T",
    subheading: "Ask silly questions, and get silly answers.",
    placeholder: "Type your question…",
    buttonLabel: "Ask",
    note_ai: "Answers are SebAI generated therefore are sometimes a bit scatty and meandering.",
  },
} as const;
