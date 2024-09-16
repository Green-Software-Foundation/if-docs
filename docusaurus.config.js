// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require("prism-react-renderer/themes/github");

/** @type {import('@docusaurus/types').Config} */
const config = {
  // Change to Site title
  title: "Impact Framework",
  // Change to site description
  tagline: "Documentation",
  // Change to site url
  url: "https://if.greensoftware.foundation/",
  baseUrl: "/",
  onBrokenLinks: "warn",
  onBrokenMarkdownLinks: "warn",
  favicon: "img/favicon.svg",
  organizationName: "Green-Software-Foundation",
  // Change to GitHub repo name.
  projectName: "ief",
  deploymentBranch: "gh-pages",
  i18n: {
    defaultLocale: "en",
    locales: ["en"],
  },

  presets: [
    [
      "classic",
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve("./sidebars.js"),
          routeBasePath: "/",
          // Change this to your repo.
          editUrl:
            "https://github.com/Green-Software-Foundation/if-docs/edit/master",
        },
        blog: false,
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
        gtag: {
          trackingID: "G-P59RXWWG7S",
        },
        sitemap: {
          changefreq: "weekly",
          priority: 0.5,
          ignorePatterns: ["/tags/**"],
          filename: "sitemap.xml",
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        // Change to project name
        title: "Impact Framework",
        // Change to project logo
        logo: {
          alt: "Green Software Impact Framework Logo",
          src: "img/logo.svg",
        },
        items: [
          {
            to: "/intro",
            position: "left",
            label: "Documentation",
          },
          {
            to: "/pipelines",
            position: "left",
            label: "Pipelines",
          },
          {
            to: "/community",
            position: "left",
            label: "Community",
          },
          {
            to: "/users/quick-start",
            position: "left",
            label: "Quick Start",
          },
          {
            href: "https://explorer.if.greensoftware.foundation/",
            position: "left",
            label: "Plugins",
          },
          {
            href: "https://github.com/Green-Software-Foundation/if",
            position: "right",
            className: 'header-github-link',
            'aria-label': 'GitHub repository',
          },
          {
            href: "https://greensoftware.foundation/",
            position: "right",
            label: "a Green Software Foundation project",
          },
        ],
      },
      footer: {
        style: "dark",
        links: [
          {
            title: "Links",
            items: [
              {
                label: "Github",
                href: "https://github.com/Green-Software-Foundation/ief/", // Change to project repo
              },
              {
                label: "Website",
                href: "https://if.greensoftware.foundation",
              },
            ],
          },
          {
            title: "LEGAL",
            items: [
              {
                label: "Trademark Policy",
                href: "https://greensoftware.foundation/policy/trademark",
              },
              {
                label: "Terms and Privacy Policy",
                href: "https://greensoftware.foundation/policy/terms",
              },
            ],
          },
          {
            title: "GSF Info",
            items: [
              {
                label: "Green Software Foundation",
                href: "https://greensoftware.foundation",
              },
              {
                label: "Twitter",
                href: "https://twitter.com/gsfcommunity",
              },
              {
                label: "Linkedin",
                href: "https://www.linkedin.com/company/green-software-foundation/",
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Joint Development Foundation Projects, LLC, Green Software Foundation Series`,
      },
      prism: {
        theme: lightCodeTheme,
      },
      colorMode: {
        disableSwitch: true,
        defaultMode: "light",
      },
    }),
  plugins: [
    [
      "@docusaurus/plugin-ideal-image",
      {
        quality: 90,
        max: 1030, // max resized image's size.
        min: 640, // min resized image's size. if original is lower, use that size.
        steps: 2, // the max number of images generated between min and max (inclusive)
        disableInDev: false,
      },
    ],
  ],
};

module.exports = config;
