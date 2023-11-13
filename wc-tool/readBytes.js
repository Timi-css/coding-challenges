// const fs = require("fs");
// const file = "./test.txt";

// const bytesToRead = 100;

// // Read file
// // fs.readFile(file, "utf-8", (err, data) => {
// //   if (!err) {
// //     //     console.log("Data read from the file: ", data);
// //     console.log(typeof data);
// //   } else {
// //     //     console.error("Error reading this file", err);
// //   }
// // });

// // Read file bytes
// // function readBytesFromFile() {
// //   try {
// //     const fileDescriptor = fs.open(file, "r");
// //     const buffer = Buffer.alloc(bytesToRead);

// //     const bytesToRead = fs.read(fileDescriptor, buffer, 0, bytesToRead, 0);
// //     console.log(`Read ${bytesToRead.bytesToRead}  bytes from File: `);
// //     console.log(buffer.slice(0, bytesToRead.bytesToRead));

// //     fileDescriptor.close();
// //   } catch (e) {
// //     console.error("Error reading file", e);
// //   }
// // }

// fs.open(file, "r", (openErr, fileDescriptor) => {
//   if (openErr) {
//     console.error("Error opening file:", openErr);
//     return;
//   }

//   const buffer = Buffer.alloc(bytesToRead);

//   fs.read(fileDescriptor, buffer, 0, bytesToRead, 0, (readErr, bytesRead) => {
//     if (readErr) {
//       console.error("Error reading file:", readErr);
//       fs.close(fileDescriptor, (closeErr) => {
//         if (closeErr) {
//           console.error("Error closing file:", closeErr);
//         }
//       });
//       return;
//     }

//     console.log(`Read ${bytesRead.bytesRead} bytes from the file:`);
//     console.log(buffer.slice(0, bytesRead.bytesRead)); // Display the read bytes

//     fs.close(fileDescriptor, (closeErr) => {
//       if (closeErr) {
//         console.error("Error closing file:", closeErr);
//       }
//     });
//   });
// });
