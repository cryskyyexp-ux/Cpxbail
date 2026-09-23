import makeWASocket from './Socket/index.js';
import chalk from "chalk";

// === BANNER ASCII CPX (kecil) ===
console.log(chalk.hex("#00fff7")("  ██████╗ ██████╗ ██╗  ██╗"));
console.log(chalk.hex("#00c2ff")(" ██╔════╝ ██╔══██╗╚██╗██╔╝"));
console.log(chalk.hex("#0099ff")(" ██║      ██████╔╝ ╚███╔╝ "));
console.log(chalk.hex("#0077ff")(" ██║      ██╔═══╝  ██╔██╗ "));
console.log(chalk.hex("#0055ff")(" ╚██████╗ ██║      ██╔╝ ██╗"));
console.log(chalk.hex("#0033cc")("  ╚═════╝ ╚═╝      ╚═╝  ╚═╝"));

// === INFO ===
console.log(
  "\n" +
  chalk.hex("#00c2ff")("  ✦ ") +
  chalk.hex("#00fff7").bold("CpxBaileys") +
  chalk.gray(" • ") +
  chalk.hex("#ff6ec7").bold("By Cryskyy")
);

// === EXPORTS ===
export * from '../WAProto/index.js';
export * from './Utils/index.js';
export * from './Types/index.js';
export * from './Defaults/index.js';
export * from './WABinary/index.js';
export * from './WAM/index.js';
export * from './WAUSync/index.js';
export * from './Store/index.js';
export * from './Socket/ban-checker.js';
export { makeWASocket };
export default makeWASocket;
//# sourceMappingURL=index.js.map
