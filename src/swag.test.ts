import { applySwag } from './swag';
import {
  swagAnger,
  swagBitch,
  swagFriends,
  swagHappy,
  swagNo,
  swagPray,
} from './constants';

describe('applySwag', () => {
  const testData = [
    {
      input: 'hello',
      expectedCalls: [],
    },
    {
      input: 'nono',
      expectedCalls: [],
    },
    {
      input: 'friends no bitch please',
      expectedCalls: [swagFriends, swagNo, swagBitch, swagPray],
    },
    {
      input: 'no no',
      expectedCalls: [swagNo],
    },
    {
      input: 'no',
      expectedCalls: [swagNo],
    },
    {
      input: 'no ',
      expectedCalls: [swagNo],
    },
    {
      input: ' no ',
      expectedCalls: [swagNo],
    },
    {
      input: ' no',
      expectedCalls: [swagNo],
    },
    {
      input: '>:(',
      expectedCalls: [swagAnger],
    },
    {
      input: ':-)',
      expectedCalls: [swagHappy],
    },
  ];

  testData.forEach(({ input, expectedCalls }) => {
    it(`performs '${expectedCalls.length}' call(s) on '${input}'`, async () => {
      // Arrange
      let calls: string[] = [];

      // Act
      await applySwag(input, async (symbol) => <any>calls.push(symbol));

      // Assert
      expect(calls.sort()).toEqual(expectedCalls.sort());
    });
  });
});
