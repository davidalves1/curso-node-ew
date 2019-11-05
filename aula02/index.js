/**
 * 1. Obter um usuário
 * 2. Obter o número de telefone de um usuário pelo ID
 * 3. Obter o endereço do usuário pelo ID
 */

 // Por convenção no Node na função de callback o primeiro parâmetro sempre é o erro e o segundo sucesso

function getUser(callback) {
  setTimeout(() => {
      return callback(null, {
        id: 42,
        name: 'David',
        age: 32
      })
  }, 1000)
}

function getAddress(userId, callback) {
  setTimeout(() => {
    return callback(null, {
      id: 13,
      street: 'Rodovia do Sol',
      number: 200
    })
  }, 1000)
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

getUser(function resolveUser(error, user) {
  if (error) {
    console.log('Deu ruim no usuário! :(', error)
    return
  }

  getAddress(user.id, function resolvePhone(error1, address) {
    if (error1) {
      console.log('Deu ruim no endereço! :(', error1)
      return
    }

    getPhone(user.id, function resolvePhone(error2, phone) {
      if (error2) {
        console.log('Deu ruim no telefone! :(', error2)
        return
      }

      console.log(`
        Nome: ${user.name},
        Endereço: ${address.street}, ${address.number},
        Telefone: (${phone.ddd}) ${phone.number}
      `)
    })
  })
})
