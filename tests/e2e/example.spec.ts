import { test, expect } from "@playwright/test";

test.describe("basic example test", () => {
  test("has title", async ({ page }) => {
    await page.goto("/");
    await expect(page).toHaveTitle("Remix Application Template");
  });

  test("shows hello message", async ({ page }) => {
    await page.goto("/");
    await expect(page.locator("text=DigitalService")).toBeVisible();
  });

  test("clicking on the button shows the feedback dialog", async ({ page }) => {
    await page.goto("/");
    await page.getByRole("button", { name: "Click me for nothing" }).click();
    await expect(
      page.getByRole("heading", { name: "Ihr Feedback" }),
    ).toBeVisible();
  });
});
