export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'rmasonh18/sanity-angular-tailwindcss-website'
      }
    },
    { name: 'structure-menu' },
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '62e3837958ca714fca743e09',
                  title: 'Sanity Studio',
                  name: 'sanity-angular-tailwindcss-website-studio-skan5483',
                  apiId: 'e3c7885a-2640-42a4-ade2-89f3ae854f46'
                },
                {
                  buildHookId: '62e38379d2846950f21aaf3c',
                  title: 'Website',
                  name: 'sanity-angular-tailwindcss-website-web-guh3i1di',
                  apiId: '799e0ea5-d0a3-467f-87dc-c08a1b0e26e6'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/rmasonh18/sanity-angular-tailwindcss-website',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-angular-tailwindcss-website-web-guh3i1di.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recently edited', order: '_updatedAt desc', limit: 10, types: ['page']},
      layout: {width: 'medium'}
    }
  ]
}
