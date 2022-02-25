/// <reference types="cypress" />

describe("Login Challenge", () => {
  beforeEach(() => {
    cy.visit(
      "https://software-testers.gitlab.io/challenges/automation-challenges/index.html"
    );
    cy.get("body > main > section > div > ul > li:nth-child(9) > a").click();
  });

  it("1 - Click Log in when nothing is entered. Verify the message! ", () => {
    cy.get("#user-name").should("not.have.text");
    cy.get("#password").should("not.have.text");
    cy.get("#login-btn").click();
    cy.get("#conf-msg").should(
      "have.text",
      "You have NOT filled Username field"
    );
  });

  it("2 - Click Log in when Username is filled & Password is empty. Verify the message!", () => {
    cy.get("body > section > div.topnav.container > a").click("");
    cy.get("#hamburger-menu-verify").click();
    cy.url(
      "https://software-testers.gitlab.io/challenges/automation-challenges/success.html"
    );
  });
});
