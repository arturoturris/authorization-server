# Description

Authorization server that returns a jwt after a successful login. A realtime database (firebase) is needed.

The database must have the following structure.

- usuarios
  - [username]: [md5 password]
- usuarios_info
  - [username]
    - correo: [valid email]
    - nombre: [name]
    - rol: [ventas | almacen | rh]
    - telefono: [valid phone number]

## Installation

```console
    npm install
```

## Usage

1. Define the following _environment variables_:

- FIREBASE_ENDPOINT -> URL of the real time database (firebase) to work
- JWT_SECRET -> Secret phrase or text for symmetric encryption
- JWT_AUDIENCE -> URI of the audience allowed to use the jwt
- JWT_ISSUER -> Name of the organization that issued the jwt
- JWT_EXPIRES_IN -> String representing the time after the jwt will be invalid ('60s','10m','2h)

**Routes**

| Route  | Method | Params             | Response                                                   |
| ------ | ------ | ------------------ | ---------------------------------------------------------- |
| /login | GET    | { user, password } | onFail -> { code, message }, onSuccess -> { access_token } |
