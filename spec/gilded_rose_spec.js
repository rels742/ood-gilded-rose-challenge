var {Shop, Item} = require('../src/gilded_rose.js');
describe("Gilded Rose", function() {

  it("standard item: sellIn = 0, quality = 0", function() {
    const gildedRose = new Shop([ new Item("standard item", 0, 0) ]);
    const items = gildedRose.updateQuality();
    expect(items[0].name).toEqual("standard item");
    expect(items[0].sellIn).toEqual(-1);
    expect(items[0].quality).toEqual(0);
  });

  it("standard item: sellIn = 1, quality = 3", function() {
    const gildedRose = new Shop([ new Item("standard item", 1, 3) ]);
    const items = gildedRose.updateQuality();
    expect(items[0].name).toEqual("standard item");
    expect(items[0].sellIn).toEqual(0);
    expect(items[0].quality).toEqual(2);
  });

  // see if there are any special cases for a standard item and test them.

  it("standard item: sellIn = 0, quality = 3", function() {
    const gildedRose = new Shop([ new Item("standard item", 0, 3) ]);
    const items = gildedRose.updateQuality();
    expect(items[0].name).toEqual("standard item");
    expect(items[0].sellIn).toEqual(-1);
    expect(items[0].quality).toEqual(1);
  });

  // write tests for special items, eg aged brie which has 4 possible tests
  it("aged brie: sellIn = 0, quality = 3", function() {
    const gildedRose = new Shop([ new Item("Aged Brie", 0, 3) ]);
    const items = gildedRose.updateQuality();
    expect(items[0].name).toEqual("Aged Brie");
    expect(items[0].sellIn).toEqual(-1);
    expect(items[0].quality).toEqual(5);
  });


  // after writing tests for all special items, write tests for mana cake.

});
