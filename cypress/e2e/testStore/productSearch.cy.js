import HomePagePO from "../../support/pageObjects/HomePagePO";
import HeaderPO from "../../support/pageObjects/HeaderPO";
import SearchResultPO from "../../support/pageObjects/SearchResultPO";
import ProductCardPO from "../../support/pageObjects/ProductCardPO";
///<reference types="Cypress"/>
describe("Поиск на сайте", () => {
  const homePage = new HomePagePO();
  const header = new HeaderPO();
  const searchResult = new SearchResultPO();
  const productCard = new ProductCardPO();
  const partNameProduct = "benefit";
  const fullProductName = "benefit girl meets pearl";

  beforeEach(() => {
    homePage.visitHomePage();
  });

  it("Поиск по части названия через нажатие кнопки клавиатуры Enter", () => {
    header.searchInput(partNameProduct);
    searchResult.checkProductName(partNameProduct);
  });
  it("Поиск по части названия через нажатие кнопки поиска", () => {
    header.searchInput(partNameProduct, true);
    searchResult.checkProductName(partNameProduct);
  });
  it("Поиск по полному названию через нажатие кнопки поиска", () => {
    header.searchInput(fullProductName, true);
    productCard.checkh1ProductName(fullProductName);
  });
});
