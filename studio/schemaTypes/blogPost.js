export const blogPost = {
    name: 'blogPost',
    title: 'Блог',
    type: 'document',
    fields: [
        {
            name: 'title',
            title: 'Заголовок',
            type: 'localeString',
            validation: (r) => r.required()
        },
        {
            name: 'slug',
            title: 'ID (slug, используется как якорь #…)',
            type: 'slug',
            options: { source: 'title.de' },
            validation: (r) => r.required()
        },
        {
            name: 'order',
            title: 'Порядок (меньше = выше)',
            type: 'number',
            initialValue: 100
        },
        {
            name: 'meta',
            title: 'Подпись над заголовком (например «Notiz · Preisrahmen»)',
            type: 'localeString'
        },
        {
            name: 'readMin',
            title: 'Время чтения, минут',
            type: 'number',
            initialValue: 5
        },
        {
            name: 'body',
            title: 'Текст статьи',
            type: 'localeBody'
        }
    ],
    orderings: [
        {
            title: 'По порядку',
            name: 'orderAsc',
            by: [{ field: 'order', direction: 'asc' }]
        }
    ],
    preview: {
        select: { title: 'title.de', subtitle: 'meta.de' }
    }
};
