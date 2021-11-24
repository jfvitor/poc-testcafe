'use strict';

import { Selector, t } from "testcafe";

const loader = '[data-test="spinner"]';
const folderSkeleton = '[data-test="folderSkeleton"]';

/**
 * @summary Waits until the loader spinner disappears
 */
export async function waitForLoaderDisappear() {
    t
        .expect(Selector(loader).visible);
}

/**
 * @summary Waits until the folderSkeleton disappears
 */
export async function waitForFolderSkeletonDisappear() {
    t
        .expect(Selector(folderSkeleton).visible);
}