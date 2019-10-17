const server = require('./server');



const port = process.env.PORT || 7777;
server.listen(port, () => console.log(`\n\t Running on port ${port}\n`));