import { client } from "@/sanity/lib/client";
import { Page } from "@/sanity/lib/types";
import { useEffect, useState } from "react";


export const fetchPageBySlug = async (slug:string) => {
  const query = `*[_type == "pages" && slug.current == $slug][0]{
    title,
    subTitle,
    heroImage,
    projects[] {
      title,
      description,
      techStack,
      previewImage,
      images
    }
  }`;

  const params = { slug };

  const page = await client.fetch(query, params);
  return page;
};
export const usePageBySlug = (slug: string) => {
    const [page, setPage] = useState<Page|null>(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
  
    useEffect(() => {
      const getPage = async () => {
        setLoading(true);
        try {
          const pageData = await fetchPageBySlug(slug);
          setPage(pageData);
        } catch (err) {
          setError(err as any);
        } finally {
          setLoading(false);
        }
      };
  
      if (slug) {
        getPage();
      }
    }, [slug]);
  
    return { page, loading, error };
  };