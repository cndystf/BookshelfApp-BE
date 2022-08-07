const { deleteBookByIdHandler } = require('./handler');
const { editBookByIdHandler } = require('./handler');
const { getBookByIdHandler } = require('./handler');
const { addBookHandler, getAllBooksHandler } = require('./handler');

const routes = [
  {
    method: 'POST',
    path: '/books',
    handler: addBookHandler, // menyimpan buku
  },
  {
    method: 'GET',
    path: '/books',
    handler: getAllBooksHandler, // menampilkan seluruh buku tapi hanya id, name, dan publisher
  },
  {
    method: 'GET',
    path: '/books/{id}',
    handler: getBookByIdHandler, // menampilkan detail buku
  },
  {
    method: 'PUT',
    path: '/books/{id}',
    handler: editBookByIdHandler, // mengubah data buku
  },
  {
    method: 'DELETE',
    path: '/books/{id}',
    handler: deleteBookByIdHandler, // menghapus buku
  },
];

module.exports = routes;
