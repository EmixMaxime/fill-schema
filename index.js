/**
 * fillSchema : give a schema and execute the returns function with data to fill the schema
 * @param  {Object} schema
 */
const fillSchema = (schema) => {
  const fieldsSchema = Object.keys(schema);

  return (data) => {
    const fillData = {};
    // data = { title: 'lol', description: 'lol' }
    const dataFields = Object.keys(data); // ['title', 'description']
    dataFields.forEach(df => fieldsSchema.includes(df) ? fillData[df] = data[df] : '' );
    return fillData;
  }

};

module.exports = fillSchema;
