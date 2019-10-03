import { addUser, getUsers } from './users';

function main() {
  addUser({ name: 'nekobato' })
    .then(() => getUsers())
    .then((data: any) => {
      console.log(data);
      process.exit(0);
    })
    .catch((err: Error) => {
      console.error(err);
      process.exit(1);
    });
}

main();
