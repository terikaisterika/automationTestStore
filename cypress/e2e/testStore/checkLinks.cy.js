import HeaderPO from "../../support/pageObjects/HeaderPO";
import HomePagePO from "../../support/pageObjects/HomePagePO";
///<reference types="Cypress"/>
describe("Проверка ссылок", () => {
  const header = new HeaderPO();
  const homeP = new HomePagePO();
  it("Проверка соответствия ссылок в главном меню", () => {
    cy.viewport(1260, 700);
    homeP.visitHomePage();
    header.checkLinkMainMenu();
  });
});
