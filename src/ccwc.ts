import * as fs from "fs";

export class CCWC {
  filePath: string;

  constructor(filePath: string) {
    this.filePath = filePath;
  }

  async readFileData(): Promise<string> {
    return new Promise((resolve, reject) => {
      fs.readFile(this.filePath, "utf-8", (err, data) => {
        if (err) {
          console.error("Error reading file:", err);
          reject(err);
        } else {
          resolve(data);
        }
      });
    });
  }

  async getLineCount(data: string): Promise<number> {
    return data.split("\n").length - 1;
  }

  async getWordCount(data: string): Promise<number> {
    return data.split(/\s+/).length;
  }

  async getCharacterCount(data: string): Promise<number> {
    return data.length;
  }

  async getFileSize(): Promise<number> {
    return new Promise((resolve, reject) => {
      fs.stat(this.filePath, (err, stats) => {
        if (err) {
          console.error("Error getting file size:", err);
          reject(err);
        } else {
          resolve(stats.size);
        }
      });
    });
  }

  async printResult(option: string, value: number): Promise<void> {
    console.log(`${value} ${option} ${this.filePath}`);
  }

  async process(option: string): Promise<void> {
    try {
      const data = await this.readFileData();
      let result: number;

      switch (option) {
        case "-l":
          result = await this.getLineCount(data);
          break;
        case "-w":
          result = await this.getWordCount(data);
          break;
        case "-m":
          result = await this.getCharacterCount(data);
          break;
        case "-c":
          result = await this.getFileSize();
          break;
        case "":
          const lines = await this.getLineCount(data);
          const words = await this.getWordCount(data);
          const bytes = await this.getFileSize();
          console.log(`${lines} ${words} ${bytes} ${this.filePath}`);
          return;
        default:
          console.error("Invalid option:", option);
          return;
      }

      await this.printResult(option, result);
    } catch (err) {
      console.error("Error processing file:", err);
    }
  }
}
