# ts-wc
`ts-wc` is a simple command-line utility written in TypeScript for counting bytes, lines, words, and characters in text files.

### Getting Started

Follow the steps below to get started:

1. Clone the repository using Git:

   ```bash
   git clone https://github.com/Mayank2808sharma/ts-wc
   ```
2. Change to the project directory:

   ```bash
   cd ts-wc
   ```
3. Install the Packages:

   ```bash
   npm i
   ```
4. Compile the TS File:

   ```bash
   ts -b
   ```
### Usage
```bash
node [compiledFileName] [flags] [filename]

Flags:
  -c           Outputs the numbers of bytes in the file
  -h           help for ts-wc
  -l           Outputs the numbers of lines in the file
  -m           Outputs the numbers of characters in the file
  -w           Outputs the numbers of words in the file
```
By default, ts-wc outputs the number of words, lines, bytes, and characters for the file.

#### Example: Get the number of words of a file `test.txt`

```bash
node dist/main.js -w test.txt
```