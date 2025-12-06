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
    timestamps: string;
}

export interface IPost {
    id: string;
    user: IUser;
    threads: IPost[];
    title: string;
    content: string;
    photo_url?: string;
    course?: ICourse;
    timestamps: string;
}

export interface ISkill {
    id: string;
    name: string;
    category: string;
    description: string;
    timestamps: string;
}
