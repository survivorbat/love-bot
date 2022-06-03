import { searchSymbols, availableSwag } from './constants';

function escapeRegExp(string) {
  return string.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'); // $& means the whole matched string
}

export async function applySwag(
  message: string,
  callback: (symbol: string) => Promise<void>,
): Promise<void> {
  const promises = searchSymbols.map(async (symbol) => {
    if (!new RegExp(`(^|\\b)${escapeRegExp(symbol)}(\\b|$)`).test(message)) {
      return;
    }

    const swagEmojis = availableSwag[symbol];

    const swagResult =
      swagEmojis[Math.floor(Math.random() * swagEmojis.length)];

    try {
      await callback(swagResult);
    } catch (e) {
      console.error(`Oh noes! ${e}`);
    }
  });

  await Promise.all(promises);
}
