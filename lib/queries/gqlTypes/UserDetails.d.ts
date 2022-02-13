export interface UserDetails_me_defaultShippingAddress_country {
    __typename: "CountryDisplay";
    /**
     * Country code.
     */
    code: string;
    /**
     * Country name.
     */
    country: string;
}
export interface UserDetails_me_defaultShippingAddress {
    __typename: "Address";
    /**
     * The ID of the object.
     */
    id: string;
    firstName: string;
    lastName: string;
    companyName: string;
    streetAddress1: string;
    streetAddress2: string;
    city: string;
    postalCode: string;
    /**
     * Shop's default country.
     */
    country: UserDetails_me_defaultShippingAddress_country;
    countryArea: string;
    phone: string | null;
    /**
     * Address is user's default billing address.
     */
    isDefaultBillingAddress: boolean | null;
    /**
     * Address is user's default shipping address.
     */
    isDefaultShippingAddress: boolean | null;
}
export interface UserDetails_me_defaultBillingAddress_country {
    __typename: "CountryDisplay";
    /**
     * Country code.
     */
    code: string;
    /**
     * Country name.
     */
    country: string;
}
export interface UserDetails_me_defaultBillingAddress {
    __typename: "Address";
    /**
     * The ID of the object.
     */
    id: string;
    firstName: string;
    lastName: string;
    companyName: string;
    streetAddress1: string;
    streetAddress2: string;
    city: string;
    postalCode: string;
    /**
     * Shop's default country.
     */
    country: UserDetails_me_defaultBillingAddress_country;
    countryArea: string;
    phone: string | null;
    /**
     * Address is user's default billing address.
     */
    isDefaultBillingAddress: boolean | null;
    /**
     * Address is user's default shipping address.
     */
    isDefaultShippingAddress: boolean | null;
}
export interface UserDetails_me_addresses_country {
    __typename: "CountryDisplay";
    /**
     * Country code.
     */
    code: string;
    /**
     * Country name.
     */
    country: string;
}
export interface UserDetails_me_addresses {
    __typename: "Address";
    /**
     * The ID of the object.
     */
    id: string;
    firstName: string;
    lastName: string;
    companyName: string;
    streetAddress1: string;
    streetAddress2: string;
    city: string;
    postalCode: string;
    /**
     * Shop's default country.
     */
    country: UserDetails_me_addresses_country;
    countryArea: string;
    phone: string | null;
    /**
     * Address is user's default billing address.
     */
    isDefaultBillingAddress: boolean | null;
    /**
     * Address is user's default shipping address.
     */
    isDefaultShippingAddress: boolean | null;
}
export interface UserDetails_me_wishlist_items_edges_node_product {
    __typename: "Product";
    /**
     * The ID of the object.
     */
    id: string;
}
export interface UserDetails_me_wishlist_items_edges_node {
    __typename: "WishlistItem";
    /**
     * The ID of the object.
     */
    id: string;
    product: UserDetails_me_wishlist_items_edges_node_product;
}
export interface UserDetails_me_wishlist_items_edges {
    __typename: "WishlistItemCountableEdge";
    /**
     * The item at the end of the edge.
     */
    node: UserDetails_me_wishlist_items_edges_node;
}
export interface UserDetails_me_wishlist_items {
    __typename: "WishlistItemCountableConnection";
    edges: UserDetails_me_wishlist_items_edges[];
}
export interface UserDetails_me_wishlist {
    __typename: "Wishlist";
    /**
     * The ID of the object.
     */
    id: string;
    items: UserDetails_me_wishlist_items;
}
export interface UserDetails_me {
    __typename: "User";
    /**
     * The ID of the object.
     */
    id: string;
    email: string;
    firstName: string;
    lastName: string;
    isStaff: boolean;
    defaultShippingAddress: UserDetails_me_defaultShippingAddress | null;
    defaultBillingAddress: UserDetails_me_defaultBillingAddress | null;
    /**
     * List of all user's addresses.
     */
    addresses: (UserDetails_me_addresses | null)[] | null;
    wishlist: UserDetails_me_wishlist | null;
}
export interface UserDetails {
    /**
     * Return the currently authenticated user.
     */
    me: UserDetails_me | null;
}
