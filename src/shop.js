class Shop {
  constructor(items = []) {
    this.items = items
  }

  updateConjured(item) {
    if (item.name.includes('Conjured')) {
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
  }

  updateStandardItem(item) {
    if (
      item.name === '+5 Dexterity Vest' ||
      item.name === 'Elixir of the Mongoose'
    ) {
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
  }

  updateSulfuras(item) {
    if (item.name.includes('Sulfuras')) {
      // Do nothing
    }
  }

  updateAgedBrie(item) {
    if (item.name === 'Aged Brie') {
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
  }

  updateBackstagePasses(item) {
    if (item.name.includes('Backstage passes')) {
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
  }

  updateQuality() {
    for (let i = 0; i < this.items.length; i++) {
      const currentItem = this.items[i]

      this.updateAgedBrie(currentItem)
      this.updateConjured(currentItem)
      this.updateBackstagePasses(currentItem)
      this.updateSulfuras(currentItem)
      this.updateStandardItem(currentItem)
    }
    return this.items
  }
}

module.exports = Shop
