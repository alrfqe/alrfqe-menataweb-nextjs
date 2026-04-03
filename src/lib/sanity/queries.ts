import groq from 'groq';

export const articleListQuery = groq`
  *[_type == "article" && defined(slug.current)] | order(coalesce(publishedAt, _createdAt) desc) {
    "slug": slug.current,
    featured,
    showOnHome,
    category,
    publishedAt,
    readTime,
    title,
    excerpt,
    homeExcerpt,
    visual
  }
`;

export const articleDetailBySlugQuery = groq`
  *[_type == "article" && slug.current == $slug][0] {
    "slug": slug.current,
    featured,
    showOnHome,
    category,
    publishedAt,
    readTime,
    title,
    excerpt,
    homeExcerpt,
    visual,
    body
  }
`;

export const pricingPackagesQuery = groq`
  *[_type == "pricingPackage"] | order(order asc, _createdAt asc) {
    order,
    name,
    price,
    priceFix,
    featured,
    description,
    features,
    whatsappUrl
  }
`;

export const productSolutionsQuery = groq`
  *[_type == "productSolution" && defined(slug.current)] | order(order asc, _createdAt asc) {
    order,
    featured,
    "slug": slug.current,
    category,
    title,
    summary,
    idealFor,
    features,
    visual,
    "image": select(
      defined(image.asset) => {
        "url": image.asset->url,
        "alt": image.alt
      },
      null
    ),
    ctaUrl
  }
`;
