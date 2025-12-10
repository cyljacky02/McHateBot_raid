import { Bot } from 'mineflayer';

declare module 'mineflayer' {
  interface Bot {
    getTps(): number;
  }
}

declare function tpsPlugin(mineflayer: typeof import('mineflayer')): (bot: Bot) => void;

export = tpsPlugin;
