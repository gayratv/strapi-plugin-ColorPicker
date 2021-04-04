<br />
<p align="center">
  <img src="images/screenshot.png" alt="Logo" width="500">
  <h1 align="center">Strapi Color Picker Plugin</h1>
  <p align="center">
    Boilerplate for the development of a custom Color Picker input field for Strapi. Based on the <a href="https://github.com/strapi/foodadvisor">Strapi's Food Advisor starter</a>
    <br />
    <br />
  </p>
</p>

## 1. Clone the project

Clone the project  
https://github.com/paulgaumer/Strapi_ColorPicker_Plugin  
https://www.paulgaumer.com/blog/how-to-create-a-color-picker-plugin-for-strapi-cms

## Сгенерируй plugin
yarn run strapi generate:plugin colorpicker

## Добавь restaraunt
Добавь restaraunt через GUI

Добавь в поле attributes  
api/restaraunt/models/restaraunt.settings.json  
````
"color": {
      "type": "colorpicker",
      "columnType": "longtext"
    }
````
npm show prop-types version

## 2. Start Strapi from the ./api folder

`Path: /api`:

Run the following from your command line:

```
cd api && yarn && yarn run seed && yarn develop
```

Then, follow [Step 3. Create an admin user](https://strapi.io/documentation/3.0.0-beta.x/getting-started/quick-start-tutorial.html#_3-create-an-admin-user) to create an `Administrator`.

You will find more information and options in the [**api** README](./api).

## 3. Start the front-end from the ./client folder

`Path: /client`:

Run the following from your command line:

```
cd client && yarn install && yarn start
```

You will find more information and options in the [**client** README](./client).
