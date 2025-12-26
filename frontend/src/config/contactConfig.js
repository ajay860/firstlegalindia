import { LocationOn, Phone, Email, AccessTime } from "@mui/icons-material"

export const contactPageConfig = {
  hero: {
    title: "Contact Us",
    subtitle: `Have questions or need professional guidance?\nWe're here to help.`,
    breadcrumbs: [{ label: "Home", href: "/" }, { label: "Contact Us" }],
    backgroundColor: "#16252b",
  },

  contactInfo: {
    heading: "Get in Touch",
    items: [
      {
        icon: LocationOn,
        title: "Office Address",
        value: `S-75, Yashwant Plaza, Near Railway Station
Indore, Madhya Pradesh – 452001`,
      },
      {
        icon: Phone,
        title: "Phone",
        value: "+91 88188-88744",
        link: "tel:+918818888744",
      },
      {
        icon: Email,
        title: "Email",
        value: "psrco131@gmail.com",
        link: "mailto:psrco131@gmail.com",
      },
      {
        icon: AccessTime,
        title: "Office Hours",
        value: `Mon–Sat: 10:00 AM to 6:00 PM
Sunday: Closed`,
      },
    ],
  },

  map: {
    iframeSrc:
      "https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3368.7790216307435!2d75.86720737530479!3d22.71860157938803!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMjLCsDQzJzA3LjAiTiA3NcKwNTInMTEuMiJF!5e1!3m2!1sen!2sin!4v1765630035634!5m2!1sen!2sin",
    height: 150,
  },

  form: {
    heading: "We would love to hear from you",
  },
}
