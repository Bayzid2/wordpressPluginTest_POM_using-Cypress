import LoginPage from "../../pages/loginPage";
import AddCart from "../../pages/woocommerce/addCart";
import CheckoutPage from "../../pages/woocommerce/CheckoutPage";
import MyAccount from "../../pages/woocommerce/MyAccount";
import Backend from "../../pages/woocommerce/Backend";


describe('Test Suite for Woocommerce',()=>{
    const login = new LoginPage();
    const addCart = new AddCart();
    const checkoutPage = new CheckoutPage();
    const myAccount = new MyAccount();
    const backend = new Backend();


   beforeEach(()=>{
  login.visit()
  login.enterUsername("bayzid007")
  login.enterPassword("hKxVkM1mPjw ")
  login.clickLogin()
 
 })

    it("Scenario 1: End-to-End Checkout Flow",()=>{
        addCart.visitShop()
        addCart.productAddToCart()
        addCart.clickCart()
        //addCart.increaseItem()
        addCart.gotoCart()
        addCart.gotoCheckout()
        checkoutPage.clickCOD()
        checkoutPage.placeOrder()
        checkoutPage.verifyOrderPlaced()
        backend.visitBackend()
        backend.verifyOrderAddedToTable()
    })

    it("Scenario 2: User Account Order History",()=>{
        addCart.visitShop()
        myAccount.clickMyAccount()
        myAccount.clickOrders()
        myAccount.orderDetails()
        myAccount.verifyTotalPrice()
         backend.visitBackend()
        backend.clickPreview()
        backend.verifyQuantity()
    })
})