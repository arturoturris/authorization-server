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

Before using this authentication server you need:

1. Create a public / private key pair for signing and verifying the jtw's.

   - The private key has to be stored one directory above _server.js_.
   - The public key has to be stored in the resource server and serve as a _public secret_ while doing jwt's verification.

2. Define the following _environment variables_:

- FIREBASE_ENDPOINT -> URL of the real time database (firebase) to work
- JWT_AUDIENCE -> URI of the audience allowed to use the jwt
- JWT_ISSUER -> Name of the organization that issued the jwt
- JWT_EXPIRES_IN -> Seconds after the jwt will be invalid

**Routes**

| Route  | Method | Params             | Response                                                   |
| ------ | ------ | ------------------ | ---------------------------------------------------------- |
| /login | GET    | { user, password } | onFail -> { code, message }, onSuccess -> { access_token } |
