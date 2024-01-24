export type NavlinksProps = {
    title: string;
    path: string;
};

export type PostProps = {
    id: number;
    title: string;
    params: string;
    desc: string;
    img?: string;
    slug: string;
    category: string;
    createdAt: Date;
}

export type PostUserProps = {
    username: string;
    createdAt: Date;
    userId: number;
    img: string;
}