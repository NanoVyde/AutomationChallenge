/// <reference types="cypress" />

describe("Drop Down Challenge", () => {
  beforeEach(() => {
    cy.visit(
      "https://software-testers.gitlab.io/challenges/automation-challenges/index.html"
    );
    cy.get("a[href='drop-down.html']").click();
  });

  it("1 - Verify Error Message and Country when selected country is NOT Lithuania! ", () => {
    // cy.get("#country > option:nth-child(13)").click();
    cy.get("#country").click();
    cy.select("option[value='Afganistan']").click();
    cy.get("#dropdown-verify-btn").click();
    cy.get("#conf-msg").should(
      "have.text",
      "Selected country is Afganistan, NOT Lithuania!"
    );
    //Ar cia reiktu value patikrinti drop down ir erorr mesage? ar tipo uztenka kaip virsui?
  });
  //#country > option:nth-child(29)

  // it("2 - Verify Error Message with at least 3 countries", () => {});

  // it("3 - To solve a challenge select the country Lithuania from drop down list and VERIFY it!", () => {
  //   cy.get("#country > option:nth-child(125)").click({force: true});
  //   cy.get("#dropdown-verify-btn").click({force: true});
  //   cy.url(
  //     "https://software-testers.gitlab.io/challenges/automation-challenges/success.html"
  //   );
  // });
});
