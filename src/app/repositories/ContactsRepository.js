const { uuid } = require('uuidv4');

const contacts = [
  {
    id: uuid(),
    name: 'Félix',
    email: 'felixvicent1306@gmail.com',
    phone: '83987081294',
    category_id: uuid(),
  },
];

class ContactsRepository {
  findAll() {
    return new Promise((resolve) => {
      resolve(contacts);
    });
  }
}

module.exports = new ContactsRepository();
