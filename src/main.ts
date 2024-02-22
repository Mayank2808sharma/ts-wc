import { CCWC } from "./ccwc";

async function main(): Promise<void> {
  if (process.argv.length !== 3 && process.argv.length !== 4) {
    console.error("Usage: ts-node main.ts [-l|-w|-c] <file>");
    process.exit(1);
  }

  const filePath = process.argv[process.argv.length === 3 ? 2 : 3];
  const option = process.argv.length === 4 ? process.argv[2] : "";
  
  const ccwc = new CCWC(filePath);
  await ccwc.process(option);
}

main();
