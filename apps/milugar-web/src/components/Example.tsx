import { Button } from 'milugar-ui';
import trpc from '../trpc';

const Example = () => {
  const users = trpc.user.getFirst.useQuery();

  return <div>
    {users.data?.map(user => (
      <div>
        <p>ID: {user.id}</p>
        <p>Name: {user.name}</p>
        <p>RUT: {user.rut}</p>
      </div>
    ))}
    <Button text='Example Button' />
  </div>
}

export default Example;