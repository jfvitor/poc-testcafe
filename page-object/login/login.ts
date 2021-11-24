'use strict';
import { Selector, t } from 'testcafe';

const loginForm = 'form[data-test="sign-in"]';
export const emailInput = `${loginForm} input[name="email"]`;
const emailInputError = `${loginForm} [data-test="email-error-message"]`;
export const passwordInput = `${loginForm} input[name="password"]`;
const passwordInputError = `${loginForm} [data-test="password-error-message"]`;
export const submitButton = `${loginForm} button`;
const submitLoader = `${submitButton} [data-test="svgLoaderBubble"]`;
const genericError = `${loginForm} [data-test="genericError"]`;

/**
 * @summary Waits until the login form exists
 */
export async function waitForLoginFormExists() {
  t.expect(Selector(loginForm).exists).ok();
}

export const focusEmailInput = async () => {
  await t.click(emailInput);
};

/**
 * @summary Fills the login email input
 */
export const setEmailInput = async (value: string) => {
  await focusEmailInput();
  await t.typeText(emailInput, value);
};

export const focusPasswordInput = async () => {
  await t.click(passwordInput);
};

/**
 * @summary Fills the login password input
 */
export const setPasswordInput = async (value: string) => {
  await focusPasswordInput();
  await t.typeText(passwordInput, value);
};

/**
 * @returns a boolean indicating if the login email input error is displayed
 */
export async function isEmailInputErrorDisplayed() {
  return t.expect(Selector(emailInputError).visible).ok();
}

/**
 * @returns a boolean indicating if the login password input error is displayed
 */
export async function isPasswordInputErrorDisplayed() {
  return t.expect(Selector(passwordInputError).visible).ok();
}

/**
 * @returns a boolean indicating if the login generic error is displayed
 */
export async function isGenericErrorDisplayed() {
  return t.expect(Selector(genericError).visible).ok();
}

/**
 * @returns the login email input error text
 */
export async function getEmailInputError() {
  return await Selector(emailInputError).innerText;
}

/**
 * @returns the login password input error text
 */
export async function getPasswordInputError() {
  return await Selector(passwordInputError).innerText;
}

/**
 * @returns the login generic error text
 */
export async function getGenericError() {
  return await Selector(genericError).innerText;
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

