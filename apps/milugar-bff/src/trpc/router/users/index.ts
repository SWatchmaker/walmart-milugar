import { router, publicProcedure } from '../..';
import { z } from 'zod';

export interface User {
  id: number;
  name: string;
  rut: string;
}
 
const userList: User[] = [
  {
    id: 1,
    name: 'KATT',
    rut: '99999999-1'
  },
];

export const userRouter = router({
  list: publicProcedure.query(() => {
    return userList;
  }),
  getById: publicProcedure
    .input(z.number())
    .query((req) => {
      return userList.find(user => user.id === req.input)
    }),
  getFirst: publicProcedure.query(() => {
    return userList.slice(0,1);
  })
});