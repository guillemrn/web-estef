import { Container } from "@/components/ui/container"
import { Navbar } from "@/components/layout/Navbar"
import { Footer } from "@/components/layout/Footer"
import Image from "next/image"
import Link from "next/link"
import { client } from "@/sanity/lib/client"
import { urlForImage } from "@/sanity/lib/image"
import { SanityPost } from "@/types/sanity"

export const metadata = {
    title: "Blog | Estefanía García",
    description: "Estrategia, código y negocios para emprendedores y marcas High-Ticket.",
}

export const revalidate = 60

async function getAllPosts(): Promise<SanityPost[]> {
    const query = `*[_type == "post"] | order(publishedAt desc) {
    _id,
    title,
    slug,
    publishedAt,
    excerpt,
    mainImage,
    author
  }`
    return client.fetch(query)
}

export default async function BlogIndex() {
    const posts = await getAllPosts()
    const fallbackImage = "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2426&auto=format&fit=crop"

    return (
        <main className="flex min-h-screen flex-col bg-brand-light dark:bg-brand-wine transition-colors duration-500">
            <Navbar />

            <section className="pt-40 pb-20 mt-12 overflow-hidden flex-1">
                <Container>
                    <div className="space-y-6 mb-16 text-center max-w-2xl mx-auto">
                        <div className="mx-auto rounded-full border w-fit border-brand-dark/20 px-4 py-1.5 text-[10px] font-bold uppercase tracking-[0.2em] text-brand-dark backdrop-blur-sm dark:border-brand-champagne/20 dark:text-brand-champagne sm:text-xs">
                            Publicaciones
                        </div>
                        <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl text-brand-dark dark:text-brand-light leading-tight">
                            El <span className="italic text-brand-gold">Blog</span>.
                        </h1>
                        <p className="font-sans text-lg text-brand-dark/70 dark:text-white/70">
                            Estrategia web, desarrollo y negocios High-Ticket.
                        </p>
                    </div>

                    {posts && posts.length > 0 ? (
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12">
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

                                            <p className="font-sans text-sm text-brand-dark/60 dark:text-white/60 line-clamp-3 leading-relaxed">
                                                {article.excerpt}
                                            </p>
                                        </div>
                                    </Link>
                                </article>
                            ))}
                        </div>
                    ) : (
                        <div className="py-20 text-center text-brand-dark/60 dark:text-white/60 font-sans">
                            <p>No hay artículos publicados aún.</p>
                        </div>
                    )}
                </Container>
            </section>

            <Footer />
        </main>
    )
}
