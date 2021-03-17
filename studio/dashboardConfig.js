export default {
  widgets: [
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
                  buildHookId: '60523cf02455130f413576be',
                  title: 'Sanity Studio',
                  name: 'sanity-kitchen-sink-studio-jw5cwa2j',
                  apiId: 'c856850d-cfab-4c5c-be22-56d52d0c06fa'
                },
                {
                  buildHookId: '60523cf1ff5f8012cb025f41',
                  title: 'Blog Website',
                  name: 'sanity-kitchen-sink-web-8fr3qsok',
                  apiId: '7b3e5b91-66bc-4c98-80e4-988f59ed3bbb'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/kitemonkey/sanity-kitchen-sink',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-kitchen-sink-web-8fr3qsok.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent blog posts', order: '_createdAt desc', types: ['post']},
      layout: {width: 'medium'}
    }
  ]
}
