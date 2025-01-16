import { server } from './server/Server';

server.listen(process.env.PORT||3333, '0.0.0.0', () => {
  console.log(`Server running on port: ${process.env.PORT||3333}`);
});
