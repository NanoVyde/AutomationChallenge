/// <reference types="cypress" />

describe("Radio Button Challenge", () => {
  beforeEach(() => {
    cy.visit(
      "https://software-testers.gitlab.io/challenges/automation-challenges/index.html"
    );
    cy.get("a[href='radio-button.html']").click();
  });

  it("1 - Verify Error Message when NO option is selected!", () => {
    cy.get("#profession-tester").should("not.be.selected");
    cy.get("#profession-developer").should("not.be.selected");
    cy.get("#profession-analyst").should("not.be.selected");
    cy.get("#profession-writer").should("not.be.selected");
    cy.get("#confirm-radio-challenge").click();
    cy.confirmMessage("No option is selected!");
  });

  it("2 - Select each role + Confirm & verify text in message '[Role] is selected!'", () => {
    cy.get("#profession-tester").click();
    cy.get("#confirm-radio-challenge").click();
    cy.confirmMessage("QA Test Engineer is selected!");

    cy.get("#profession-developer").click();
    cy.get("#confirm-radio-challenge").click();
    cy.confirmMessage("Software Developer is selected!");

    cy.get("#profession-analyst").click();
    cy.get("#confirm-radio-challenge").click();
    cy.confirmMessage("Business Analystic is selected!");

    cy.reload();
    cy.get("#profession-writer").click();
    cy.get("#confirm-radio-challenge").click();
    cy.confirmMessage("Technical Writer is selected!");
  });

  it("3 - To solve a challenge Confirm all professions at least once!", () => {
    cy.get("#profession-tester").click();
    cy.get("#confirm-radio-challenge").click();

    cy.get("#profession-developer").click();
    cy.get("#confirm-radio-challenge").click();

    cy.get("#profession-analyst").click();
    cy.get("#confirm-radio-challenge").click();

    cy.get("#profession-writer").click();
    cy.successConfirmation("#confirm-radio-challenge");
  });
});
