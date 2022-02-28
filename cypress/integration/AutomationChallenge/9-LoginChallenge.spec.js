/// <reference types="cypress" />

describe("Login Challenge", () => {
  beforeEach(() => {
    cy.visit(
      "https://software-testers.gitlab.io/challenges/automation-challenges/index.html"
    );
    cy.get("a[href='login.html']").click();
  });

  it("1 - Click Log in when nothing is entered. Verify the message!", () => {
    cy.get("#user-name").should("not.have.text");
    cy.get("#password").should("not.have.text");
    cy.get("#login-btn").click();
    cy.confirmMessage("You have NOT filled Username field");
  });

  it("2 - Click Log in when Username is filled & Password is empty. Verify the message!", () => {
    cy.get("#user-name").type("Username");
    cy.get("#password").should("not.have.text");
    cy.get("#login-btn").click();
    cy.confirmMessage("Either password is incorrect or not filled!");
  });

  it("3 - Click Log in when Username is NOT filled & Password is filled. Verify the message!", () => {
    cy.get("#user-name").should("not.have.text");
    cy.get("#password").type("abcd1234");
    cy.get("#login-btn").click();
    cy.confirmMessage("You have NOT filled Username field");
  });

  it("4 - Click Log in when Username is filled but Password is invalid. Verify the message!", () => {
    cy.get("#user-name").type("Username");
    cy.get("#password").type("abc");
    cy.get("#login-btn").click();
    cy.confirmMessage("Either password is incorrect or not filled!");
  });

  it("5 - To solve a challenge click Log in when Username & Password are correctly filled!", () => {
    cy.get("#user-name").type("Username");
    cy.get("#password").type("abcd1234");
    cy.successConfirmation("#login-btn");
  });
});
