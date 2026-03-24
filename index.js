const encodedString = Buffer.from(process.env.DEPLOY_TOKEN).toString('base64');
console.log(encodedString); // Output: SGVsbG8gV29ybGQ=
