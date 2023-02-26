export default{
    name:'experiences',
    title:'Experiences',
    type: 'document',
    fields:[
        {
            name:'year',
            title:'Year',
            type:'string'
        },
        
        {
            name:'company',
            title:'Company',
            type:'string'
        },
        {
            name:'weblink',
            title:'WebLink',
            type:'string',
        },
        {
            name:'position',
            title:'Position',
            type:'string'
        },
        {
            name:'punchline',
            title:'Punchline',
            type:'string'
        },
        {
            name:'order',
            title:'Order',
            type:'string'
        },

    ],
    orderings: [
        {
          name: 'nameAsc',
          title: 'Name, 1-9',
          by: [
            {
              field: 'order',
              direction: 'asc',
            },
          ],
        },
      ],
    };