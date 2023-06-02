# deeplink-web

Web server to test deep link

## Setup

### Webserver

```sh
npm i
```

### Ngrok

You need ngrok to expose your local server to internet.

```sh
brew install ngrok
```

### Running Application

Start node server

```sh
npx nodemon
```

Start ngrok tunnel

```sh
ngrok http 3000 # expose local server to world wide web
```
