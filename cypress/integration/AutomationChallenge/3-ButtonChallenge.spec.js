/// <reference types="cypress" />

describe("Number Box Challenge", () => {
  beforeEach(() => {
    cy.visit(
      "https://software-testers.gitlab.io/challenges/automation-challenges/index.html"
    );
    cy.get("body > main > section > div > ul > li:nth-child(3) > a").click();
  });

  it("1 - Verify that Green button is disabled by default!", () => {
    cy.get("#simple-button-2").should("be.disabled");
   
  });

  it("2 - Verify that Red button is disabled by default!", () => {
    cy.get("#simple-button-3").should("be.disabled");
   
  });

  it("3 - To solve a challenge light up Lithuanian flag by clicking on all buttons starting from Yellow!", () => {
   cy.get("#simple-button-1").click
    cy.get("#simple-button-2").click();
   cy.get("#simple-button-3").click();
   cy.url("https://software-testers.gitlab.io/challenges/automation-challenges/success.html");
  });
});
