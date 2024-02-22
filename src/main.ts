import { CCWC } from "./ccwc";

async function main(): Promise<void> {
  if (process.argv.length !== 3 && process.argv.length !== 4) {
    console.error("Usage: node dist/main.js [-l|-w|-c|-m] <file>");
    process.exit(1);
  }

  if(process.argv[2]==="-h"){
    console.log(`Usage: node dist/main.js [-l|-w|-c|-m] <file_path>
    example-> 
    1) With Flag => node dist/main.js -l test.txt
    2) Without Flag => node dist/main.js  test.txt  => this will print lines, words and bytes.
    `);
    process.exit(0);
  }
  const filePath = process.argv[process.argv.length === 3 ? 2 : 3];
  const option = process.argv.length === 4 ? process.argv[2] : "";
  
  const ccwc = new CCWC(filePath);
  await ccwc.process(option);
}

main();
