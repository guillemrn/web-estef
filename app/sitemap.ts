import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
    return [
        {
            url: 'https://www.estefaniamkt.com.mx',
            lastModified: new Date(),
            changeFrequency: 'weekly',
            priority: 1,
        },
        // Nota: Aquí en el futuro puedes mapear dinámicamente los posts de Sanity
    ]
}
