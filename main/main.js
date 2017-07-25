/**
 * Created by wyn on 17-7-25.
 */
function printReceipt(inputs){
    let cartItems=buildItems(inputs);
    let subtotalItems=getPromotions(cartItems);
    let totalItems=geTotal(subtotalItems);
    let printStr=printReceipt(totalItems);
    console.log(printStr);
}

function  buildItems(inputs){
    let allItems=loadAllItems();
    for(let input of inputs){
        let inputspilt=input.spilt("-");
        let barcode=inputspilt[0];
        let count=inputspilt[1];
        let cartitem;
        cartitem=allItems.

    }

}