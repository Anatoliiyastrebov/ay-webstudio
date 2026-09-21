import { defineConfig } from 'sanity';
import { structureTool } from 'sanity/structure';
import { schemaTypes } from './schemaTypes';

// После создания проекта на sanity.io/manage впишите projectId сюда
// и в sanity-config.js в корне сайта.
export default defineConfig({
    name: 'default',
    title: 'Portfolio CMS',
    projectId: 'YOUR_PROJECT_ID',
    dataset: 'production',
    plugins: [structureTool()],
    schema: {
        types: schemaTypes
    }
});
