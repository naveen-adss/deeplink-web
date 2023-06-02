# deeplink-web

Web server to test deep link

## Setup

### Webserver

```sh
npm i
```

### Code

Update `public/.well-know/assetlinks.json` with android applications package id and sha256 signature. You can obtain it by running the below command provided **EAS (Expo application services)**. The command will prompt you to select a build profile. Select `development`.

```sh
npx eas credentials --android
```

Replace `package_name` and `sha256_cert_fingerprints` placeholder values with credentials obtained from running the above command.

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
