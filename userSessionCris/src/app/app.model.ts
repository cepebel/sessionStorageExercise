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