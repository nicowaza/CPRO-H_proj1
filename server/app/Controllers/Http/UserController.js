'use strict'

const User = use('App/Models/User')

class UserController {

  async register({ request }) {
    const { username, firstname, lastname, avatarUrl, city }= request.all();
    console.log(username, firstname, lastname, avatarUrl, city);
    const user = await User.create({
      username,
      firstname,
      lastname,
      avatarUrl,
      city
    })
    console.log(user)
    return user
  }

  async index() {
    const users = await User.all()
    return users
  }

  async details({ params }) {
    const id = params.id
    const user = await User.find(id)
    return user
  }

  async update({ request, params }) {
    const id = params.id;
    const user = await User.find(id);
    const { username, firstname, lastname, avatarUrl, city } = request.all();
    user.username = username
    user.firstname = firstname
    user.lastname = lastname
    user.avatarUrl = avatarUrl
    user.city = city
    await user.save();
    return user;
  }

  async destroy({ params }) {
    const id = params.id;
    const user = await User.find(id);
    await user.delete()
    return user
  }
}




module.exports = UserController
