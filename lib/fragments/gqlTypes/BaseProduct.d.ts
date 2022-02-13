import { ProductMediaType } from "./../../gqlTypes/globalTypes";
export interface BaseProduct_thumbnail {
    __typename: "Image";
    /**
     * The URL of the image.
     */
    url: string;
    /**
     * Alt text for an image.
     */
    alt: string | null;
}
export interface BaseProduct_thumbnail2x {
    __typename: "Image";
    /**
     * The URL of the image.
     */
    url: string;
}
export interface BaseProduct_media {
    __typename: "ProductMedia";
    /**
     * The ID of the object.
     */
    id: string;
    /**
     * The URL of the media.
     */
    url: string;
    alt: string;
    type: ProductMediaType;
}
export interface BaseProduct {
    __typename: "Product";
    /**
     * The ID of the object.
     */
    id: string;
    name: string;
    slug: string;
    seoDescription: string | null;
    /**
     * Whether the product is available for purchase.
     */
    isAvailableForPurchase: boolean | null;
    /**
     * Date when product is available for purchase.
     */
    availableForPurchase: any | null;
    seoTitle: string | null;
    /**
     * The main thumbnail for a product.
     */
    thumbnail: BaseProduct_thumbnail | null;
    /**
     * The main thumbnail for a product.
     */
    thumbnail2x: BaseProduct_thumbnail2x | null;
    /**
     * List of media for the product.
     */
    media: BaseProduct_media[] | null;
}
