import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/blog',
    component: ComponentCreator('/blog', 'b2f'),
    exact: true
  },
  {
    path: '/blog/archive',
    component: ComponentCreator('/blog/archive', '182'),
    exact: true
  },
  {
    path: '/blog/authors',
    component: ComponentCreator('/blog/authors', '0b7'),
    exact: true
  },
  {
    path: '/blog/authors/all-sebastien-lorber-articles',
    component: ComponentCreator('/blog/authors/all-sebastien-lorber-articles', '4a1'),
    exact: true
  },
  {
    path: '/blog/authors/yangshun',
    component: ComponentCreator('/blog/authors/yangshun', 'a68'),
    exact: true
  },
  {
    path: '/blog/first-blog-post',
    component: ComponentCreator('/blog/first-blog-post', '89a'),
    exact: true
  },
  {
    path: '/blog/long-blog-post',
    component: ComponentCreator('/blog/long-blog-post', '9ad'),
    exact: true
  },
  {
    path: '/blog/mdx-blog-post',
    component: ComponentCreator('/blog/mdx-blog-post', 'e9f'),
    exact: true
  },
  {
    path: '/blog/tags',
    component: ComponentCreator('/blog/tags', '287'),
    exact: true
  },
  {
    path: '/blog/tags/docusaurus',
    component: ComponentCreator('/blog/tags/docusaurus', '704'),
    exact: true
  },
  {
    path: '/blog/tags/facebook',
    component: ComponentCreator('/blog/tags/facebook', '858'),
    exact: true
  },
  {
    path: '/blog/tags/hello',
    component: ComponentCreator('/blog/tags/hello', '299'),
    exact: true
  },
  {
    path: '/blog/tags/hola',
    component: ComponentCreator('/blog/tags/hola', '00d'),
    exact: true
  },
  {
    path: '/blog/welcome',
    component: ComponentCreator('/blog/welcome', 'd2b'),
    exact: true
  },
  {
    path: '/markdown-page',
    component: ComponentCreator('/markdown-page', '3d7'),
    exact: true
  },
  {
    path: '/docs',
    component: ComponentCreator('/docs', 'd94'),
    routes: [
      {
        path: '/docs',
        component: ComponentCreator('/docs', 'f08'),
        routes: [
          {
            path: '/docs',
            component: ComponentCreator('/docs', 'e43'),
            routes: [
              {
                path: '/docs/airdrop',
                component: ComponentCreator('/docs/airdrop', 'c57'),
                exact: true,
                sidebar: "zeebuSidebar"
              },
              {
                path: '/docs/airdrop/epochs',
                component: ComponentCreator('/docs/airdrop/epochs', 'bf8'),
                exact: true,
                sidebar: "zeebuSidebar"
              },
              {
                path: '/docs/airdrop/epochs/epoch1',
                component: ComponentCreator('/docs/airdrop/epochs/epoch1', '59d'),
                exact: true,
                sidebar: "zeebuSidebar"
              },
              {
                path: '/docs/airdrop/epochs/epoch2',
                component: ComponentCreator('/docs/airdrop/epochs/epoch2', '06e'),
                exact: true,
                sidebar: "zeebuSidebar"
              },
              {
                path: '/docs/airdrop/epochs/epoch3',
                component: ComponentCreator('/docs/airdrop/epochs/epoch3', '60e'),
                exact: true,
                sidebar: "zeebuSidebar"
              },
              {
                path: '/docs/airdrop/epochs/epoch4',
                component: ComponentCreator('/docs/airdrop/epochs/epoch4', '5f1'),
                exact: true,
                sidebar: "zeebuSidebar"
              },
              {
                path: '/docs/airdrop/zeebuairdropseason1',
                component: ComponentCreator('/docs/airdrop/zeebuairdropseason1', '95f'),
                exact: true,
                sidebar: "zeebuSidebar"
              },
              {
                path: '/docs/airdrop/zeebuairdropseason1/multichainallocationzbuairdropseason1',
                component: ComponentCreator('/docs/airdrop/zeebuairdropseason1/multichainallocationzbuairdropseason1', 'afc'),
                exact: true,
                sidebar: "zeebuSidebar"
              },
              {
                path: '/docs/airdrop/zeebuprotocolsevolutionzips',
                component: ComponentCreator('/docs/airdrop/zeebuprotocolsevolutionzips', 'e6e'),
                exact: true,
                sidebar: "zeebuSidebar"
              },
              {
                path: '/docs/airdrop/zeebuprotocolsevolutionzips/taskspecifictermsconditions',
                component: ComponentCreator('/docs/airdrop/zeebuprotocolsevolutionzips/taskspecifictermsconditions', '150'),
                exact: true,
                sidebar: "zeebuSidebar"
              },
              {
                path: '/docs/airdrop/zeebuprotocolsevolutionzips/zipdistributionrulesactivity',
                component: ComponentCreator('/docs/airdrop/zeebuprotocolsevolutionzips/zipdistributionrulesactivity', '8cf'),
                exact: true,
                sidebar: "zeebuSidebar"
              },
              {
                path: '/docs/airdrop/zeebuprotocolwaitlist',
                component: ComponentCreator('/docs/airdrop/zeebuprotocolwaitlist', '439'),
                exact: true,
                sidebar: "zeebuSidebar"
              },
              {
                path: '/docs/intro',
                component: ComponentCreator('/docs/intro', 'a7f'),
                exact: true,
                sidebar: "zeebuSidebar"
              },
              {
                path: '/docs/miscellaneous',
                component: ComponentCreator('/docs/miscellaneous', '142'),
                exact: true,
                sidebar: "zeebuSidebar"
              },
              {
                path: '/docs/miscellaneous/brandkit',
                component: ComponentCreator('/docs/miscellaneous/brandkit', '63d'),
                exact: true,
                sidebar: "zeebuSidebar"
              },
              {
                path: '/docs/miscellaneous/keyaddresses',
                component: ComponentCreator('/docs/miscellaneous/keyaddresses', 'c74'),
                exact: true,
                sidebar: "zeebuSidebar"
              },
              {
                path: '/docs/miscellaneous/legaldisclaimer',
                component: ComponentCreator('/docs/miscellaneous/legaldisclaimer', '960'),
                exact: true,
                sidebar: "zeebuSidebar"
              },
              {
                path: '/docs/miscellaneous/partnership',
                component: ComponentCreator('/docs/miscellaneous/partnership', '0ac'),
                exact: true,
                sidebar: "zeebuSidebar"
              },
              {
                path: '/docs/miscellaneous/policy',
                component: ComponentCreator('/docs/miscellaneous/policy', 'bfc'),
                exact: true,
                sidebar: "zeebuSidebar"
              },
              {
                path: '/docs/miscellaneous/socials',
                component: ComponentCreator('/docs/miscellaneous/socials', '783'),
                exact: true,
                sidebar: "zeebuSidebar"
              },
              {
                path: '/docs/miscellaneous/support',
                component: ComponentCreator('/docs/miscellaneous/support', 'eba'),
                exact: true,
                sidebar: "zeebuSidebar"
              },
              {
                path: '/docs/miscellaneous/team',
                component: ComponentCreator('/docs/miscellaneous/team', '161'),
                exact: true,
                sidebar: "zeebuSidebar"
              },
              {
                path: '/docs/miscellaneous/termsandconditions',
                component: ComponentCreator('/docs/miscellaneous/termsandconditions', '5ea'),
                exact: true,
                sidebar: "zeebuSidebar"
              },
              {
                path: '/docs/miscellaneous/transparency',
                component: ComponentCreator('/docs/miscellaneous/transparency', '2c5'),
                exact: true,
                sidebar: "zeebuSidebar"
              },
              {
                path: '/docs/opportunity',
                component: ComponentCreator('/docs/opportunity', '692'),
                exact: true,
                sidebar: "zeebuSidebar"
              },
              {
                path: '/docs/opportunity/currentchallenges',
                component: ComponentCreator('/docs/opportunity/currentchallenges', 'be8'),
                exact: true,
                sidebar: "zeebuSidebar"
              },
              {
                path: '/docs/opportunity/currentviews',
                component: ComponentCreator('/docs/opportunity/currentviews', 'b97'),
                exact: true,
                sidebar: "zeebuSidebar"
              },
              {
                path: '/docs/opportunity/keyfacts',
                component: ComponentCreator('/docs/opportunity/keyfacts', '340'),
                exact: true,
                sidebar: "zeebuSidebar"
              },
              {
                path: '/docs/problemstatement',
                component: ComponentCreator('/docs/problemstatement', 'df2'),
                exact: true,
                sidebar: "zeebuSidebar"
              },
              {
                path: '/docs/roadmap',
                component: ComponentCreator('/docs/roadmap', 'f5c'),
                exact: true,
                sidebar: "zeebuSidebar"
              },
              {
                path: '/docs/roadmap/cdpvault',
                component: ComponentCreator('/docs/roadmap/cdpvault', '88c'),
                exact: true,
                sidebar: "zeebuSidebar"
              },
              {
                path: '/docs/roadmap/moneymarket',
                component: ComponentCreator('/docs/roadmap/moneymarket', '030'),
                exact: true,
                sidebar: "zeebuSidebar"
              },
              {
                path: '/docs/whyzeebu',
                component: ComponentCreator('/docs/whyzeebu', '8c8'),
                exact: true,
                sidebar: "zeebuSidebar"
              },
              {
                path: '/docs/whyzeebu/utilityoftoken',
                component: ComponentCreator('/docs/whyzeebu/utilityoftoken', '1f5'),
                exact: true,
                sidebar: "zeebuSidebar"
              },
              {
                path: '/docs/zeebu',
                component: ComponentCreator('/docs/zeebu', 'ab3'),
                exact: true,
                sidebar: "zeebuSidebar"
              },
              {
                path: '/docs/zeebu/psp',
                component: ComponentCreator('/docs/zeebu/psp', 'ebc'),
                exact: true,
                sidebar: "zeebuSidebar"
              },
              {
                path: '/docs/zeebu/psp/knowhows',
                component: ComponentCreator('/docs/zeebu/psp/knowhows', 'c29'),
                exact: true,
                sidebar: "zeebuSidebar"
              },
              {
                path: '/docs/zeebu/psp/platformoverview',
                component: ComponentCreator('/docs/zeebu/psp/platformoverview', '02e'),
                exact: true,
                sidebar: "zeebuSidebar"
              },
              {
                path: '/docs/zeebu/psp/platformoverview/technology',
                component: ComponentCreator('/docs/zeebu/psp/platformoverview/technology', '3f4'),
                exact: true,
                sidebar: "zeebuSidebar"
              },
              {
                path: '/docs/zeebu/psp/process',
                component: ComponentCreator('/docs/zeebu/psp/process', '477'),
                exact: true,
                sidebar: "zeebuSidebar"
              },
              {
                path: '/docs/zeebu/psp/process/flowoffunds',
                component: ComponentCreator('/docs/zeebu/psp/process/flowoffunds', '9b7'),
                exact: true,
                sidebar: "zeebuSidebar"
              },
              {
                path: '/docs/zeebu/psp/process/merchantcustomerdashboard',
                component: ComponentCreator('/docs/zeebu/psp/process/merchantcustomerdashboard', '14e'),
                exact: true,
                sidebar: "zeebuSidebar"
              },
              {
                path: '/docs/zeebu/psp/process/paymentprocessorsettlement',
                component: ComponentCreator('/docs/zeebu/psp/process/paymentprocessorsettlement', '0e3'),
                exact: true,
                sidebar: "zeebuSidebar"
              },
              {
                path: '/docs/zeebu/psp/security',
                component: ComponentCreator('/docs/zeebu/psp/security', 'ee6'),
                exact: true,
                sidebar: "zeebuSidebar"
              },
              {
                path: '/docs/zeebu/psp/stakeholders',
                component: ComponentCreator('/docs/zeebu/psp/stakeholders', '0e8'),
                exact: true,
                sidebar: "zeebuSidebar"
              },
              {
                path: '/docs/zeebu/psp/whocanjoin',
                component: ComponentCreator('/docs/zeebu/psp/whocanjoin', '415'),
                exact: true,
                sidebar: "zeebuSidebar"
              },
              {
                path: '/docs/zeebu/token',
                component: ComponentCreator('/docs/zeebu/token', 'b94'),
                exact: true,
                sidebar: "zeebuSidebar"
              },
              {
                path: '/docs/zeebu/token/publicexchange',
                component: ComponentCreator('/docs/zeebu/token/publicexchange', '777'),
                exact: true,
                sidebar: "zeebuSidebar"
              },
              {
                path: '/docs/zeebu/token/tokenallocation',
                component: ComponentCreator('/docs/zeebu/token/tokenallocation', '941'),
                exact: true,
                sidebar: "zeebuSidebar"
              },
              {
                path: '/docs/zeebu/token/tokensale',
                component: ComponentCreator('/docs/zeebu/token/tokensale', '769'),
                exact: true,
                sidebar: "zeebuSidebar"
              },
              {
                path: '/docs/zeebu/token/tokonomics',
                component: ComponentCreator('/docs/zeebu/token/tokonomics', '763'),
                exact: true,
                sidebar: "zeebuSidebar"
              },
              {
                path: '/docs/zeebu/token/zeebuconsumption',
                component: ComponentCreator('/docs/zeebu/token/zeebuconsumption', '7fd'),
                exact: true,
                sidebar: "zeebuSidebar"
              },
              {
                path: '/docs/zeebu/zeebuphoenixprotocol',
                component: ComponentCreator('/docs/zeebu/zeebuphoenixprotocol', 'fa1'),
                exact: true,
                sidebar: "zeebuSidebar"
              },
              {
                path: '/docs/zeebu/zeebuphoenixprotocol/zeebuburn',
                component: ComponentCreator('/docs/zeebu/zeebuphoenixprotocol/zeebuburn', '26a'),
                exact: true,
                sidebar: "zeebuSidebar"
              },
              {
                path: '/docs/zeebuacademy',
                component: ComponentCreator('/docs/zeebuacademy', '637'),
                exact: true,
                sidebar: "zeebuSidebar"
              },
              {
                path: '/docs/zeebuacademy/zeebuairdrop',
                component: ComponentCreator('/docs/zeebuacademy/zeebuairdrop', '8cf'),
                exact: true,
                sidebar: "zeebuSidebar"
              },
              {
                path: '/docs/zeebuacademy/zeebunode',
                component: ComponentCreator('/docs/zeebuacademy/zeebunode', '3c0'),
                exact: true,
                sidebar: "zeebuSidebar"
              },
              {
                path: '/docs/zeebuacademy/zeebuprotocol',
                component: ComponentCreator('/docs/zeebuacademy/zeebuprotocol', '9af'),
                exact: true,
                sidebar: "zeebuSidebar"
              },
              {
                path: '/docs/zeebuacademy/zeebuprotocol/howtoaddstakeliquidity',
                component: ComponentCreator('/docs/zeebuacademy/zeebuprotocol/howtoaddstakeliquidity', 'c01'),
                exact: true,
                sidebar: "zeebuSidebar"
              },
              {
                path: '/docs/zeebuacademy/zeebuprotocol/howtobecomedeployer',
                component: ComponentCreator('/docs/zeebuacademy/zeebuprotocol/howtobecomedeployer', '636'),
                exact: true,
                sidebar: "zeebuSidebar"
              },
              {
                path: '/docs/zeebuacademy/zeebuprotocol/howtobuyswapzeebu',
                component: ComponentCreator('/docs/zeebuacademy/zeebuprotocol/howtobuyswapzeebu', '88f'),
                exact: true,
                sidebar: "zeebuSidebar"
              },
              {
                path: '/docs/zeebuacademy/zeebuprotocol/howtochangeblockchain',
                component: ComponentCreator('/docs/zeebuacademy/zeebuprotocol/howtochangeblockchain', '2b3'),
                exact: true,
                sidebar: "zeebuSidebar"
              },
              {
                path: '/docs/zeebuacademy/zeebuprotocol/logindashboard',
                component: ComponentCreator('/docs/zeebuacademy/zeebuprotocol/logindashboard', '56a'),
                exact: true,
                sidebar: "zeebuSidebar"
              },
              {
                path: '/docs/zeebuacademy/zeebuprotocol/stakezeebu',
                component: ComponentCreator('/docs/zeebuacademy/zeebuprotocol/stakezeebu', 'cf1'),
                exact: true,
                sidebar: "zeebuSidebar"
              },
              {
                path: '/docs/zeebuacademy/zeebuprotocol/useronboarding',
                component: ComponentCreator('/docs/zeebuacademy/zeebuprotocol/useronboarding', '97d'),
                exact: true,
                sidebar: "zeebuSidebar"
              },
              {
                path: '/docs/zeebuacademy/zeebupsp',
                component: ComponentCreator('/docs/zeebuacademy/zeebupsp', '7a0'),
                exact: true,
                sidebar: "zeebuSidebar"
              },
              {
                path: '/docs/zeebuprotocol',
                component: ComponentCreator('/docs/zeebuprotocol', '7ab'),
                exact: true,
                sidebar: "zeebuSidebar"
              },
              {
                path: '/docs/zeebuprotocol/benefits',
                component: ComponentCreator('/docs/zeebuprotocol/benefits', 'ceb'),
                exact: true,
                sidebar: "zeebuSidebar"
              },
              {
                path: '/docs/zeebuprotocol/howitwillchangeorupgrade',
                component: ComponentCreator('/docs/zeebuprotocol/howitwillchangeorupgrade', 'd39'),
                exact: true,
                sidebar: "zeebuSidebar"
              },
              {
                path: '/docs/zeebuprotocol/keyparticipants',
                component: ComponentCreator('/docs/zeebuprotocol/keyparticipants', 'a24'),
                exact: true,
                sidebar: "zeebuSidebar"
              },
              {
                path: '/docs/zeebuprotocol/keyparticipants/delegators',
                component: ComponentCreator('/docs/zeebuprotocol/keyparticipants/delegators', '7b3'),
                exact: true,
                sidebar: "zeebuSidebar"
              },
              {
                path: '/docs/zeebuprotocol/keyparticipants/deployer-och',
                component: ComponentCreator('/docs/zeebuprotocol/keyparticipants/deployer-och', '943'),
                exact: true,
                sidebar: "zeebuSidebar"
              },
              {
                path: '/docs/zeebuprotocol/keyparticipants/deployer-och/generalnode',
                component: ComponentCreator('/docs/zeebuprotocol/keyparticipants/deployer-och/generalnode', '286'),
                exact: true,
                sidebar: "zeebuSidebar"
              },
              {
                path: '/docs/zeebuprotocol/keyparticipants/deployer-och/kolnode',
                component: ComponentCreator('/docs/zeebuprotocol/keyparticipants/deployer-och/kolnode', '237'),
                exact: true,
                sidebar: "zeebuSidebar"
              },
              {
                path: '/docs/zeebuprotocol/keyparticipants/deployer-och/masternode',
                component: ComponentCreator('/docs/zeebuprotocol/keyparticipants/deployer-och/masternode', 'e26'),
                exact: true,
                sidebar: "zeebuSidebar"
              },
              {
                path: '/docs/zeebuprotocol/keyparticipants/olp',
                component: ComponentCreator('/docs/zeebuprotocol/keyparticipants/olp', '078'),
                exact: true,
                sidebar: "zeebuSidebar"
              },
              {
                path: '/docs/zeebuprotocol/roleofeachparticipants',
                component: ComponentCreator('/docs/zeebuprotocol/roleofeachparticipants', '72a'),
                exact: true,
                sidebar: "zeebuSidebar"
              },
              {
                path: '/docs/zeebuprotocol/stake',
                component: ComponentCreator('/docs/zeebuprotocol/stake', '9b2'),
                exact: true,
                sidebar: "zeebuSidebar"
              },
              {
                path: '/docs/zeebuprotocol/stake/how',
                component: ComponentCreator('/docs/zeebuprotocol/stake/how', 'af5'),
                exact: true,
                sidebar: "zeebuSidebar"
              },
              {
                path: '/docs/zeebuprotocol/stake/lockedzbu-vezbu',
                component: ComponentCreator('/docs/zeebuprotocol/stake/lockedzbu-vezbu', '4e3'),
                exact: true,
                sidebar: "zeebuSidebar"
              },
              {
                path: '/docs/zeebuprotocol/stake/penalty',
                component: ComponentCreator('/docs/zeebuprotocol/stake/penalty', 'd01'),
                exact: true,
                sidebar: "zeebuSidebar"
              },
              {
                path: '/docs/zeebuprotocol/whocanjoin',
                component: ComponentCreator('/docs/zeebuprotocol/whocanjoin', 'f19'),
                exact: true,
                sidebar: "zeebuSidebar"
              },
              {
                path: '/docs/zeebuprotocol/why',
                component: ComponentCreator('/docs/zeebuprotocol/why', '242'),
                exact: true,
                sidebar: "zeebuSidebar"
              },
              {
                path: '/docs/zeebuprotocol/zeebuflow',
                component: ComponentCreator('/docs/zeebuprotocol/zeebuflow', '3c1'),
                exact: true,
                sidebar: "zeebuSidebar"
              }
            ]
          }
        ]
      }
    ]
  },
  {
    path: '/',
    component: ComponentCreator('/', 'e5f'),
    exact: true
  },
  {
    path: '*',
    component: ComponentCreator('*'),
  },
];
