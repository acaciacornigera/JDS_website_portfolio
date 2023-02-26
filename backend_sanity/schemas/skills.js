export default {
    name: 'skills',
    title: 'Skills',
    type: 'document',
    fields: [
      {
        name: 'name',
        title: 'Name',
        type: 'string',
      },
      {
        name: 'bgColor',
        title: 'BgColor',
        type: 'string',
      },
      {
        name: 'icon',
        title: 'Icon',
        type: 'image',
        options: {
          hotspot: true,
        },
      },
      {
        name: 'level',
        title: 'Level',
        type: 'array',
        of: [
          {
            type: 'reference',
            to: [
              { type: 'skillsLevel' },
            ],
          },
        ],
      },
    ],
    orderings: [
      {
        title: 'Name, A-Z',
        name: 'nameAsc',
        by: [
          {
            field: 'name',
            direction: 'asc',
          },
        ],
      },
    ],
  };
  