import { Selector, t } from "testcafe";
import { userTwo } from "../helpers/roles";
import * as createApp from '../page-object/page-model';

fixture('First Fixture')
    .page('qa-rows.com')
    .beforeEach(async t => {
        await t.useRole(userTwo)
    });

test("Creat app", async t => {
    const cell = Selector(createApp.canvas({ offsetX: 132, offsetY: 32 }));

    await createApp.waitForAccountMenuExists()
    await createApp.clickFolder()
    await createApp.waitForCreatAppBtnExists()
    await createApp.clickCreateAppBtn()
    await createApp.waitForEditorSidebarExists()
    await t
        .expect(createApp.canvas.exists).ok()
        .click(cell)
        .expect(createApp.cellPosition.textContent).eql('C3')
        .click(createApp.formulaBarEditor)
        //await createApp.waitForCellEditor()
        .typeText(createApp.formulaBarEditor, 'ha muleque')
        .click(cell)
      //  .expect(cell.value).eql('ha muleque');
    //.debug()
});



