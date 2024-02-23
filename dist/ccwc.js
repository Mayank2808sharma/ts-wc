"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
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
exports.CCWC = void 0;
const fs = __importStar(require("fs"));
class CCWC {
    constructor(filePath) {
        this.filePath = filePath;
    }
    readFileData() {
        return __awaiter(this, void 0, void 0, function* () {
            return new Promise((resolve, reject) => {
                fs.readFile(this.filePath, "utf-8", (err, data) => {
                    if (err) {
                        console.error("Error reading file:", err);
                        reject(err);
                    }
                    else {
                        resolve(data);
                    }
                });
            });
        });
    }
    getLineCount(data) {
        return __awaiter(this, void 0, void 0, function* () {
            return data.split("\n").length - 1;
        });
    }
    getWordCount(data) {
        return __awaiter(this, void 0, void 0, function* () {
            return data.trim().split(/\s+/).length;
        });
    }
    getCharacterCount(data) {
        return __awaiter(this, void 0, void 0, function* () {
            return data.length - 1;
        });
    }
    getFileSize() {
        return __awaiter(this, void 0, void 0, function* () {
            return new Promise((resolve, reject) => {
                fs.stat(this.filePath, (err, stats) => {
                    if (err) {
                        console.error("Error getting file size:", err);
                        reject(err);
                    }
                    else {
                        resolve(stats.size);
                    }
                });
            });
        });
    }
    printResult(option, value) {
        return __awaiter(this, void 0, void 0, function* () {
            console.log(`${value} ${option} ${this.filePath}`);
        });
    }
    process(option) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const data = yield this.readFileData();
                let result;
                switch (option) {
                    case "-l":
                        result = yield this.getLineCount(data);
                        break;
                    case "-w":
                        result = yield this.getWordCount(data);
                        break;
                    case "-m":
                        result = yield this.getCharacterCount(data);
                        break;
                    case "-c":
                        result = yield this.getFileSize();
                        break;
                    case "":
                        const lines = yield this.getLineCount(data);
                        const words = yield this.getWordCount(data);
                        const bytes = yield this.getFileSize();
                        console.log(`${lines} ${words} ${bytes} ${this.filePath}`);
                        return;
                    default:
                        console.error("Invalid option:", option);
                        return;
                }
                yield this.printResult(option, result);
            }
            catch (err) {
                console.error("Error processing file:", err);
            }
        });
    }
}
exports.CCWC = CCWC;
