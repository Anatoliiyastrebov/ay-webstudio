// Локализованные типы полей — DE / EN / RU (немецкий обязателен, это язык по умолчанию на сайте).
export const LANGS = [
    { id: 'de', title: 'Deutsch' },
    { id: 'en', title: 'English' },
    { id: 'ru', title: 'Русский' }
];

function localeFields(of) {
    return LANGS.map((lang) => ({
        name: lang.id,
        title: lang.title,
        ...of,
        validation: lang.id === 'de' && of.type !== 'array' ? (r) => r.required() : undefined
    }));
}

export const localeString = {
    name: 'localeString',
    title: 'Localized string',
    type: 'object',
    fields: localeFields({ type: 'string' })
};

export const localeText = {
    name: 'localeText',
    title: 'Localized text',
    type: 'object',
    fields: localeFields({ type: 'text', rows: 3 })
};

export const localeStringList = {
    name: 'localeStringList',
    title: 'Localized list',
    type: 'object',
    fields: localeFields({ type: 'array', of: [{ type: 'string' }] })
};

export const localeBody = {
    name: 'localeBody',
    title: 'Localized rich text',
    type: 'object',
    fields: localeFields({
        type: 'array',
        of: [
            {
                type: 'block',
                styles: [
                    { title: 'Normal', value: 'normal' },
                    { title: 'H3', value: 'h3' }
                ],
                lists: [
                    { title: 'Bullet', value: 'bullet' },
                    { title: 'Numbered', value: 'number' }
                ],
                marks: {
                    decorators: [
                        { title: 'Bold', value: 'strong' },
                        { title: 'Italic', value: 'em' }
                    ],
                    annotations: [
                        {
                            name: 'link',
                            type: 'object',
                            title: 'Link',
                            fields: [{ name: 'href', type: 'url', title: 'URL' }]
                        }
                    ]
                }
            }
        ]
    })
};
