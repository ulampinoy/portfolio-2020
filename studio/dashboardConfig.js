export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gatsby-portfolio'
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
                  buildHookId: '5e01d683ac0a3ca68b65cc86',
                  title: 'Sanity Studio',
                  name: 'portfolio-2020-studio',
                  apiId: '63e04a2d-076b-4048-9784-5cf224ebb164'
                },
                {
                  buildHookId: '5e01d683ac0a3c62f665cca6',
                  title: 'Portfolio Website',
                  name: 'portfolio-2020',
                  apiId: '43de2efa-11a0-4dfb-b8ec-d66c07f7ce58'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/ulampinoy/portfolio-2020',
            category: 'Code'
          },
          {
            title: 'Frontend',
            value: 'https://portfolio-2020.netlify.com',
            category: 'apps'
          }
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent projects', order: '_createdAt desc', types: ['sampleProject']},
      layout: {width: 'medium'}
    }
  ]
}
