export interface Student {
    id: string;
    username: string;
    email: string;
    password: string;
    phone: Number;
    gender: StudentGender,
}

export enum StudentGender {
    MALE = "MALE",
    FEMALE = "FEMALE",
    OTHERS = "OTHERS",
}