const date = new Date().toLocaleDateString('en-GB', {
  hour: "2-digit",
  minute: "2-digit"
});
const nameFile = process.argv[1].match(/\w+.js$/g)[0];
console.log('date:', date);
console.log('file:', nameFile);