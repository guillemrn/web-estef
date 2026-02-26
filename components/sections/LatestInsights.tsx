import { Container } from "@/components/ui/container"
import Image from "next/image"
import Link from "next/link"
import { SanityPost } from "@/types/sanity"
import { MoveRight } from "lucide-react"

import { client } from "@/sanity/lib/client"
import { urlForImage } from "@/sanity/lib/image"

// Option to revalidate page slightly, caching it normally
export const revalidate = 60

async function getLatestPosts(): Promise<SanityPost[]> {
    const query = `*[_type == "post"] | order(publishedAt desc)[0...3] {
    _id,
    title,
    slug,
    publishedAt,
    excerpt,
    mainImage,
    "category": "Estrategia"
  }`
    return client.fetch(query)
}

export async function LatestInsights() {
    const posts = await getLatestPosts()

    const fallbackImage = "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2426&auto=format&fit=crop"

    return (
        <section id="insights" className="bg-brand-light dark:bg-brand-wine py-12 md:py-32 transition-colors duration-500 overflow-hidden">
            <Container>
                {/* Header */}
                <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16">
                    <div className="space-y-6 max-w-2xl">
                        <span className="text-xs font-bold tracking-[0.3em] text-brand-gold uppercase">
                            Insights & Pensamiento
                        </span>
                        <h2 className="font-serif text-3xl md:text-5xl lg:text-6xl text-brand-dark dark:text-brand-light leading-tight">
                            Estrategia, código y <span className="italic text-brand-gold">negocios</span>.
                        </h2>
                    </div>

                    <div className="flex-shrink-0">
                        <Link
                            href="/blog"
                            className="group flex items-center gap-3 text-brand-wine dark:text-brand-gold font-bold tracking-widest uppercase text-xs"
                        >
                            <span>Leer todos los artículos</span>
                            <MoveRight className="transition-transform duration-300 group-hover:translate-x-2" size={16} />
                        </Link>
                    </div>
                </div>

                {/* Grid */}
                {posts && posts.length > 0 ? (
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
                        {posts.map((article: SanityPost, index: number) => (
                            <article key={article._id || index}>
                                <Link href={`/blog/${article.slug?.current || '#'}`} className="group block space-y-6">
                                    {/* Image Wrapper */}
                                    <div className="relative aspect-[16/10] rounded-2xl overflow-hidden border border-brand-dark/5 dark:border-white/5 shadow-sm">
                                        <Image
                                            src={article.mainImage ? urlForImage(article.mainImage).url() : fallbackImage}
                                            alt={article.mainImage?.alt || article.title}
                                            fill
                                            className="object-cover transition-all duration-700 group-hover:scale-110 group-hover:brightness-110"
                                        />
                                        {/* Subtle Overlay */}
                                        <div className="absolute inset-0 bg-brand-wine/5 group-hover:bg-transparent transition-colors duration-300" />
                                    </div>

                                    {/* Content */}
                                    <div className="space-y-3 px-1">
                                        <div className="flex items-center gap-2 text-[10px] font-bold tracking-[0.2em] text-brand-wine/50 dark:text-white/40 uppercase">
                                            <span>
                                                {article.publishedAt
                                                    ? new Date(article.publishedAt).toLocaleDateString('es-ES', { month: 'short', year: 'numeric' }).toUpperCase()
                                                    : 'PRÓXIMAMENTE'
                                                }
                                            </span>
                                        </div>

                                        <h3 className="font-serif text-xl md:text-2xl text-brand-wine dark:text-brand-light leading-tight group-hover:text-brand-gold transition-colors duration-300">
                                            {article.title}
                                        </h3>

                                        <p className="font-sans text-sm text-brand-dark/60 dark:text-white/60 line-clamp-2 leading-relaxed">
                                            {article.excerpt}
                                        </p>
                                    </div>
                                </Link>
                            </article>
                        ))}
                    </div>
                ) : (
                    <div className="py-12 text-center text-brand-dark/60 dark:text-white/60 font-sans">
                        <p>No hay artículos publicados aún. Entra al Estudio para crear uno.</p>
                    </div>
                )}
            </Container>
        </section>
    )
}
