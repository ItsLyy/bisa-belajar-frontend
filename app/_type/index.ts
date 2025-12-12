export interface IUser {
    id: string;
    name: string;
    email: string;
    password: string;
    latitude: number;
    longitude: number;
    score: number;
    avatar_path?: string;
    bio?: string;
    skills: ISkill[]
    timestamps: string;
}

export interface ICourse {
    id: string;
    title: string;
    description: string;
    image_url: string;
    owner: IUser;
    skills: ISkill[];
    created_at: string;
    updated_at: string;
}

export interface IPost {
    id: string;
    user: IUser;
    threads: IPost[];
    title: string;
    content: string;
    photo_url?: string;
    course?: ICourse;
    created_at: string;
    updated_at: string;
}

export interface ISkill {
    id: string;
    name: string;
    category: string;
    description: string;
    created_at: string;
    updated_at: string;
}
