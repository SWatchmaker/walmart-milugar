import { createTRPCReact } from '@trpc/react-query'
import { AppRouter } from 'milugar-bff';

const trpc = createTRPCReact<AppRouter>({});

export default trpc;