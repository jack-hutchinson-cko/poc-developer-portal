import {
  NavigationList,
  PoliciesList,
  SocialList,
  PolicyEntityType,
} from "./types";

const policies: PoliciesList = [
  {
    type: PolicyEntityType.LINK,
    link: "https://www.checkout.com/legal/terms-and-policies",
    name: "Terms and policies",
  },
  {
    type: PolicyEntityType.LINK,
    link: "https://www.checkout.com/legal/privacy-policy",
    name: "Privacy policy",
  },
  {
    type: PolicyEntityType.LINK,
    link: "https://www.checkout.com/legal/certificates",
    name: "Certificates",
  },
  {
    type: PolicyEntityType.BUTTON,
    name: "Cookies Settings",
    props: {
      id: "ot-sdk-btn",
      className: "ot-sdk-show-settings onetrust-button",
    },
  },
  {
    type: PolicyEntityType.LINK,
    link: "https://www.checkout.com/Modern_Slavery_Statement.pdf",
    name: "Modern Slavery Statement",
  },
  {
    type: PolicyEntityType.LINK,
    link: "https://www.checkout.com/2019_Supplier_Code_of_Conduct.pdf",
    name: "Supplier Code of Conduct",
  },
];

export const social: SocialList = [
  {
    link: "https://www.facebook.com/checkout/",
    title: "Checkout.com`s Facebook",
    iconName: "facebook",
  },
  {
    link: "https://twitter.com/checkout",
    title: "Checkout.com`s Twitter",
    iconName: "twitter",
  },
  {
    link: "https://www.instagram.com/checkout_com/",
    title: "Checkout.com`s Instagram",
    iconName: "instagram",
  },
  {
    link: "https://www.youtube.com/channel/UCC-VFhOEXmyaOekIOwZvxhg",
    title: "Checkout.com`s Youtube",
    iconName: "youtube",
  },
  {
    link:
      "https://www.glassdoor.co.uk/Overview/Working-at-Checkout-com-EI_IE837487.11,23.htm",
    title: "Checkout.com`s Glassdoor",
    iconName: "glassdoor",
  },
  {
    link: "https://www.checkout.com/blog",
    title: "heckout.com`s Blog",
    iconName: "checkout",
  },
  {
    link: "https://www.linkedin.com/company/checkout/",
    title: "heckout.com`s LinkedIn",
    iconName: "linkedin",
  },
];

const navigation: NavigationList = [
  {
    navigationTitle: "Solution",
    items: [
      [
        {
          link: "https://www.checkout.com/technology/payment-processing",
          name: "Payments",
        },
        {
          link: "https://www.checkout.com/technology/payouts",
          name: "Payouts",
        },
        {
          link: "https://www.checkout.com/payment-integrations/unified-api",
          name: "Unified payments platform",
        },
        {
          link: "https://www.checkout.com/solutions/international-coverage",
          name: "International coverage",
        },
        {
          link: "https://www.checkout.com/data-and-reporting",
          name: "Data and reporting",
        },
        {
          link: "https://www.checkout.com/payment-integrations",
          name: "Integrations",
        },
      ],
      [
        {
          link:
            "https://www.checkout.com/data-and-reporting/risk-management/fraud",
          name: "Fraud Protection",
        },
        {
          link: "https://www.checkout.com/payment-methods",
          name: "Payment methods",
        },
        {
          link: "https://www.checkout.com/pricing",
          name: "Pricing",
        },
        {
          link: "https://www.checkout.com/partners",
          name: "Partners",
        },
      ],
    ],
  },
  {
    navigationTitle: "Company",
    items: [
      [
        {
          link: "https://www.checkout.com/life-at",
          name: "Life at Checkout.com",
        },
        {
          link: "https://www.checkout.com/careers",
          name: "Open positions",
        },
        {
          link: "https://www.checkout.com/diversity-and-inclusion",
          name: "Diversity & inclusion",
        },
        {
          link: "https://www.checkout.com/about-us",
          name: "About us",
        },
        {
          link: "https://www.checkout.com/newsroom",
          name: "Newsroom",
        },
        {
          link: "https://www.checkout.com/contact-us",
          name: "Contact us",
        },
      ],
    ],
  },
  {
    navigationTitle: "Resources",
    items: [
      [
        {
          link: "https://www.checkout.com/blog",
          name: "Blog",
        },
        {
          link: "https://www.checkout.com/case-studies",
          name: "Customer stories",
        },
      ],
    ],
  },
  {
    navigationTitle: "Integration",
    items: [
      [
        {
          link: "/docs",
          name: "Documentation",
        },
        {
          link: "/",
          name: "API Reference",
        },
        {
          link: "mailto:support@checkout.com",
          name: "Support",
        },
      ],
    ],
  },
];

export const footerContent = {
  policies,
  social,
  navigation,
};
