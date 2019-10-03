import { sequelize } from './connection';

export const addUser = ({ name }: { name: string }) => {
  const uuid = '0123';
  const image_id = null;
  const created = new Date();
  const updated = new Date();
  return sequelize
    .query('INSERT into users (uuid, name, image_id, created, updated) values (?, ?, ?, ?, ?)', {
      replacements: [uuid, name, image_id, created, updated],
    })
    .then(([results, _]: any) => {
      return results;
    });
};

export const getUsers = () => {
  return sequelize.query('SELECT * from users').then(([results, _]: any) => {
    return results ;
  });
};

export const getUser = (uuid: string) => {
  return sequelize.query('SELECT * from users WHERE uuid = ?', { replacements: [uuid] }).then(([results, _]: any) => {
    return results ;
  });
};
