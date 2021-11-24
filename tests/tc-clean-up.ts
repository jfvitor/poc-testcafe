import { userTwo } from "../helpers/roles";
import * as createApp from '../page-object/page-model';

fixture('Clean up')
    .page('qa-rows.com')
    .beforeEach(async t => {
        await t.useRole(userTwo)
    });

test("Delet apps", async t => {
    await createApp.waitForAccountMenuExists()
    await createApp.clickFolder()
    await createApp.deleteAllApps()
    await createApp.waitForAppsEmptyDisplayed();
}); 

