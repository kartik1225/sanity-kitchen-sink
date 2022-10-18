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
                  buildHookId: '634e86bf49e887516653b003',
                  title: 'Sanity Studio',
                  name: 'sanity-kitchen-sink-studio-r8tu4n3s',
                  apiId: '278b388b-c6dc-4fd1-8936-b9f91ca5cd96'
                },
                {
                  buildHookId: '634e86bfae5bfd54888537c7',
                  title: 'Blog Website',
                  name: 'sanity-kitchen-sink-web-kt7k9xh1',
                  apiId: '33891879-21f3-469e-864e-a5c3d6861c4e'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/kartik1225/sanity-kitchen-sink',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-kitchen-sink-web-kt7k9xh1.netlify.app', category: 'apps'}
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
