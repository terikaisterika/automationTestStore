class HeaderPO {
  baseUrl = Cypress.env("host");
  menuLinks = {
    specials: [0, `${this.baseUrl}index.php?rt=product/special`],
    account: [1, `${this.baseUrl}index.php?rt=account/account`],
    cart: [2, `${this.baseUrl}index.php?rt=checkout/cart`],
    checkout: [3, `${this.baseUrl}index.php?rt=checkout/shipping`],
  };
  topMenuLinks() {
    cy.get();
  }
  /**
   *Поиск по части названия. Переводит на страницу результата поиска,
   * если продуктов больше одного
   * @param {String} word часть названия продукта
   * @param {boolean} button поиск через enter (false по умолчанию) или кнопку (true)
   */
  searchInput(word, button = false) {
    cy.get("#filter_keyword").then(($search) => {
      if (button) {
        cy.wrap($search).type(word);
        cy.get('#search_form [title="Go"]').click();
      } else {
        cy.wrap($search).type(`${word}{enter}`);
      }
    });
  }
  /**Проверяет, что ссылки главного (верхнего) меню
   * - соответсвуют ожидаемому порядку и урлу
   */
  checkLinkMainMenu() {
    console.log(this.menuLinks);
    cy.get("#main_menu_top>li> a").each((el, ind) => {
      cy.wrap(el)
        .find("span")
        .then((link) => {
          let linkText = link.text();
          linkText = linkText.toLowerCase();

          switch (linkText) {
            case "specials":
              expect(ind).to.be.eq(this.menuLinks[linkText][0]);
              expect(el.attr("href")).to.be.eq(this.menuLinks.specials[1]);
              break;
            case "account":
              expect(ind).to.be.eq(this.menuLinks[linkText][0]);
              expect(el.attr("href")).to.be.eq(this.menuLinks.account[1]);
              break;
            case "cart":
              expect(ind).to.be.eq(this.menuLinks[linkText][0]);
              expect(el.attr("href")).to.be.eq(this.menuLinks.cart[1]);
              break;
            case "checkout":
              expect(ind).to.be.eq(this.menuLinks[linkText][0]);
              expect(el.attr("href")).to.be.eq(this.menuLinks.checkout[1]);
              break;
          }
        });
      //console.log(linkText);
    });
  }
  /**Возвращает элементы ссылок хлебных крошек для дальнейшей обработки */
  getBreadCrumbs() {
    return cy.get(".breadcrumb li a");
  }
}
export default HeaderPO;
