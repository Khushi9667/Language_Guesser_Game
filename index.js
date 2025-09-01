const franc = require("franc");
const langs = require("langs");
const colors = require("colors");

function detect(text) {
  if (!text || !text.trim()) {
    console.log("Please provide some text to detect. Example:".yellow);
    console.log('  node detect.js "Bonjour, comment ça va?"'.yellow);
    return;
  }

  if (text.length < 20) {
    console.log("Warning: input is short — detection may be unreliable.".yellow);
  }

  const best = franc(text);
  if (best === "und") {
    console.log("Sorry, couldn't figure it out. Try a longer sample or full sentence!".red);
  } else {
    const language = langs.where("3", best);
    console.log(`Our best guess is: ${language ? language.name : best}`.green);
  }

  if (typeof franc.all === "function") {
    const candidates = franc.all(text).slice(0, 5);
    if (candidates.length) {
      console.log("\nTop candidates:");
      candidates.forEach(([code, score], i) => {
        const lang = langs.where("3", code);
        console.log(`${i + 1}. ${lang ? lang.name : code} (${code}) — score: ${score}.blue`);
      });
    }
  }
}
if (!process.stdin.isTTY) {
  let data = "";
  process.stdin.setEncoding("utf8");
  process.stdin.on("data", chunk => data += chunk);
  process.stdin.on("end", () => detect(data.trim()));
} else {
  const input = process.argv.slice(2).join(" ");
  detect(input);
}
