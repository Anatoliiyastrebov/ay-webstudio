// Sanity CMS — подключение. Пока projectId пустой, сайт работает
// на встроенном контенте (portfolio-projects.js / blog-content.js).
// projectId берётся на https://sanity.io/manage после создания проекта.
window.SANITY_CONFIG = {
    projectId: '',
    dataset: 'production',
    apiVersion: '2024-10-01',
    useCdn: true
};
