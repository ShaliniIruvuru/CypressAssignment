import { RobotEyes, RobotHands, Dependencies } from '../../robots/AmazonApplication/Amazon';

context('Amazon Test Without Login', () => {
    const robotEyes = new RobotEyes();
    const robotHands = new RobotHands();
    const dependencies = new Dependencies();
    
        describe.skip('Search the required information for Amazon Shopping', ()=>{
            before(()=> {
                dependencies.visitAmazon();
            })
    
            it("navigate to Home page", () => {
                robotEyes.seesMainPage();//Assertion for logo
                robotHands.clickOnTodaysDeals();//click on Third Deal
                
            });
            it('navigate to TodaysDeals Page',()=>{
                robotEyes.seesTodaysDealsPage();//verify the TodaysDeal page
                robotHands.clickOnThirdDeal("div[data-testid='grid-deals-container'] [class$='DealGridItem-module__dealItemDisplayGrid_e7RQVFWSOrwXBX4i24Tqg DealGridItem-module__withBorders_2jNNLI6U1oDls7Ten3Dttl DealGridItem-module__withoutActionButton_2OI8DAanWNRCagYDL2iIqN']:nth-of-type(3)");

                robotHands.clickonInnerThirdDeal("ul[class='a-unordered-list a-nostyle a-horizontal a-spacing-none'] li:nth-of-type(3)")

            })
            it('navigate to AddtoCart Page',()=>{
                robotHands.selectQuantity() //select the quantity
                robotHands.clickOnAddToCart(); //click on AddToCart
                robotEyes.seesMinimumNumberOfElements()

            })

        })

        describe('Search the required information for Amazon Shopping', ()=>{
            before(()=> {
                dependencies.visitAmazon();
            })
            it('search for Mobiles',()=>{
                robotEyes.seesSearchBarVisible()
                robotHands.searchForMobiles();
                robotHands.clickOnSearchBar()

            })
            it('get the Last Displayed Item',()=>{
                robotHands.clickonLastDisplayedItem();
                //robotEyes.seesChildWindowText();
                

            })
            it('childwindow navigation to select mobiles',()=>{
                robotHands.clickOnLeftNavigation();
                robotHands.clickOnMobilesComputers();
                robotHands.clickOnAllMobilePhones();
            })
        })
 
    })