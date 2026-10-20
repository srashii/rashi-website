export const siteConfig = {
  siteTitle: 'Rashi Srivastava',
  firstName: 'Rashi',
  lastName: 'Srivastava',
  description:
    "Product manager with 8+ years across fintech and edtech. I lead the Chat, Growth & Cross-Sell and Homepage squads at Botim, the UAE's super-app.",
  hero: {
    // Round photo next to the name; set to "" to hide it.
    photo: "/assets/rashi-photo.jpg" as string,
    role: "Product Manager · Botim (AstraTech)",
    headline: "I turn messy problems into",
    headlineAccent: "products people love.",
    summary:
      "8+ years across fintech and edtech, building 0→1 and scaling to millions of users. Today I lead the Chat, Growth & Cross-Sell and Homepage squads at Botim, the UAE's calling and fintech super-app.",
    cv: "/assets/RashiSrivastava-Resume.pdf",
    highlightsTitle: "Highlights from my current role",
    proof: [
      {
        figure: "3.5% to 8%",
        label: "of monthly active users transacting on fintech in one year, shared with the Growth team",
        detail: "AED 948K (~$258K) incremental revenue, in one year",
      },
      {
        figure: "~$1.2M",
        label: "revenue from Chat as a Service, in its first 6 months after launch",
        detail: "Split ~70% verification, ~30% promotional",
      },
      {
        figure: "65%",
        label: "reduction in spam-caller complaints to support",
        detail: "From 3.7 to 1.3 complaints per million connected calls",
      },
      {
        figure: "18.5 to 23.8",
        label: "chat messages sent per user per day, in six months",
      },
    ],
    earlierTitle: "Before Botim, at CoLearn",
    earlierProof: [
      {
        figure: "~10K to ~200K",
        label: "paid live-class students per semester, in about two years",
        detail: "About $2M a year in live-class revenue",
      },
      {
        figure: "15K to ~1.2M",
        label: "Tanya users, from launch week in August 2021 to monthly active users by December 2021",
        detail: "~5M total users",
      },
    ],
  },
  header: {
    logoName: 'Rashi'
  },
  socialLinks: {
    linkedIn: "https://www.linkedin.com/in/srashi",
    instagram: "https://www.instagram.com/srashi_12",
    email: "mailto:srashi.product@gmail.com",
    x: "https://x.com/srashi_product"
  },
  experience: [
    {
      companyName: "AstraTech (Botim)",
      role: "Product Manager · Chat, Growth & Cross-Sell, Homepage",
      timePeriod: "2024 - Present",
      description: `
      - Hired for Growth & Cross-Sell; scope grew to lending at six months and to the Chats and Homepage squads at one year\n
      - Grew monthly fintech transacting users from 3.5% to 8% of monthly active users in one year, through splash screens, homepage recommendations and in-call and in-chat nudges\n
      - Grew chat messages sent per user per day from 18.5 to 23.8 in six months with voice notes, chat themes, transaction cards and personalised celebrations\n
      - Built Botim's Trust & Safety framework from scratch across Chat and Call, cutting spam-caller complaints to support by 65%\n
      - Lifted EasyCash lending utilisation by 68% by integrating Boost rewards into lending\n
      - Cut campaign setup from hours to under 3 minutes with an in-house Segment Builder and in-app campaign engine\n
      - Led the Amplitude rollout across 12 squads so every team can see its user journeys`
    },
    {
      companyName: "CoLearn",
      role: "Lead Product Manager",
      timePeriod: "2021 - 2024",
      description: `
      - Built Tanya, the photo-to-solution homework app, from 0 to 1: 15K users in launch week (August 2021) to ~1.2M MAU by December 2021\n
      - Grew paid live-class students from ~10K to ~200K per semester in about two years (about $2M a year in revenue), with referral as the biggest channel\n
      - Reached 75% semester renewal organically with early teacher selection and weekly parent reports\n
      - Reduced onboarding time by 97% and weekly support time by 60% through automation and an in-app chatbot\n
      - Mentored team members across product and business, crafting training programmes for their growth`
    },
    {
      companyName: "INDmoney",
      role: "Product Manager",
      timePeriod: "2020 - 2021",
      description: `
      - Built the Loan Against Investments vertical from scratch\n
      - Drove a 40% surge in acquired leads through weekly A/B-tested campaigns`
    },
    {
      companyName: "Ziploan",
      role: "Associate Product Manager",
      timePeriod: "2019 - 2020",
      description: `
      - Increased loan applications by ~23% by automating the agent payout process\n
      - Built the repayments and collections system, including a collector app and early-warning signals`
    },
    {
      companyName: "Jsimple (Verko)",
      role: "Business Analyst",
      timePeriod: "2017 - 2019",
      description: `
      - Built automated billing for a B2B insurance SaaS used by Fortune 500 companies, cutting manual effort by 60%`
    }
  ]
}
