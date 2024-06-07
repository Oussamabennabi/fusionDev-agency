// types/sanity.ts

export type Project = {
    title: string;
    description: string;
    category: Category;
    techStack: string[];
    previewImage: SanityImage;
    images: SanityImage[];
}

export type Category = {
    name: string;
}

export type Page = {
    title: string;
    subTitle: string;
    heroImage: SanityImage;
    projects: Project[];
    slug: string;
}

export type SanityImage = {
    _type: 'image';
    asset: {
        _ref: string;
        _type: 'reference';
    };
}
