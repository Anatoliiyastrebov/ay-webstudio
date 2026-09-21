export const project = {
    name: 'project',
    title: 'Проекты (Portfolio)',
    type: 'document',
    fields: [
        {
            name: 'title',
            title: 'Название',
            type: 'localeString',
            validation: (r) => r.required()
        },
        {
            name: 'slug',
            title: 'ID (slug, идёт в project.html?id=…)',
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
            name: 'liveUrl',
            title: 'Ссылка на живую демку',
            type: 'url'
        },
        {
            name: 'previewImage',
            title: 'Превью (загрузить картинку)',
            description: 'Если загружено — используется вместо локального пути ниже.',
            type: 'image'
        },
        {
            name: 'previewPath',
            title: 'Превью: локальный путь на сайте',
            description: 'Например images/projects/friseursalon.jpg — если картинка уже лежит в репозитории.',
            type: 'string'
        },
        {
            name: 'category',
            title: 'Категория / индустрия',
            type: 'localeString'
        },
        {
            name: 'summary',
            title: 'Краткое описание',
            type: 'localeText'
        },
        {
            name: 'techStack',
            title: 'Технологии',
            type: 'array',
            of: [{ type: 'string' }]
        },
        {
            name: 'styles',
            title: 'Стилевые особенности',
            type: 'array',
            of: [{ type: 'string' }]
        },
        {
            name: 'implemented',
            title: 'Что реализовано',
            type: 'localeStringList'
        },
        {
            name: 'planned',
            title: 'Что запланировано',
            type: 'localeStringList'
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
        select: { title: 'title.de', subtitle: 'category.de', media: 'previewImage' }
    }
};
