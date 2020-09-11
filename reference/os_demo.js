const os = require('os');
const { uptime } = require('process');

// Platfrom
console.log(os.platform());

// CPU Arch
console.log(os.arch());

// CPU Core info
console.log(os.cpus());

// Free Memory
console.log(os.freemem());

// Free Memory
console.log(os.totalmem());

// Home Directory
console.log(os.homedir());

// Uptime
console.log(os.uptime());
