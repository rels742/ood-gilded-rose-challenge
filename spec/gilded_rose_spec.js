const Shop = require('../src/shop')
const Item = require('../src/item')

describe('Gilded Rose', function () {
  it('standard item: sellIn = 0, quality = 0', function () {
    const gildedRose = new Shop([
      new Item('+5 Dexterity Vest' || 'Elixir of the Mongoose', 0, 0)
    ])
    const items = gildedRose.updateQuality()
    expect(items[0].name).toEqual(
      '+5 Dexterity Vest' || 'Elixir of the Mongoose'
    )
    expect(items[0].sellIn).toEqual(-1)
    expect(items[0].quality).toEqual(0)
  })

  it('standard item: sellIn = 1, quality = 3', function () {
    const gildedRose = new Shop([
      new Item('+5 Dexterity Vest' || 'Elixir of the Mongoose', 1, 3)
    ])
    const items = gildedRose.updateQuality()
    expect(items[0].name).toEqual(
      '+5 Dexterity Vest' || 'Elixir of the Mongoose'
    )
    expect(items[0].sellIn).toEqual(0)
    expect(items[0].quality).toEqual(2)
  })

  // see if there are any special cases for a standard item and test them.

  it('standard item: sellIn = 0, quality = 3', function () {
    const gildedRose = new Shop([
      new Item('+5 Dexterity Vest' || 'Elixir of the Mongoose', 0, 3)
    ])
    const items = gildedRose.updateQuality()
    expect(items[0].name).toEqual(
      '+5 Dexterity Vest' || 'Elixir of the Mongoose'
    )
    expect(items[0].sellIn).toEqual(-1)
    expect(items[0].quality).toEqual(1)
  })

  // write tests for special items, eg aged brie
  it('aged brie: sellIn = 0, quality = 3. Aged brie quality increases x2 when sell in date has passed', function () {
    const gildedRose = new Shop([new Item('Aged Brie', 0, 3)])
    const items = gildedRose.updateQuality()
    expect(items[0].name).toEqual('Aged Brie')
    expect(items[0].sellIn).toEqual(-1)
    expect(items[0].quality).toEqual(5)
  })

  it('aged brie: sellIn = -1, quality = 10. Aged brie quality increases x2 when sell in date has passed', function () {
    const gildedRose = new Shop([new Item('Aged Brie', -1, 10)])
    const items = gildedRose.updateQuality()
    expect(items[0].name).toEqual('Aged Brie')
    expect(items[0].sellIn).toEqual(-2)
    expect(items[0].quality).toEqual(12)
  })

  it('aged brie: sellIn = 10, quality = 1. Aged brie quality increases x1 the older it gets still within sellin date', function () {
    const gildedRose = new Shop([new Item('Aged Brie', 10, 1)])
    const items = gildedRose.updateQuality()
    expect(items[0].name).toEqual('Aged Brie')
    expect(items[0].sellIn).toEqual(9)
    expect(items[0].quality).toEqual(2)
  })

  it('aged brie: sellIn = 0, quality = 50. Quality cannot go over 50', function () {
    const gildedRose = new Shop([new Item('Aged Brie', 0, 50)])
    const items = gildedRose.updateQuality()
    expect(items[0].name).toEqual('Aged Brie')
    expect(items[0].sellIn).toEqual(-1)
    expect(items[0].quality).toEqual(50)
  })

  it('sulfuras, hand of ragnaros: sellIn = 2, quality = 80. Sulfuras stays the same', function () {
    const gildedRose = new Shop([new Item('Sulfuras, Hand of Ragnaros', 2, 80)])
    const items = gildedRose.updateQuality()
    expect(items[0].name).toEqual('Sulfuras, Hand of Ragnaros')
    expect(items[0].sellIn).toEqual(2)
    expect(items[0].quality).toEqual(80)
  })

  it('sulfuras, hand of ragnaros: sellIn = 0, quality = 80. Sulfuras stays the same', function () {
    const gildedRose = new Shop([new Item('Sulfuras, Hand of Ragnaros', 0, 80)])
    const items = gildedRose.updateQuality()
    expect(items[0].name).toEqual('Sulfuras, Hand of Ragnaros')
    expect(items[0].sellIn).toEqual(0)
    expect(items[0].quality).toEqual(80)
  })

  it('Backstage passes: sellIn = 12, quality = 28. Concert sellin is over 10 days', function () {
    const gildedRose = new Shop([
      new Item('Backstage passes to a TAFKAL80ETC concert', 12, 28)
    ])
    const items = gildedRose.updateQuality()
    expect(items[0].name).toEqual('Backstage passes to a TAFKAL80ETC concert')
    expect(items[0].sellIn).toEqual(11)
    expect(items[0].quality).toEqual(29)
  })

  it('Backstage passes: sellIn = 10, quality = 45. Concert is within 10 days or less', function () {
    const gildedRose = new Shop([
      new Item('Backstage passes to a TAFKAL80ETC concert', 10, 45)
    ])
    const items = gildedRose.updateQuality()
    expect(items[0].name).toEqual('Backstage passes to a TAFKAL80ETC concert')
    expect(items[0].sellIn).toEqual(9)
    expect(items[0].quality).toEqual(47)
  })

  it('Backstage passes: sellIn = 1, quality = 3. Concert is within 5 days or less', function () {
    const gildedRose = new Shop([
      new Item('Backstage passes to a TAFKAL80ETC concert', 1, 3)
    ])
    const items = gildedRose.updateQuality()
    expect(items[0].name).toEqual('Backstage passes to a TAFKAL80ETC concert')
    expect(items[0].sellIn).toEqual(0)
    expect(items[0].quality).toEqual(6)
  })

  it('Backstage passes: sellIn = -1, quality = 30. Concert has passed', function () {
    const gildedRose = new Shop([
      new Item('Backstage passes to a TAFKAL80ETC concert', -1, 30)
    ])
    const items = gildedRose.updateQuality()
    expect(items[0].name).toEqual('Backstage passes to a TAFKAL80ETC concert')
    expect(items[0].sellIn).toEqual(-2)
    expect(items[0].quality).toEqual(0)
  })

  // after writing tests for all current items, write tests for Conjured Mana Cake.

  it('Conjured Mana Cake: sellIn = 5, quality = 30. Degrate twice as fast as normal items', function () {
    const gildedRose = new Shop([new Item('Conjured Mana Cake', 5, 30)])
    const items = gildedRose.updateQuality()
    expect(items[0].name).toEqual('Conjured Mana Cake')
    expect(items[0].sellIn).toEqual(4)
    expect(items[0].quality).toEqual(28)
  })

  it('Conjured Mana Cake: sellIn = 0, quality = 50. After sell in degrates twice as fast as normal so 4 times', function () {
    const gildedRose = new Shop([new Item('Conjured Mana Cake', 0, 50)])
    const items = gildedRose.updateQuality()
    expect(items[0].name).toEqual('Conjured Mana Cake')
    expect(items[0].sellIn).toEqual(-1)
    expect(items[0].quality).toEqual(46)
  })
})
