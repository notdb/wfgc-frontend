describe("My First Test", () => {
  it("Does not do much!", () => {
    expect(true).to.equal(true);
  });
});

describe("My First Test", () => {
  it("Does not do much!", () => {
    expect(true).to.equal(false);
  });
});

describe("My First Test", () => {
  it("Visit the Kitchen Sink", () => {
    cy.visit("https://example.cypress.io");
    cy.contains("type");
  });
});
