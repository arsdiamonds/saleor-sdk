export interface CategoryDetails_backgroundImage {
    __typename: "ResponsiveImage";
    /**
     * Alt text for an image.
     */
    alt: string | null;
    /**
     * The URL of the image.
     */
    url: string;
    /**
     * The URL of mobile version of the image.
     */
    mobileUrl: string | null;
}
export interface CategoryDetails {
    __typename: "Category";
    /**
     * The ID of the object.
     */
    id: string;
    name: string;
    slug: string;
    seoDescription: string | null;
    seoTitle: string | null;
    backgroundImage: CategoryDetails_backgroundImage | null;
    description: any | null;
}
