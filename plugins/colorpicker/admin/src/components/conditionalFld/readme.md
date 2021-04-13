# Create Conditional Content Field
https://forum.strapi.io/t/create-conditional-content-field/280

collection called “articles”
A boolean flag
A dropdown list, populated by a related collection


Personally, I would consider overriding the relation component of the content manager (it’s the SelectWrapper) by modifying the logic that disables a field. I order to do this you can modify 2 files:

1.
/content-manager/admin/src/components/SelectWrapper/utils/select.js:

2.
You will need to make a minor update to the index.js of this component to update the dependencies array of the useMemo hook.

// Find the corresponding code for the isDisabled constant and add isFieldAllowed and isFieldReadable to the array of dependencies.
