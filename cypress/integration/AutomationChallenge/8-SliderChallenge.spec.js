/// <reference types="cypress" />

describe("Slider Challenge", () => {
  beforeEach(() => {
    cy.visit(
      "https://software-testers.gitlab.io/challenges/automation-challenges/index.html"
    );
    cy.get("a[href='slider.html']").click();
  });
  var updateSlider = (sliderValue) => {
    cy.get("input[type=range]")
      .as("range")
      .invoke("val", sliderValue)
      .trigger("input");
    cy.get("label[for='range']").should("have.text", sliderValue);
  };

  it("1 - Verify Error Message when number is NOT 100. Use boundary values!", () => {
    var notReachCheck = () => {
      cy.get("#slider-verify-btn").click();
      cy.confirmMessage("You have NOT reached 100 yet, try harder!🤪");
    };

    cy.get("#slider-verify-btn").click();
    cy.confirmMessage("You have NOT reached 100 yet, try harder!🤪");

    updateSlider("10");
    notReachCheck();
    updateSlider("35");
    notReachCheck();
    updateSlider("65");
    notReachCheck();
    updateSlider("75");
    notReachCheck();
    updateSlider("95");
    notReachCheck();
  });

  it("2 - To solve a challenge reach 100 and click Verify button!", () => {
    updateSlider("100");
    cy.successConfirmation("#slider-verify-btn");
  });
});
