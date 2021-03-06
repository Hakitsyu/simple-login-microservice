import { Document } from 'mongoose';

export interface User extends Document{
    readonly id: number,
    readonly email: string,
    readonly password: string,
    readonly name: string
}