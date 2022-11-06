const mongoose = require('mongoose');

async function Main() {
  await mongoose.connect('mongodb://localhost:27017/mongoose');
  console.log('conectou o MongoDB com mongoose');
}

Main().catch((err) => {
  console.log(err);
});

module.exports = mongoose;
