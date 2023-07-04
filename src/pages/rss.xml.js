/* Esta espacio es para el SEO debes realizar las modificaciones necesarias adaptadas a tu proyecto */

/* 

import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';

export async function get(context) {
  const posts = await getCollection('tips');
  return rss({
    title: 'El titulo de tu Web',
    description: 'La descripción',
    site: context.site,
    items: posts.map((post) => ({
      ...post.data,
      link: `/post/${post.slug}/`,
    })),
  });
}

*/

/* 

ATENCIÓN!!!

Asegurense de usar pubDate y title en sus archivos markdown caso contrario podrian tener problemas al integrar @astrojs/rss

*/