/// <reference types="cypress" />

describe("Hamburger Menu challenge", () => {
  beforeEach(() => {
    cy.visit(
      "https://software-testers.gitlab.io/challenges/automation-challenges/index.html"
    );
    cy.get("a[href='hamburger-menu.html']").click();
  });

  it("1 - Verify Error Message for all options except VERIFY ME", () => {
    cy.get("a[href='javascript:void(0);']").click();
    cy.get("#hamburger-menu-home").click();
    cy.confirmMessage("You have selected other section than VERIFY ME!");

    cy.get("#hamburger-menu-about").click();
    cy.confirmMessage("You have selected other section than VERIFY ME!");

    cy.get("#hamburger-menu-blog").click();
    cy.confirmMessage("You have selected other section than VERIFY ME!");

    cy.get("#hamburger-menu-contact").click();
    cy.confirmMessage("You have selected other section than VERIFY ME!");
  });

  it("2 - To solve a challenge, select the option VERIFY ME", () => {
    cy.get("a[href='javascript:void(0);']").click();
    cy.successConfirmation("#hamburger-menu-verify");
  });
});
