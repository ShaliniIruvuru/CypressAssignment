//import { createArrayBindingPattern } from 'typescript';
import { BaseHands, BaseEyes, BaseDependencies } from '../../robots/AmazonApplication/BaseRobot'


export class Dependencies extends BaseDependencies {
   
    visitAmazon(){
        this.accessUrl('https://www.amazon.in/');
    }
    clickOnSignIn(){
        cy.get('#nav-link-accountList').trigger("mouseover")
        cy.get("#nav-flyout-ya-signin span[class='nav-action-inner']",{force: true}).click()
    }
    amazonLogin(){
        cy.get("#ap_email").type("kancharla574@gmail.com")
        cy.get("#continue").click({ multiple: true })
        cy.get("#ap_password").type("Kancharla@574")
        cy.get("#signInSubmit").click();
        
    }

}
export class RobotEyes extends BaseEyes{
    seesMainPage(){
        this.seesIdVisible('nav-logo-sprites')
    } 
    seesTodaysDealsPage(){
        this.seesDomTitle("Amazon.in - Today's Deals")
    } 
    // seesTodaysDealsPage(){
    //     cy.title().should('eq',"Amazon.in - Today's Deals")
    //
    
    
    seesMinimumNumberOfElements(){
        //let value=2;
        //cy.contains("Proceed to checkout ("{value}"  items)").should('be.visible')
        cy.get(".a-size-small.a-color-base.sc-action-quantity").should('be.visible')
    }
    seesSearchBarVisible(){
        this.seesIdVisible("twotabsearchtextbox")
    }
    seesChildWindowText(){
        this.seesIdVisible("breadcrumb-back-link")
    }
    seesLoginText(){
        cy.contains("Hello, pradad").should('be.visible')
    }
    
}
export class RobotHands extends BaseHands{

    clickOnTodaysDeals(){
        this.clickOnDomElement(".nav-a[href='/deals?ref_=nav_cs_gb']")
    }
    clickOnThirdDeal(text:string){
        //this.clickOnDomElement("div[data-testid='grid-deals-container'] [class$='DealGridItem-module__dealItemDisplayGrid_e7RQVFWSOrwXBX4i24Tqg DealGridItem-module__withBorders_2jNNLI6U1oDls7Ten3Dttl DealGridItem-module__withoutActionButton_2OI8DAanWNRCagYDL2iIqN']:nth-of-type(3)")
        //this.clickOnChildDom("div[data-testid='grid-deals-container'] [class$='DealGridItem-module__dealItemDisplayGrid_e7RQVFWSOrwXBX4i24Tqg DealGridItem-module__withBorders_2jNNLI6U1oDls7Ten3Dttl DealGridItem-module__withoutActionButton_2OI8DAanWNRCagYDL2iIqN']");
        this.clickOnDomElement(text)
    }
    clickonInnerThirdDeal(text:string){
        //this.clickOnDomElement("ul[class='a-unordered-list a-nostyle a-horizontal a-spacing-none'] li:nth-of-type(3)")
        this.clickOnDomElement(text)
    }
    selectQuantity(){
        
        this.clickOnSelectItem("select[id='quantity']",'2')
        //this.clickOnDomElement("select[name='quantity']")
        //cy.get("select[id='quantity']").select('2')
    }
    //Add to cart
    clickOnAddToCart(){
    this.clickOnDomElement("#add-to-cart-button")

    }
    searchForMobiles(){
        this.typeTextonId("twotabsearchtextbox","Mobiles")
    }
    clickOnSearchBar(){
        this.clickOnDomElement("#nav-search-submit-button")
        this.wait(2000)

    }
    clickonLastDisplayedItem(){
        //cy.scrollTo(0,4000);
        this.wait(3000)

        cy.get(".sg-col-inner img[class='s-image']").last().scrollIntoView()
       cy.get("a[class='a-link-normal s-no-outline']").last().invoke('removeAttr','target').click();
        //this.ClickOnTextWithClassAndIndex("s-image","35")
    }
    clickOnLeftNavigation(){
        this.clickOnId("nav-hamburger-menu")
    }
    clickOnMobilesComputers(){
        
        this.clickOnDomElement("a[class='hmenu-item'] > div[css='7']")
    }
    clickOnAllMobilePhones(){
        cy.wait(2000)
        this.clickOnDomElement("ul[class='hmenu hmenu-visible hmenu-translateX'] li:nth-child(1) a:nth-child(1)")
    }
    navigateToMainMenu(){
        cy.go('back')
    }

    //with login details
 clickOnYourOrder()
 {
    cy.get('#nav-tools a').eq(1).trigger("mouseover")
    cy.get('.nav-text').contains('Your Orders',{force: true} ).click()
 }
    

}