# fillschema

Objectif : éviter la pollution de documents mongodb avec des champs non désirés.
Il n'y a aucune vérification des données (elle sera effecutée par mongoose).

```javascript
const schema = {
  title: { type: String, required: true },
	slug: { type: String },
  description: { type: String }
};
const data = {
  title: 'Hello world',
  slug: 'hello-world',
  csrf_token: 'abhHfc5'
};

const schemaFilled = fillSchema(schema)(data);
console.log(schemaFilled); // -> {  title: 'Hello world', slug: 'hello-world'}
// À noter : description n'est pas null, il est inexistant
```
