export interface SanityPost {
    _id: string;
    title: string;
    slug: {
        current: string;
    };
    publishedAt?: string;
    excerpt?: string;
    mainImage?: {
        asset: {
            _ref: string;
            _type: string;
        };
        alt?: string;
    };
    author?: string;
    body?: any; // PortableText body can be complex, but usually any is fine for its root value if handled by PortableText component
}
