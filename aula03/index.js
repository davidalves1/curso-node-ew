/**
 * 1. Obter um usuário
 * 2. Obter o número de telefone de um usuário pelo ID
 * 3. Obter o endereço do usuário pelo ID
 */

 // Por convenção no Node na função de callback o primeiro parâmetro sempre é o erro e o segundo sucesso

const util = require('util')
const getPhoneAsync = util.promisify(getPhone)

function getUser() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      return resolve({
        id: 42,
        name: 'David',
        age: 32
      })
    }, 1000)
  })
}

function getAddress(userId) {
  return new Promise((resolve, reject) => {
    if (!userId) {
      return reject(new Error('DEU RUIM, NÃO TEM O ID DO USUÁRIO'))
    }

    setTimeout(() => {
      return resolve({
        id: 13,
        street: 'Rodovia do Sol',
        number: 200
      })
    }, 1000)
  })
}

function getPhone(userId, callback) {
  setTimeout(() => {
    return callback(null, {
      id: 33,
      ddd: 27,
      number: '999993333'
    })
  }, 1000)
}

getUser()
  .then(user => {
    return getAddress(user.id)
      .then((address) => {
        return {
          user: {
            id: user.id,
            name: user.name
          },
          address
        }
      })
  })
  .then(res => {
    return getPhoneAsync(res.user.id)
      .then(phone => {
        return {
          user: res.user,
          address: res.address,
          phone
        }
      });
  })
  .then((res) => {
    console.log(`
      Nome: ${res.user.name},
      Endereço: ${res.address.street}, ${res.address.number},
      Telefone: (${res.phone.ddd}) ${res.phone.number}
    `)
  })
  .catch(err => console.error('DEU RUIM', err))
