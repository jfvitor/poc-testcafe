'use strict'

import { Selector, t } from "testcafe";

const accountMenu = Selector('[data-test="accountMenuButton"]');
const workspaceFolder = '[data-test="workspaceFolder"]';
const creatAppBtn = Selector('[data-test="createApp-headerButton"]');
const editorSideBar = Selector('[data-test="editor-sidebar"]');

//dashbord
const tableRow = 'table tbody tr';

//toolbar
const toolbarSelectButton = '[data-test="toolbarSelect"]';
const toolbarBulkDeleteButton = '[data-test="toolbarDelete"]';
const toolbarSelectAllApps = '[data-test="toolbarSelectAll"]';
const toolbarCancelSelectMode = '[data-test="toolbarCancel"]';

//editor

export const cellsCanvas = '[data-test="cellsContainer"] canvas';
export const canvas = Selector('canvas');
export const formulaBarEditor = '#formula-bar-editor'

export const cellPosition = Selector('div[data-test="cellPosition"]');

//modalbase container
const modalBaseContainer = Selector('[data-test="modalBase"]');
const modalBaseConfirmButton = '[data-test="confirmBtn"]';

//empty page
export const emptyAppsContainer = Selector('[data-test="apps-emptyContainer"]');

/**
 * @summary Waits until the account menu exists
 */
export async function waitForAccountMenuExists() {
  await t.expect(accountMenu.exists).ok();
};

export const clickFolder = async () => {
  await t.click(workspaceFolder);
};

export const waitForCreatAppBtnExists = async () => {
  await t.expect(creatAppBtn.exists).ok();
};

/**
* @summary Waits until the account menu exists
*/
export async function clickCreateAppBtn() {
  await t.click(creatAppBtn);
};

export const waitForEditorSidebarExists = async () => {
  await t.expect(editorSideBar.exists).ok();
};

/**
 * @summary Returns all the table rows element
 * @returns all the table rows element
 */
export async function getElemsTableRows() {
  return (tableRow);
}

/**
 * @summary Returns the number of created apps
 * @returns the number of apps created
 */
export async function countApps() {
  return (await getElemsTableRows()).length;
}

//select action in bulck
/**
* @summary Gets the table in selection mode
*/
export async function enterSelectMode() {
  return await t.click(toolbarSelectButton);
}

/**
 * @summary Click on the checkbox to select all the table rows
 */
export async function selectAllRows() {
  return await t.click(toolbarSelectAllApps);
}

/**
 * @summary Click on bulk delete
 */
export async function clickOnBulkDelete() {
  return await t.click(toolbarBulkDeleteButton);
}

/**
 * @summary Gets the table list back to view mode, clicking on cancel
 */
export async function cancelSelectMode() {
  return await t.click(toolbarCancelSelectMode);
}

/**
 * @summary Waits until the modal base is displayed
 */
export async function waitForModalBaseDisplayed() {
  t.expect(modalBaseContainer.exists).ok;
}


/**
 * @summary Clicks at the modal base confirm button
 */
export async function clickOnModalBaseConfirm() {
  await t.click(modalBaseConfirmButton);
}

/**
 * @summary Confirms modal action option
 */
export async function clickOnModalBaseDelete() {
  await waitForModalBaseDisplayed();
  await clickOnModalBaseConfirm();
}

/**
 * @summary Deletes all the apps created
 */
export async function deleteAllApps() {
  if ((await countApps()) > 0) {
    await enterSelectMode();
    await selectAllRows();
    await clickOnBulkDelete();
    await clickOnModalBaseDelete();
  }
}

/**
* @summary Waits until the apps empty container is displayed
* @returns a boolean indicating if the apps empty container was displayed
*/
export async function waitForAppsEmptyDisplayed() {
  return t.expect(emptyAppsContainer.exists).ok;
}
