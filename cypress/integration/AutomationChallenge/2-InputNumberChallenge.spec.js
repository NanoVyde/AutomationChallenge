/// <reference types="cypress" />

describe("Number Box Challenge", () => {
  beforeEach(() => {
    cy.visit(
      "https://software-testers.gitlab.io/challenges/automation-challenges/index.html"
    );
    cy.get("a[href='input-number.html']").click();
  });

  it("1 - Verify Error Message when nothing is entered!", () => {
    cy.get("#number-verify").click();
    cy.confirmMessage("No number is entered!");
  });

  it("2 - Verify Error Message when entered number is more than 100!", () => {
    cy.get("#number-box").type("101");
    cy.get("#number-verify").click();
    cy.confirmMessage("Entered number is NOT in range of 0-100!");
  });

  it("3 - Verify Error Message when entered number is less than 0!", () => {
    cy.get("#number-box").type("-2");
    cy.get("#number-verify").click();
    cy.confirmMessage("Entered number is NOT in range of 0-100!");
  });

  it("4 - To solve a challenge enter the number between 0 - 100 & click VERIFY!", () => {
    cy.get("#number-box").type("23");
    cy.get("#number-verify").click();
    cy.url(
      "https://software-testers.gitlab.io/challenges/automation-challenges/success.html"
    );
  });
});
