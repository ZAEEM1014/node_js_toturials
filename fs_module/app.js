// fileOperations.js
const fs = require('fs');

// ---------- ASYNC EXAMPLES ----------
console.log("=== ASYNC OPERATIONS ===");

// 1. Write (Async)
fs.writeFile('example.txt', 'Hello, Async World!', (err) => {
  if (err) throw err;
  console.log('File written (Async)');

  // 2. Append (Async)
  fs.appendFile('example.txt', '\nAppended text (Async)', (err) => {
    if (err) throw err;
    console.log('File appended (Async)');

    // 3. Read (Async)
    fs.readFile('example.txt', 'utf8', (err, data) => {
      if (err) throw err;
      console.log('File content (Async):\n', data);

      // 4. Delete (Async)
      fs.unlink('example.txt', (err) => {
        if (err) throw err;
        console.log('File deleted (Async)');
      });
    });
  });
});

// ---------- SYNC EXAMPLES ----------
console.log("\n=== SYNC OPERATIONS ===");

try {
  // 1. Write (Sync)
  fs.writeFileSync('example_sync.txt', 'Hello, Sync World!');
  console.log('File written (Sync)');

  // 2. Append (Sync)
  fs.appendFileSync('example_sync.txt', '\nAppended text (Sync)');
  console.log('File appended (Sync)');

  // 3. Read (Sync)
  const dataSync = fs.readFileSync('example_sync.txt', 'utf8');
  console.log('File content (Sync):\n', dataSync);

  // 4. Delete (Sync)
  fs.unlinkSync('example_sync.txt');
  console.log('File deleted (Sync)');
} catch (err) {
  console.error(err);
}
