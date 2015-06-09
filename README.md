# Repose

> A Simple REST API for tinkering with front-end frameworks

I like tinkering with front-end frameworks, and I found myself writing the same, simple REST API each time. It was always the thinnest possible server, but I didn't want to write it every time, so I packaged it up here.

## Install

    npm install repose

## Usage

There's one function: `repose`. It needs a single parameter: the name of your API's model. It returns an express server object.

    var repose = require('repose');

    var app = repose('animals');

    app.listen(3000);

This creates a server with the these routes:

- `GET /api/animals`
- `GET /api/animals/<id>`
- `POST /api/animals`
- `PUT /api/animals/<id>`
- `DELETE /api/animals/<id>`

This will work perfectly with Backbone (et al.):

    var Animals = Backbone.Collection.extend({
        url: '/api/animals'  
    });

## The Public Folder

A Repose "app" will serve the `./public` directory by default. If you want to change that, pass the path as a second parameter (a relative path will do).

    var app = repose('animals', './myPublicFolder');

## TODO

Things I might do in the future:

- add tests
- use Node's native HTTP Server instead of Express
- add options like preloading data and namespacing options
