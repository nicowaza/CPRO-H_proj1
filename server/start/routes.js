'use strict'

/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| Http routes are entry points to your web application. You can create
| routes for different URL's and bind Controller actions to them.
|
| A complete guide on routing is available here.
| http://adonisjs.com/docs/4.0/routing
|
*/

/** @type {typeof import('@adonisjs/framework/src/Route/Manager')} */
const Route = use('Route')

Route.post('/api/register', 'UserController.register')

Route.get('/api/users', 'UserController.index')

Route.get('/api/users/:id', 'UserController.details')

Route.put('/api/users/:id/edit', 'UserController.update')

Route.delete('/api/users/:id', 'UserController.destroy')