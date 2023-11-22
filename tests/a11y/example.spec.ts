import { test, expect } from "@playwright/test";
import AxeBuilder from "@axe-core/playwright";

test.describe("index", () => {
  test("should not have any automatically detectable accessibility issues", async ({
    page,
  }) => {
    await page.goto("/");

    const accessibilityScanResults = await new AxeBuilder({ page }).analyze();
    expect(accessibilityScanResults.violations).toEqual([]);
  });

  test.describe("feedback", () => {
    test("should not have any automatically detectable accessibility issues", async ({
      page,
    }) => {
      await page.goto("/");
      await page.getByRole("button", { name: "Click me for nothing" }).click();
      await expect(
        page.getByRole("heading", { name: "Ihr Feedback" }),
      ).toBeVisible();

      const accessibilityScanResults = await new AxeBuilder({ page }).analyze();
      expect(accessibilityScanResults.violations).toEqual([]);
    });
  });
});
