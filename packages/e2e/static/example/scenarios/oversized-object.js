/**
 * (c) Meta Platforms, Inc. and affiliates. Confidential and proprietary.
 *
 * @oncall ws_labs
 */
/* @nolint */

function url() {
  return 'http://localhost:3000/';
}

// action where you suspect the memory leak might be happening
async function action(page) {
  await page.click('a[href="/examples/oversized-object"]');
}

// how to go back to the state before actionw
async function back(page) {
  await page.click('a[href="/"]');
}

module.exports = { action, back, url };
