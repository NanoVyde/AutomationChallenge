/// <reference types="cypress" />

describe("Login Challenge", () => {
  beforeEach(() => {
    cy.visit(
      "https://software-testers.gitlab.io/challenges/automation-challenges/index.html"
    );
    cy.get("a[href='simple-form.html']").click();
  });

  it("1 - Verify Error Message when all required fields are not filled!", () => {
    cy.get("#first-name").should("not.have.text");
    cy.get("#last-name").should("not.have.text");
    cy.get("#email").should("not.have.text");
    cy.get("#sex-female").should("not.be.selected");
    cy.get("#sex-male").should("not.be.selected");
    cy.get("#mobile-number").should("not.have.text");
    cy.get("#terms-checkbox").should("not.be.selected");
    cy.get("#submit-btn").click();
    cy.confirmMessage("No value entered in First Name field!");
  });

  it("2 - Verify Error Message when one of the mandatory field is not filled!", () => {
    cy.get("#first-name").type("firstname");
    cy.get("#last-name").should("not.have.text");
    cy.get("#email").should("not.have.text");
    cy.get("#sex-female").should("not.be.selected");
    cy.get("#sex-male").should("not.be.selected");
    cy.get("#mobile-number").should("not.have.text");
    cy.get("#terms-checkbox").should("not.be.selected");
    cy.get("#submit-btn").click();
    cy.confirmMessage("No value entered in Last Name field!");
  });

  it("3 -  Verify Error Message when email has wrong format! ", () => {
    cy.get("#first-name").type("firstname");
    cy.get("#last-name").type("lastname");
    cy.get("#email").type("labasvakaras");
    cy.get("#sex-female").should("not.be.selected");
    cy.get("#sex-male").should("not.be.selected");
    cy.get("#mobile-number").should("not.have.text");
    cy.get("#terms-checkbox").should("not.be.selected");
    cy.get("#submit-btn").click();
    cy.confirmMessage("Email format is not valid!");
  });

  it("4 - To solve a challenge fill the registration form properly and SUBMIT!", () => {
    cy.get("#first-name").type("firstname");
    cy.get("#last-name").type("lastname");
    cy.get("#email").type("firstname@lastname.com");
    cy.get("#sex-female").click("");
    cy.get("#sex-male").should("not.be.selected");
    cy.get("#mobile-number").type("123456789");
    cy.get("#terms-checkbox").click("");
    cy.get("#submit-btn").click();
    cy.url("https://software-testers.gitlab.io/challenges/automation-challenges/success.html");
  });
});
