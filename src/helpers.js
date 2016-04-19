/*
 * returns a 10 character code
 * ~839 quadrillion possibilities
 */
export function pseudoRandomID() {
  const chars = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
  const charCount = chars.length;
  return Array.from(Array(10))
    .map(() => chars[Math.floor(Math.random() * charCount)])
    .join('')
}
