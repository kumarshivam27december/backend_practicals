const fs = require('fs');

// Read the contents of the JSON file
fs.readFile('db.json', 'utf8', (err, data) => {
  if (err) {
    console.error('Error reading JSON file:', err);
    return;
  }

  try {
    // Parse the JSON data
    const jsonData = JSON.parse(data);

    // Print the parsed JSON data
    console.log('Parsed JSON data:');
    console.log(jsonData);
  } catch (error) {
    console.error('Error parsing JSON data:', error);
  }
});
