import readline from "readline/promises";

export function criarInterface() {
  return readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });
}