/// <reference types="cypress" />

describe("Text Box Challenge", () => {
  beforeEach(() => {
    cy.visit(
      "https://software-testers.gitlab.io/challenges/automation-challenges/index.html"
    );
    cy.get("a[href='text-box.html']").click();
  });

  it("1 - Verify Error Message when nothing is entered!", () => {
    cy.get("#verify-btn").click();
    cy.confirmMessage("No value entered in Name field!");
  });

  it("2 - Verify Error Message when less than 2 letters are entered!", () => {
    cy.get("#first-name").type("a");
    cy.get("#verify-btn").click();
    cy.confirmMessage("Name has to have at least 2 letters!");
  });

  it("3 - Verify Error Message when non letters are entered! ", () => {
    cy.get("#first-name").type("123/'[");
    cy.get("#verify-btn").click();
    cy.confirmMessage("Name can only have letters!");
  });

  it("4 - Verify Error Message when more than 30 letters are entered!", () => {
    cy.get("#first-name").type("QwertyuiopAsdfghjklZxcvbnmqwerT");
    cy.get("#verify-btn").click();
    cy.confirmMessage("Name cannot have more than 30 letters!");
  });

  it("5 - To solve a challenge simply write your name and click VERIFY!", () => {
    cy.get("#first-name").type("Alvyde");
    cy.successConfirmation("#verify-btn");
  });
});
