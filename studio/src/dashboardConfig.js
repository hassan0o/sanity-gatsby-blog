export default {
  widgets: [
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
                  buildHookId: '5f44f52882dc02f147a7a9fd',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-blog-studio-7uyukqsp',
                  apiId: 'b816fb59-31e3-484a-a7d8-e60b2df8f61b'
                },
                {
                  buildHookId: '5f44f5289444de913539dbd4',
                  title: 'Blog Website',
                  name: 'sanity-gatsby-blog-web-6c79bq6f',
                  apiId: '0fcdd8be-726d-43e7-9c3d-4e84c82aebe6'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/hassan0o/sanity-gatsby-blog',
            category: 'Code'
          },
          { title: 'Frontend', value: 'https://sanity-gatsby-blog-web-6c79bq6f.netlify.app', category: 'apps' }
        ]
      }
    },
    { name: 'project-users', layout: { height: 'auto' } },
    {
      name: 'document-list',
      options: { title: 'Recent blog posts', order: '_createdAt desc', types: ['post'] },
      layout: { width: 'medium' }
    }
  ]
}
