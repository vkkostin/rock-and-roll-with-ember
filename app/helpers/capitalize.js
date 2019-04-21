import { helper } from '@ember/component/helper';
import { capitalize as emberCapitalize } from '@ember/string';

export function capitalize(input) {
  return input.toString().split(/\s+/).map(word => `${emberCapitalize(word.charAt(0))}${word.slice(1)}`).join(' ');
}

export default helper(capitalize);
