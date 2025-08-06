// index.js
const mega = require('megajs');

// Replace with your MEGA account details
const email = 'givemesomem274@gmail.com';
const password = 'Ayabonga1';

// Initialize storage
const storage = mega.Storage({
  email: email,
  password: password,
  autoload: true,
  keepalive: false
});

// When login is successful
storage.on('ready', () => {
  console.log('✅ Logged in to MEGA!');

  // List all files/folders in the root directory
  for (const fileName in storage.files) {
    const file = storage.files[fileName];

    console.log(`📁 ${file.name} | ${file.directory ? 'Folder' : 'File'} | ${file.size || 0} bytes`);
  }
});

// Error handling
storage.on('error', (err) => {
  console.error('❌ Error logging into MEGA:', err.message || err);
});
