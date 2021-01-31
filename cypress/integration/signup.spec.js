describe("Form test", () => {
  it("Can fill the form", () => {
    cy.visit("test.crowdstreet.com");

    cy.get(".tablet-menu .join-button").click();

    const email = Date.now() + "@example.com";
    cy.get("#create_account_email").type(email).should("have.value", email);

    cy.contains("First Name")
      .parent()
      .within(() => {
        cy.get("input").type("Kiwi").should("have.value", "Kiwi");
      });

    cy.contains("Last Name")
      .parent()
      .within(() => {
        cy.get("input").type("Murakami").should("have.value", "Murakami");
      });

    cy.contains("Create a Password")
      .parent()
      .within(() => {
        cy.get("input").type("Test123!").should("have.value", "Test123!");
      });

    cy.contains("Confirm Password")
      .parent()
      .within(() => {
        cy.get("input").type("Test123!").should("have.value", "Test123!");
      });

    cy.contains("Referred By")
      .parent()
      .within(() => {
        cy.get("input").type("Chee").should("have.value", "Chee");
      });

    cy.contains("Phone Number")
      .parent()
      .within(() => {
        cy.get("input").type("1234567890").should("have.value", "1234567890");
      });

    cy.contains("Street Address")
      .parent()
      .within(() => {
        cy.get("input").type("1000 Main").should("have.value", "1000 Main");
      });

    cy.contains("City")
      .parent()
      .within(() => {
        cy.get("input").type("Portland").should("have.value", "Portland");
      });

    cy.contains("State")
      .parent()
      .within(() => {
        cy.get("div[action='select']").click();
        cy.get("div[role='option']").contains("Oregon (OR)").click();
      });

    cy.contains("Zip")
      .parent()
      .within(() => {
        cy.get("input").type("97205").should("have.value", "97205");
      });

    cy.contains("Country")
      .parent()
      .within(() => {
        cy.get("div[role='combobox']").click();
        cy.get("div[role='option']")
          .contains("United States of America")
          .click();
      });

    cy.contains("Yes").click();

    cy.contains("I agree")
      .parent()
      .within(() => {
        cy.get("label").click();
      });

    cy.contains("I understand")
      .parent()
      .within(() => {
        cy.get("label").click();
      });

    cy.window().then((win) => {
      win.document
        .querySelector("iframe[src*='recaptcha']")
        .contentDocument.getElementById("recaptcha-token")
        .click();
    });

    cy.contains("Sign Up").click();
  });
});
