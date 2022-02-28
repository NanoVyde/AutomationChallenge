/// <reference types="cypress" />

describe("Drop Down Challenge", () => {
  beforeEach(() => {
    cy.visit(
      "https://software-testers.gitlab.io/challenges/automation-challenges/index.html"
    );
    cy.get("a[href='drop-down.html']").click();
  });

  it("1 - Verify Error Message and Country when selected country is NOT Lithuania! ", () => {
    cy.get("#country").select("Ukraine");
    cy.get("#dropdown-verify-btn").click();
    cy.confirmMessage("Selected country is Ukraine, NOT Lithuania!");
  });

  it("2 - Verify Error Message with at least 3 countries", () => {
    cy.get("#country").select("Germany");
    cy.get("#dropdown-verify-btn").click();
    cy.confirmMessage("Selected country is Germany, NOT Lithuania!");

    cy.get("#country").select("Italy");
    cy.get("#dropdown-verify-btn").click();
    cy.confirmMessage("Selected country is Italy, NOT Lithuania!");

    cy.get("#country").select("Norway");
    cy.get("#dropdown-verify-btn").click();
    cy.confirmMessage("Selected country is Norway, NOT Lithuania!");
  });

  it("3 - To solve a challenge select the country Lithuania from drop down list and VERIFY it!", () => {
    cy.get("#country").select("Lithuania");
    cy.get("#dropdown-verify-btn").click({ force: true });
    cy.url(
      "https://software-testers.gitlab.io/challenges/automation-challenges/success.html"
    );
  });
});
