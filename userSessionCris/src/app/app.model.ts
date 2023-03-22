export interface Iuser{
    _id?: number,
    name?: string,
    surname?: string,
    courses?: number[],
}

export interface Icourses{
    _id: number,
    type: string,
    name: string,
    semester: number
}

export interface courses{
    courseId: string
    courseName: string
    courseDescription: string
    courseType: string
    etsCredits: number
    semester: number
    vacancies: number
}

export interface users{
    userId?: string
    username?: string
    password?: string
    email?: string
    budget?: number
    createdAt?: string
    updatedAt?: string
}

export interface Ijoin{
    joinId: string
    courseId: string
    userId: string
}