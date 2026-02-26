import { Container } from "@/components/ui/container"
import { Navbar } from "@/components/layout/Navbar"
import { Footer } from "@/components/layout/Footer"
import Image from "next/image"
import { client } from "@/sanity/lib/client"
import { urlForImage } from "@/sanity/lib/image"
import { PortableText } from "@portabletext/react"
import { notFound } from "next/navigation"

export const revalidate = 60

async function getPost(slug: string) {
    const query = `*[_type == "post" && slug.current == $slug][0] {
    title,
    mainImage,
    publishedAt,
    body,
    author,
    excerpt
  }`
    return client.fetch(query, { slug })
}

export default async function PostPage({ params }: { params: { slug: string } }) {
    const post = await getPost(params.slug)

    if (!post) {
        notFound()
    }

    const fallbackImage = "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2426&auto=format&fit=crop"

    return (
        <main className="flex min-h-screen flex-col bg-brand-light dark:bg-brand-wine transition-colors duration-500">
            <Navbar />

            <article className="pt-40 pb-20 mt-12 flex-1">
                <Container className="max-w-4xl">
                    {/* Post Header */}
                    <div className="space-y-8 mb-16 px-1">
                        <div className="flex items-center gap-4 text-[10px] font-bold tracking-[0.2em] text-brand-wine/50 dark:text-white/40 uppercase">
                            <span>{post.author || "Estefanía García"}</span>
                            <span>•</span>
                            <span>
                                {post.publishedAt
                                    ? new Date(post.publishedAt).toLocaleDateString('es-ES', { day: 'numeric', month: 'long', year: 'numeric' })
                                    : 'Próximamente'
                                }
                            </span>
                        </div>

                        <h1 className="font-serif text-4xl md:text-6xl text-brand-dark dark:text-brand-light leading-[1.1] text-balance">
                            {post.title}
                        </h1>

                        <p className="font-sans text-xl text-brand-dark/70 dark:text-white/70 leading-relaxed max-w-2xl border-l-2 border-brand-gold pl-6">
                            {post.excerpt}
                        </p>
                    </div>

                    {/* Main Image */}
                    <div className="relative aspect-[21/9] rounded-3xl overflow-hidden mb-16 border border-brand-dark/5 dark:border-white/5 shadow-2xl">
                        <Image
                            src={post.mainImage ? urlForImage(post.mainImage).url() : fallbackImage}
                            alt={post.mainImage?.alt || post.title}
                            fill
                            className="object-cover"
                            priority
                        />
                    </div>

                    {/* Body Content */}
                    <div className="prose prose-lg md:prose-xl dark:prose-invert prose-brand max-w-none font-sans text-brand-dark/80 dark:text-white/80 
            prose-headings:font-serif prose-headings:text-brand-wine dark:prose-headings:text-brand-gold
            prose-p:leading-relaxed prose-p:mb-8
            prose-img:rounded-2xl
            mx-auto lg:px-12
          ">
                        <PortableText
                            value={post.body}
                            components={{
                                types: {
                                    image: ({ value }: any) => (
                                        <div className="relative aspect-video my-12 rounded-2xl overflow-hidden">
                                            <Image
                                                src={urlForImage(value).url()}
                                                alt={value.alt || "Imagen del artículo"}
                                                fill
                                                className="object-cover"
                                            />
                                        </div>
                                    )
                                }
                            }}
                        />
                    </div>
                </Container>
            </article>

            <Footer />
        </main>
    )
}
