/// <reference types="cypress" />

describe("Checkbox challenge", () => {
  beforeEach(() => {
    cy.visit(
      "https://software-testers.gitlab.io/challenges/automation-challenges/index.html"
    );
    cy.get("a[href='check-box.html']").click();
  });

  it("1 - Verify that 1, 3, 5 checkboxes are checked by default!", () => {
    cy.get("#checkbox1").should("be.checked");
    cy.get(
      "body > section > div.center.checkboxes > div.checkboxes-box > input[type=checkbox]:nth-child(5)"
    ).should("be.checked");
    cy.get("#ba").should("be.checked");
  });

  it("2 - Verify that 2, 4 checkboxes are NOT checked by default!", () => {
    cy.get(
      "body > section > div.center.checkboxes > div.checkboxes-box > input.checkbox2"
    ).should("not.be.checked");
    cy.get(
      "body > section > div.center.checkboxes > div.checkboxes-box > input[type=checkbox]:nth-child(7)"
    ).should("not.be.checked");
  });

  it("3 - Verify Error Message when NO checkbox is selected!", () => {
    cy.get("#checkbox1").click();
    cy.get(
      "body > section > div.center.checkboxes > div.checkboxes-box > input[type=checkbox]:nth-child(5)"
    ).click();
    cy.get("#ba").click();
    cy.get("#confirm-btn").click();
    cy.get("#conf-msg").should("have.text", "No checkbox is selected!");
  });

  it("4 - Verify Error Message when checkbox combination is not correct! ", () => {
    cy.get(
      "body > section > div.center.checkboxes > div.checkboxes-box > input.checkbox2"
    ).click();
    cy.get(
      "body > section > div.center.checkboxes > div.checkboxes-box > input[type=checkbox]:nth-child(7)"
    ).click();
    cy.get("#confirm-btn").click();
    cy.get("#conf-msg").should(
      "have.text",
      "The combination of selected profession(s) is NOT correct!"
    );
  });

  it("5 - To solve a challenge select only checkboxes related to software testing roles + Confirm", () => {
    cy.get("#checkbox1").click("");
    cy.get(
      "body > section > div.center.checkboxes > div.checkboxes-box > input.checkbox2"
    ).click("");
    cy.get(
      "body > section > div.center.checkboxes > div.checkboxes-box > input[type=checkbox]:nth-child(7)"
    ).click();
    cy.get("#ba").click("");
    cy.get("#confirm-btn").click();
    cy.url(
      "https://software-testers.gitlab.io/challenges/automation-challenges/success.html"
    );
  });
});
