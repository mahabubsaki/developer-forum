export default interface IUserSlice {
    user: IUser | null;
    loading: boolean;
}


export interface IUser {
    name: string;
    email: string;
    uid: string;
}
