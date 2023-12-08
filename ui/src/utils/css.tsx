import { v5 as uuidV5 } from 'uuid';
export function getColorFromText(stringInput: string) {
  const id: string = uuidV5(stringInput, uuidV5.URL).replaceAll('-', '');
  const stringUniqueHash = Array.from(id).reduce((acc, char) => {
    return char.charCodeAt(0) + ((acc << 16) - acc);
  }, 0);
  return `hsl(${stringUniqueHash % 360}, 100%, 68%)`;
}
