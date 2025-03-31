const esbuild = require('esbuild');
const JavaScriptObfuscator = require('javascript-obfuscator');
const fs = require('fs');

const args = process.argv.slice(2); // Capture command-line arguments
const isWatch = args.includes('--watch'); // Check if `--watch` is passed

async function build() {
    const context = await esbuild.context({
        entryPoints: ['./src/main.js'], // Main file importing all others
        bundle: true,
        outfile: './dist/index.js', // Output file
        minify: true, // Optional: Minify for production
        sourcemap: true, // Optional: Generate sourcemaps
        // drop: ['debugger', 'console'],
        // legalComments: 'none',
        // treeShaking: true,
        // format: 'iife',
        // target: ['es2020']
    });

    if (isWatch) {
        console.log("Watching for changes...");
        await context.watch();
    } else {
        console.log("Building...");
        await context.rebuild(); // Build once
        
        // Obfuscate the output
        console.log("Obfuscating...");
        const code = fs.readFileSync('./dist/index.js', 'utf8');
        const obfuscationResult = JavaScriptObfuscator.obfuscate(code, {
            compact: true,
            controlFlowFlattening: true,
            controlFlowFlatteningThreshold: 0.75,
            deadCodeInjection: true,
            deadCodeInjectionThreshold: 0.4,
            debugProtection: true,
            debugProtectionInterval: 4000,
            disableConsoleOutput: true,
            identifierNamesGenerator: 'hexadecimal',
            log: false,
            numbersToExpressions: true,
            renameGlobals: false,
            rotateStringArray: true,
            selfDefending: true,
            shuffleStringArray: true,
            splitStrings: true,
            splitStringsChunkLength: 10,
            stringArray: true,
            stringArrayEncoding: ['base64'],
            stringArrayThreshold: 0.75,
            transformObjectKeys: true,
            unicodeEscapeSequence: false
        });
        
        fs.writeFileSync('./dist/index.js', obfuscationResult.getObfuscatedCode());
        console.log("Build and obfuscation succeeded.");
        await context.dispose();
    }
}

build().catch((error) => {
    console.error("Build failed:", error);
});