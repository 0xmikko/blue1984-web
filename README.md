# Blue1984: Web client
### Twitter without censorship

![1984v2 008](https://user-images.githubusercontent.com/26343374/83402867-3f7fe600-a410-11ea-9b57-af6149521fff.jpeg)

This anti-censorship app for twitter was designed from scratch especially for Bluzelle hackathon.

Find more information, backend & mobile apps: https://github.com/MikaelLazarev/blu1984

## How to install 

1. Go to /web folder
2. Install all node modules with ```yarn``` or ```npm i```
3. Open ./config.ts and provide server address:
```
export const BACKEND_ADDR = 'http://192.168.0.47:4000';

export const SSO_ADDR = 'http://192.168.0.47:4000';
```
4. Start developer server with ```yarn start``` or ```npm run start```

