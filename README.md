# Blue1984: Web client
### Twitter without censorship

![1984v2 008](https://user-images.githubusercontent.com/26343374/83402867-3f7fe600-a410-11ea-9b57-af6149521fff.jpeg)

This anti-censorship app for twitter was designed from scratch especially for Bluzelle hackathon.

Find more information, backend & mobile apps: https://github.com/MikaelLazarev/blue1984-server

## Project repostories

Server: https://github.com/MikaelLazarev/blue1984-server (core repository)

Mobile apps: https://github.com/MikaelLazarev/blue1984-mobile

Front-end: https://github.com/MikaelLazarev/blue1984-web

Twitter scrapper microservice: https://github.com/MikaelLazarev/blue1984-scrapper

## How to install 

1. Clone this repository: ```git clone git@github.com:MikaelLazarev/blue1984-web.git```
2. Install dependencies: ```yarn``` or ```npm i```
3. Open ./src/config.ts and set up server address:
```
export const BACKEND_ADDR = 'http://192.168.0.47:4000';

```
4. Start developer server with ```yarn start``` or ```npm run start```

## Disclaimer

This application is provided "as is" and "with all faults." Me as developer makes no representations or warranties of any kind concerning the safety, suitability, lack of viruses, inaccuracies, typographical errors, or other harmful components of this software. There are inherent dangers in the use of any software, and you are solely responsible for determining whether this software product is compatible with your equipment and other software installed on your equipment. You are also solely responsible for the protection of your equipment and backup of your data, and THE PROVIDER will not be liable for any damages you may suffer in connection with using, modifying, or distributing this software product.
