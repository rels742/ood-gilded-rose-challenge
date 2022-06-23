class Item {
  constructor(name, sellIn, quality) {
    this.name = name
    this.sellIn = sellIn
    this.quality = quality
  }
}

class Shop {
  constructor(items = []) {
    this.items = items
  }

  updateConjured(item) {
    item.sellIn -= 1

    if (item.sellIn < 0) {
      item.quality -= 4
    } else {
      item.quality -= 2
    }

    if (item.quality < 0) {
      item.quality = 0
    }
  }

  updateSulfuras(item) {
    //Do nothing
  }

  updateStandardItem(item) {
    item.sellIn -= 1

    if (item.sellIn < 0) {
      item.quality -= 2
    } else {
      item.quality -= 1
    }

    if (item.quality < 0) {
      item.quality = 0
    }
  }

  updateAgedBrie(item) {
    item.sellIn -= 1

    if (item.sellIn < 0) {
      item.quality += 2
    } else {
      item.quality += 1
    }

    if (item.quality > 50) {
      item.quality = 50
    }
  }

  updateBackstagePasses(item) {
    item.sellIn -= 1

    if (item.sellIn > 10) {
      item.quality += 1
    } else if (item.sellIn < 0) {
      item.quality = 0
    } else if (item.sellIn <= 5) {
      item.quality += 3
    } else {
      if (item.sellIn <= 10) {
        item.quality += 2
      }
    }
  }

  updateQuality() {
    for (let i = 0; i < this.items.length; i++) {
      const currentItem = this.items[i]

      if (currentItem.name === 'Aged Brie') {
        this.updateAgedBrie(currentItem)
      } else if (currentItem.name.includes('Conjured')) {
        this.updateConjured(currentItem)
      } else if (currentItem.name.includes('Backstage passes')) {
        this.updateBackstagePasses(currentItem)
      } else if (currentItem.name.includes('Sulfuras')) {
        // do nothing
        this.updateSulfuras(currentItem)
      } else {
        this.updateStandardItem(currentItem)
      }
    }
    return this.items
  }
}

module.exports = {
  Item,
  Shop
}
