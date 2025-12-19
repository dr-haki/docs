import { fromVault } from 'fumadocs-obsidian';

await fromVault({
  dir: 'vault',
  out: {
    contentDir: `./content/docs`,
  },
});