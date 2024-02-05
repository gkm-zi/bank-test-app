module.exports = {
  '*.{ts,tsx}': () => ['npm run lint --fix', 'npm run check-types'],
  '*.{js,json,md}': () => 'npm run format',
};
