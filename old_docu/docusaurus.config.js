module.exports = {
  title: 'Damian Rebolo',
  tagline: 'Software Engineer at Ohpen',
  url: 'https://damianrebolo.github.io',
  baseUrl: '/my-docu/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'damianrebolo', // Usually your GitHub org/user name.
  projectName: 'my-docu', // Usually your repo name.
  themeConfig: {
    navbar: {
      title: '',
      logo: {
        alt: '',
        src: 'img/logo-48.png'
      },
      items: [
        {
          to: 'docs/ioc',
          activeBasePath: 'docs',
          label: 'Docs',
          position: 'right'
        },
        { to: 'blog', label: 'Blog', position: 'right' },
        {
          href: 'https://github.com/damianrebolo/my-docu',
          label: 'GitHub',
          position: 'right'
        }
      ]
    },
    footer: {
      style: 'dark',
      links: [],
      copyright: `Copyright © ${new Date().getFullYear()}. Built with Docusaurus.`
    }
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          editUrl: 'https://github.com/damianrebolo/my-docu/edit/master/'
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          editUrl: 'https://github.com/damianrebolo/my-docu/edit/master/'
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css')
        }
      }
    ]
  ]
};
