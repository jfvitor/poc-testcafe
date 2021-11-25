'use strict';
import { Selector, t } from 'testcafe';

const loginForm = 'form[data-test="sign-in"]';
export const emailInput = `${loginForm} input[name="email"]`;
export const passwordInput = `${loginForm} input[name="password"]`;
export const submitButton = `${loginForm} button`;
const submitLoader = `${submitButton} [data-test="svgLoaderBubble"]`;

/**
 * @summary Waits until the login form exists
 */
export async function waitForLoginFormExists() {
  t.expect(Selector(loginForm).exists).ok();
}

export const focusEmailInput = async () => {
  await t.click(emailInput);
}

/**
 * @summary Fills the login email input
 */
export const setEmailInput = async (value: string) => {
  await focusEmailInput();
  await t.typeText(emailInput, value);
}

export const focusPasswordInput = async () => {
  await t.click(passwordInput);
}

/**
 * @summary Fills the login password input
 */
export const setPasswordInput = async (value: string) => {
  await focusPasswordInput();
  await t.typeText(passwordInput, value);
}

/**
 * @summary Waits until the loader at the login submit button disappear
 */
export async function waitForSubmitLoaderDisappear() {
  t.expect(Selector(submitLoader).visible).notOk();
}

/**
 * @summary Clicks at the login submit button and waits until the loader disappears
 */
export async function clickOnSubmitLogin() {
  await t.click(submitButton);
  await waitForSubmitLoaderDisappear();
}

