export interface New {
    id: number;
    date: string;
    date_gmt: string;
    guid: {
        rendered: string;
    };
    modified: string;
    modified_gmt: string;
    slug: string;
    status: string;
    type: string;
    link: string;
    title: {
        rendered: string;
    };
    content: {
        rendered: string;
        protected: boolean;
    };
    excerpt: {
        rendered: string;
        protected: boolean;
    };
    author: number;
    featured_media: number;
    comment_status: string;
    ping_status: string;
    sticky: boolean;
    template: string;
    format: string;
    meta: {
        _acf_changed: boolean;
        footnotes: string;
    };
    categories: number[];
    tags: any[];
    acf: any[];
    aioseo_notices: any[];
    _links: {
        self: { href: string }[];
        collection: { href: string }[];
        about: { href: string }[];
        author: { embeddable: boolean; href: string }[];
        replies: { embeddable: boolean; href: string }[];
    };
}
