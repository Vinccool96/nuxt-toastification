import { fileURLToPath } from "node:url"

import { describe, expect, it } from "vitest"
import { createPage, setup } from "@nuxt/test-utils"

describe("ssr", async function () {
  await setup({
    rootDir: fileURLToPath(new URL("./fixtures/basic", import.meta.url)),
  })

  it("renders the index page", async function () {
    // Get response to a server-rendered page with `$fetch`.
    const page = await createPage("/")
    const html: string = await page.content()
    expect<string>(html).toContain("<div>basic</div>")
  })

  it("should contain the div used to show the toasts", async function () {
    const verticalPositions = ["top", "bottom"]
    const horizontalPositions = ["left", "center", "right"]

    const html: string = await (await createPage("/")).content()

    for (const vPos of verticalPositions) {
      for (const hPos of horizontalPositions) {
        expect<string>(html).toContain(`<div class="Vue-Toastification__container ${vPos}-${hPos}"></div>`)
      }
    }
  })
})
