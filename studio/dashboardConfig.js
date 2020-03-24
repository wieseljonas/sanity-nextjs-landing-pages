export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-nextjs-landing-pages'
      }
    },
    {name: 'structure-menu'},
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
                  buildHookId: '5e79e56ff33ec7d8c7647263',
                  title: 'Sanity Studio',
                  name: 'sanity-nextjs-landing-pages-studio-x1j6bmyn',
                  apiId: 'ea0ace5c-f4a8-4e94-b2a0-886ce0992866'
                },
                {
                  buildHookId: '5e79e56f8839ddf2c88439e5',
                  title: 'Landing pages Website',
                  name: 'sanity-nextjs-landing-pages-web-d6p2t35x',
                  apiId: '9a791e59-24e5-4614-ad77-1e99cb847deb'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/wieseljonas/sanity-nextjs-landing-pages',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-nextjs-landing-pages-web-d6p2t35x.netlify.com', category: 'apps'}
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
