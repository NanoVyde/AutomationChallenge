/// <reference types="cypress" />

describe("Number Box Challenge", () => {
  beforeEach(() => {
    cy.visit(
      "https://software-testers.gitlab.io/challenges/automation-challenges/index.html"
    );
    cy.get("body > main > section > div > ul > li:nth-child(5) > a").click();
  });

  it("1 - Verify Error Message when NO option is selected!", () => {
    cy.get("#profession-tester").should("not.be.selected");
    cy.get("#profession-developer").should("not.be.selected");
    cy.get("#profession-analyst").should("not.be.selected");
    cy.get("#profession-writer").should("not.be.selected");
    cy.get("#confirm-radio-challenge").click();
    cy.get("#conf-msg").should("have.text", "No option is selected!");
  });

  it("2 - Select each role + Confirm & verify text in message '[Role] is selected!'", () => {
    cy.get("#profession-tester").click();
    cy.get("#confirm-radio-challenge").click();
    cy.get("#conf-msg").should("have.text", "QA Test Engineer is selected!");

    cy.get("#profession-developer").click();
    cy.get("#confirm-radio-challenge").click();
    cy.get("#conf-msg").should("have.text", "Software Developer is selected!");

    cy.get("#profession-analyst").click();
    cy.get("#confirm-radio-challenge").click();
    cy.get("#conf-msg").should("have.text", "Business Analystic is selected!");

    cy.reload();
    cy.get("#profession-writer").click();
    cy.get("#confirm-radio-challenge").click();
   
    cy.get("#conf-msg").should("have.text", "Technical Writer is selected!");
  });

  it("3 - To solve a challenge Confirm all professions at least once!", () => {
    cy.get("#profession-tester").click();
    cy.get("#confirm-radio-challenge").click();

    cy.get("#profession-developer").click();
    cy.get("#confirm-radio-challenge").click();

    cy.get("#profession-analyst").click();
    cy.get("#confirm-radio-challenge").click();

    cy.get("#profession-writer").click();
    cy.get("#confirm-radio-challenge").click();

    cy.url("https://software-testers.gitlab.io/challenges/automation-challenges/success.html");
  });
});
