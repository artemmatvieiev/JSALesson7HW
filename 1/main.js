console.log('date:', new Date().toLocaleDateString('en-GB', {
    hour: "2-digit",
    minute: "2-digit"
  })
);
console.log('run file:',process.argv[1]);