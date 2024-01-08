export type ListT = {
    id:String,
    name:String,
    tags:String[],
    createdBy: User,
    CreatedAt: Date,
    status:boolean,
    isClosed: boolean,
    tasks: Task[],


}
export type User = {}
export type Task = {}


