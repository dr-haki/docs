import { fromVault } from 'fumadocs-obsidian';

await fromVault({
  dir: '/Users/julendiaz/Library/Mobile\ Documents/iCloud\~md\~obsidian/Documents/docs/vault',
  out: {
    contentDir: `./content/docs`,
  },
});