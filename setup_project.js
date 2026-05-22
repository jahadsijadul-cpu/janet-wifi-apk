const { TwaManifest, AndroidSdk, Config, JdkHelper, GradleWrapper, AndroidSdkTools, KeyTool, Log } = require('@bubblewrap/core');
const path = require('path');
const fs = require('fs');

const log = new Log.ConsoleLog('setup');

async function main() {
  const config = new Config(
    '/usr/lib/jvm/java-11-openjdk-amd64',
    '/root/.bubblewrap/android_sdk'
  );

  log.info('Loading twa-manifest...');
  const manifest = await TwaManifest.fromFile('./twa-manifest.json');

  log.info('Checking Android SDK...');
  const jdkHelper = new JdkHelper(process, config);
  const androidSdkTools = await AndroidSdkTools.create(process, config, jdkHelper, log);

  log.info('Generating Android project...');
  await androidSdkTools.installBuildTools();

  log.info('Done!');
}

main().catch(e => { console.error(e); process.exit(1); });
