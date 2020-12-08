import create, { SetState, GetState , State } from 'zustand';

interface MyUserStore extends State{
    users: object,
    count: number
}

export default create<MyUserStore>((set: SetState<MyUserStore>, get: GetState<MyUserStore>): MyUserStore => ({
   users: [],
   count: 0,
}))