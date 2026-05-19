# Language Guesser Game

A simple and interactive command-line tool built with Node.js that detects the language of a given text snippet. It uses the powerful `franc` package for language detection, `langs` to provide human-readable language names, and `colors` to present the results beautifully in the terminal.

## Features

- **Language Detection:** Accurately guesses the language of any text string.
- **Top Candidates:** Provides a list of the top 5 most likely languages along with their confidence scores.
- **Colorful Output:** Enhances readability with color-coded terminal messages (warnings in yellow, errors in red, successes in green).
- **Flexible Input:** Supports providing text via command-line arguments or standard input (piping).
- **Short Input Warning:** Alerts users if the provided text is too short for reliable detection.

## Prerequisites

Before running this project, make sure you have the following installed:
- [Node.js](https://nodejs.org/) (Version 12 or higher recommended)
- npm (comes with Node.js)

## Installation

1. Clone or download the repository to your local machine.
2. Navigate to the project directory in your terminal:
   ```bash
   cd "Language Guesser Game"
   ```
3. Install the required dependencies:
   ```bash
   npm install
   ```

## Usage

You can run the script in two ways:

### 1. Using Command Line Arguments

Pass the text you want to detect directly as an argument:

```bash
node index.js "Bonjour, comment ça va?"
```

*Output:*
```
Our best guess is: French
Top candidates:
1. French (fra) — score: 1
...
```

### 2. Using Standard Input (Piping)

You can pipe the output of another command or a file directly into the script:

```bash
echo "Hola a todos, ¿cómo están?" | node index.js
```

Or read from a file (if you are on Unix/Linux/macOS):
```bash
cat sample.txt | node index.js
```

## How It Works

1. **Input Validation:** The script checks if input is provided. If it's less than 20 characters, it shows a warning since language detection works best with longer text.
2. **Detection:** The `franc` library analyzes the text and returns a 3-letter language code (ISO 639-3). If it can't determine the language, it returns `"und"` (undetermined).
3. **Translation:** The `langs` library takes the 3-letter code and converts it into a human-readable language name (e.g., from `"fra"` to `"French"`).
4. **Display:** The results, including top candidates, are printed to the console using the `colors` library to highlight important information.

## Dependencies

- [`franc`](https://www.npmjs.com/package/franc) - Detect the language of text.
- [`langs`](https://www.npmjs.com/package/langs) - Get language names and local names from ISO 639 codes.
- [`colors`](https://www.npmjs.com/package/colors) - Get colors in your node.js console.

## License

This project is licensed under the ISC License.
