/**
 * Точка входа для Cloudflare Pages Functions.
 * Pages сам направляет сюда запросы на /api/contact.
 * Логика общая с Workers — см. worker/contact-handler.mjs.
 */
import { handleContact } from '../../worker/contact-handler.mjs';

export const onRequest = ({ request, env }) => handleContact(request, env);
