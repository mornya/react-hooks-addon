/*
 * Sample.ts
 */
const foo: string = 'This is an';
const bar: string[] = ['Awesome', 'World'];

/* eslint-disable-next-line no-console */
console.log('This is just a sample code.');

export function world () {
  return `${process.env.SAMPLE_TEXT} ${foo} ${bar.join(' ')}`;
}

export function getDocType () {
  return document.doctype;
}
