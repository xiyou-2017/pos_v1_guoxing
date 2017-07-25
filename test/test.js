/**
 * Created by wyn on 17-7-25.
 */
describe('unit test',()=>{
    describe ('buildItems',()=>{
    let inputs=[
        'ITEM000001',
        'ITEM000001',
        'ITEM000001',
        'ITEM000001',
        'ITEM000001',
        'ITEM000003-2',
        'ITEM000005',
        'ITEM000005',];
        it('should print correct cartItems',()=>{

            let testItems=buildItems(inputs);
            let expectedItems={
               cartitem:{
                    item:{
                        barcode: 'ITEM000001',
                        name: '雪碧',
                        unit: '瓶',
                        price: 3.00
                    },
                    count:5
                },
                cartitem:{
                    item:{
                        barcode: 'ITEM000003',
                        name: '荔枝',
                        unit: '斤',
                        price: 15.00
                    },
                    count:2
                },
                cartitem:{
                   item:{
                       barcode: 'ITEM000005',
                       name: '方便面',
                       unit: '袋',
                       price: 4.50
                   },
                    count:2

                }
            };
            expect(testItems).toEqual(expectedItems);
        });
});
});