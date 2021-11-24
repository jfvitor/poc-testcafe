import { Role } from "testcafe";
import * as login from '../page-object/login/login';

export const userOne = Role('https://qa-rows.com/auth/login', async t => {
    await t
        .typeText(login.emailInput, 'jacqueline.vitor+test6@rows.com')
        .typeText(login.passwordInput, 'test1234')
        .click(login.submitButton);
},
   //{ preserveUrl: true }
);

export const userTwo = Role('https://qa-rows.com/auth/login', async t => {
    await t
        .typeText(login.emailInput, 'jacqueline.vitor+test4@rows.com')
        .typeText(login.passwordInput, 'test12345')
        .click(login.submitButton);
},
    //{ preserveUrl: true }
);

