// importing fs used in app.js into this file.

const fs = require('fs');
// creates a Promise using the JavaScript keyword new.
const writeFile = fileContent => {
    return new Promise((resolve, reject) => {
        fs.writeFile('./dist/index.html', fileContent, err => {
            // if there's an error, reject the Promise and send the error to the Promise's `.catch()`
            if (err) {
                reject(err);
                // return out of the function here to make sure the Promise doens't accidentally execute the resovle() function as well.
                return;
            }

            // if everything went well, resolve the Promise and send the successful data to the `.then()` method.
            resolve({
                ok: true,
                message: 'File created'
            });
        });
    });
};

