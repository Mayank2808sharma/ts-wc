"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const ccwc_1 = require("./ccwc");
function main() {
    return __awaiter(this, void 0, void 0, function* () {
        if (process.argv.length !== 3 && process.argv.length !== 4) {
            console.error("Usage: node dist/main.js [-l|-w|-c|-m] <file>");
            process.exit(1);
        }
        if (process.argv[2] === "-h") {
            console.log(`Usage: node dist/main.js [-l|-w|-c|-m] <file_path>
    example-> 
    1) With Flag => node dist/main.js -l test.txt
    2) Without Flag => node dist/main.js  test.txt  => this will print lines, words and bytes.
    `);
            process.exit(0);
        }
        const filePath = process.argv[process.argv.length === 3 ? 2 : 3];
        const option = process.argv.length === 4 ? process.argv[2] : "";
        const ccwc = new ccwc_1.CCWC(filePath);
        yield ccwc.process(option);
    });
}
main();
