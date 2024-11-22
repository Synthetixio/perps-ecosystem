// utility function to safely decode tracking codes without error

import { utils } from 'ethers';

export function safeDecodeTrackingCode(value: string): string {
  if (value)
    try {
      if (utils.isHexString(value) && value.length === 66) {
        // const strippedValue = value.replace(/0+$/, '');

        const decodedString = utils.parseBytes32String(value);

        // If the decoded string is blank, just return an empty string
        if (decodedString === '' || decodedString.trim().length === 0) {
          return '';
        }

        return decodedString;
      } else {
        console.warn(`Invalid hex string: ${value}`);
      }
    } catch (e) {
      console.error(`Failed to decode trackingCode: ${value}`, e);
    }

  return '';
}
