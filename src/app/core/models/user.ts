import { Role } from "./role"

export interface User {
    id: number
    email: string
    firstName: string
    createdDay: string
    lastName: string
    activated: boolean
    imageUrl: string
    role: Role[]
}