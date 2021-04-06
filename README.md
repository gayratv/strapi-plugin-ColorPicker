# Strapi custom type project

## You can only manualy add custom type to collection
Open
api/testfld/models/testfld.settings.json
add :  
````
"color": {
      "type": "colorpicker",
      "columnType": "string"
    }
````

### Description 
Custom type representation based on this component:
plugins/colorpicker/admin/src/components/colorPicker

At this file :  
plugins/colorpicker/admin/src/index.js  
you need to add :  
strapi.registerField({ type: "colorpicker", Component: ColorPicker });  

colorpicker - name of my custom type
