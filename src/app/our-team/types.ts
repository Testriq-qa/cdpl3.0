// =============================
// components/our-team/types.ts
// =============================
export type TeamMember = {
    id: string;
    name: string;
    title: string;
    role: "Leadership" | "Faculty" | "Advisory" | "Operations";
    expertise: string[];
    bio: string;
    location?: string;
    avatar: string;
    linkedin?: string;
    email?: string;
    highlights?: string[];
};