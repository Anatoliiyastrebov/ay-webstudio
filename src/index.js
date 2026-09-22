/**
 * Точка входа для Cloudflare Workers.
 * Статику отдаёт привязка ASSETS (папка dist/), а /api/contact
 * обрабатывает наш код — форма и сайт живут на одном домене,
 * поэтому CORS для неё не нужен.
 */
import { handleContact } from '../worker/contact-handler.mjs';

export default {
    async fetch(request, env) {
        const url = new URL(request.url);
        if (url.pathname === '/api/contact') {
            return handleContact(request, env);
        }
        return env.ASSETS.fetch(request);
    }
};
