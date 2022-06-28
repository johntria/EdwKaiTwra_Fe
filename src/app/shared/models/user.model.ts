interface User {
    id: number,
    email: string,
    firstName: string;
    lastName: string;
    createdDate: string;
    imageUrl: string;
    roles: Role[];
}