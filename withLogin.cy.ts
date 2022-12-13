import { RobotEyes, RobotHands, Dependencies } from '../../robots/AmazonApplication/Amazon';

context('Amazon Test Without Login', () => {
    const robotEyes = new RobotEyes();
    const robotHands = new RobotHands();
    const dependencies = new Dependencies();
    
        describe('Search the required information for Amazon Shopping', ()=>{
            before(()=> {
                dependencies.visitAmazon();
                dependencies.clickOnSignIn()
                dependencies.amazonLogin()
            })
    
            it("navigate to Home page", () => {
                robotEyes.seesLoginText();//Assertion for login text
                robotHands.clickOnYourOrder()
            })
        })
    })
