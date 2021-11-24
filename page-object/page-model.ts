'use strict'

import { Selector, t } from "testcafe";

const accountMenu = Selector('[data-test="accountMenuButton"]');
const workspaceFolder = '[data-test="workspaceFolder"]';
const creatAppBtn = Selector('[data-test="createApp-headerButton"]');
const editorSideBar = Selector('[data-test="editor-sidebar"]');
const rootSelector = (key: string) => `div[data-test="formatBar"] *[data-test="${key}"]`;
const clearFormattingButton = rootSelector('fbClearFormatting');

//apps
const tableRow = 'table tbody tr';

//toolbar
const toolbarSelectButton = '[data-test="toolbarSelect"]';
const toolbarBulkDeleteButton = '[data-test="toolbarDelete"]';
const toolbarSelectAllApps = '[data-test="toolbarSelectAll"]';
const toolbarCancelSelectMode = '[data-test="toolbarCancel"]';

//editor

export const cellsCanvas = '[data-test="cellsContainer"] canvas';
export const rowsHeaderCanvas = '[data-test="rowsHeaderContainer"] canvas';
export const canvas = Selector('canvas');
export const formulaBarEditor  = '#formula-bar-editor'

export const cellPosition = Selector('div[data-test="cellPosition"]');
const cellEditorPortalContainer = '[data-test="cell-editor-portal"]';
const cellEditor = `${cellEditorPortalContainer} div[id="inline-cell-editor"]`;
const cellEditorContainer = Selector(`${cellEditorPortalContainer} [contenteditable]`);

//modalbase container
const modalBaseContainer = Selector('[data-test="modalBase"]');
const modalBaseConfirmButton = '[data-test="confirmBtn"]';
export const tableContainer = '[data-test="tableContainer"]'; // contains all 3 canvases for a single view

//empty page
export const emptyAppsContainer = Selector('[data-test="apps-emptyContainer"]');

/**
 * Find element by selector and check if it is enabled
 */
 const isButtonEnabled = async (selector: string) => {
    const el = t.expect(Selector(selector).exists);
    return el.ok();
 };
  
export const isClearFormattingEnabled = async () => await isButtonEnabled(clearFormattingButton);
export const clickOnClearFormatting = async () => await t.click(clearFormattingButton);
export async function waitForCellEditor() {
  t.expect(cellEditorContainer.exists).ok;
}

/**
 * Get the element that contains the all the 3 canvases for headers and cells.
 *
 * This container is present in both single and multiview modes.
 * There should be a "tableInnerContainer" for each rendered table, meaning multiple elements will 
 * found in multiview setups. No "tableInnerContainer" will be found if the group/page is empty.
 *
 * @param index The index of the table in the current page (note that charts do not count for this 
 */
 export async function getTableContainer(index = 0) {
  return (tableContainer)[index]!;
}

/**
 * Get the element that contains only the canvas for cells.
 */
export async function getCellsCanvas(index = 0) {
  return (cellsCanvas)[index]!;
}

/**
 * Get the element that contains only the canvas for cells.
 */
export async function getRowsHeaderCanvas(index = 0) {
  return (rowsHeaderCanvas)[index]!;
}

export async function getCellEditor() {
  return (cellEditor);
}

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

export async function getCurrentPosition() {
  return await (cellPosition).innerText;
}

/**
 * Clear all cell values and format in a view
 */
export const clearAllViewCells = async () => {
    await t.pressKey("A");
    const clearFormattingEnabled = await isClearFormattingEnabled();
    if (clearFormattingEnabled) {
      await clickOnClearFormatting();
    }
  
    await t.pressKey('BACKSPACE');
    //await waitForComputation();
  
    //force deselect cells
    return await t.pressKey('ESC');
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
