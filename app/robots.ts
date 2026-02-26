import { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
    return {
        rules: {
            userAgent: '*',
            allow: '/',
            disallow: ['/studio/'], // No queremos que Google indexe el panel de Sanity
        },
        sitemap: 'https://www.estefaniamkt.com.mx/sitemap.xml',
    }
}
