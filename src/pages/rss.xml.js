// import rss from '@astrojs/rss'
// import { getCollection } from 'astro:content'

// export async function get(context){
//     const posts = await getCollection('tips'),
//     return rss({
//         title: 'RenPi - Agencia Digital',
//         description: 'Somos una Agencia Digital joven, creativa e innovadora dedicada a ayudar a nuestros clientes a lograr sus objetivos en línea.',
//         site: context.site,
//         items: posts.map((post) => ({
//             ...posts.data,
//             link: `/posts/${post.slug}/`,
//         }))
//     })

// }