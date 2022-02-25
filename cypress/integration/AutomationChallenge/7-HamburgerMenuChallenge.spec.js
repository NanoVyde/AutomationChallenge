/// <reference types="cypress" />

describe("Hamburger Menu challenge", () => {
  beforeEach(() => {
    cy.visit(
      "https://software-testers.gitlab.io/challenges/automation-challenges/index.html"
    );
    cy.get("body > main > section > div > ul > li:nth-child(7) > a").click();
  });

  it("1 - Verify Error Message for all options except VERIFY ME", () => {
    cy.get("body > section > div.topnav.container > a").click("");
    cy.get("#hamburger-menu-home").click();
    cy.get("#conf-msg").should(
      "have.text",
      "You have selected other section than VERIFY ME!"
    );

    cy.get("#hamburger-menu-about").click();
    cy.get("#conf-msg").should(
      "have.text",
      "You have selected other section than VERIFY ME!"
    );

    cy.get("#hamburger-menu-blog").click();
    cy.get("#conf-msg").should(
      "have.text",
      "You have selected other section than VERIFY ME!"
    );

    cy.get("#hamburger-menu-contact").click();
    cy.get("#conf-msg").should(
      "have.text",
      "You have selected other section than VERIFY ME!"
    );
  });
  //#country > option:nth-child(29)

  it("2 - To solve a challenge, select the option VERIFY ME", () => {
    cy.get("body > section > div.topnav.container > a").click("");
    cy.get("#hamburger-menu-verify").click();
    cy.url(
      "https://software-testers.gitlab.io/challenges/automation-challenges/success.html"
    );
  });
});
