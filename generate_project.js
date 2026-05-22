// Generate Android TWA project files from twa-manifest.json
// No Android SDK needed — hanya generate source files

const { TwaGenerator, TwaManifest, ConsoleLog } = require('@bubblewrap/core');
const path = require('path');

async function main() {
  const log = new ConsoleLog('generate');
  const targetDir = process.cwd();

  log.info('Loading twa-manifest.json...');
  const manifest = await TwaManifest.fromFile(path.join(targetDir, 'twa-manifest.json'));

  log.info('Generating Android project...');
  const generator = new TwaGenerator();
  await generator.createTwaProject(targetDir, manifest, log, (curr, total) => {
    process.stdout.write(`\r  Progress: ${Math.round(curr/total*100)}%`);
  });
  console.log('\n');
  log.info('Android project generated successfully!');
  log.info('Files created: app/, build.gradle, settings.gradle, etc.');
}

main().catch(e => {
  console.error('ERROR:', e.message);
  process.exit(1);
});
