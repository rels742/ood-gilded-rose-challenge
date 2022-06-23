class Item {
  constructor(name, sellIn, quality){
    this.name = name;
    this.sellIn = sellIn;
    this.quality = quality;
  }
}

class Shop {
  constructor(items=[]){
    this.items = items;
  }
  
      updateConjured() {
        for (let i = 0; i < this.items.length; i++) { 
          if(this.items[i].name.includes("Conjured")) {
            this.items[i].sellIn -= 1
            if (this.items[i].sellIn < 0) {
              this.items[i].quality -= 4
            } else {
              this.items[i].quality -= 2
            } 
            if(this.items[i].quality < 0) {
              this.items[i].quality = 0
            }
          }
        }
      }

        updateStandardItem() {
          for (let i = 0; i < this.items.length; i++) {
            if(this.items[i].name === "+5 Dexterity Vest" || this.items[i].name === "Elixir of the Mongoose") {
              this.items[i].sellIn -= 1
              if(this.items[i].sellIn >= 0) {
                this.items[i].quality -= 1
              } else if 
              (this.items[i].sellIn <= 0 && this.items[i].quality > 0) {
                this.items[i].quality -= 2
              } else {
                if (this.items[i].quality < 0) {
                  this.items[i].quality = 0
                }
              }
            }
          }
        }

        // updateAgedBrie() {

        // }

        // updateSulfuras() {

        // }

        updateBackstagePasses() {
          for (let i = 0; i < this.items.length; i++) {
            if(this.items[i].name.includes("TAFKAL80ETC")) {
              this.items[i].sellIn -= 1
              if (this.items[i].sellIn > 10) {
                this.items[i].quality += 1
              } else if 
              (this.items[i].sellIn < 0) {
                this.items[i].quality = 0
              } else if 
                (this.items[i].sellIn <=5) {
                  this.items[i].quality += 3
                } else {
                  if (this.items[i].sellIn <= 10) {
                    this.items[i].quality += 2
                  }
                }
            }
          }
        }
        
        updateQuality() {
          this.updateConjured()
          this.updateStandardItem()
          this.updateBackstagePasses()
          return this.items
        }
      
      

  // updateQuality() {
  //   for (var i = 0; i < this.items.length; i++) {
  //     const item = this.items[i]
  //     if (this.items[i].name != 'Aged Brie' && this.items[i].name != 'Backstage passes to a TAFKAL80ETC concert') {
  //       if (this.items[i].quality > 0) {
  //         // this code deals with if the quality is greater than 0
  //         if (this.items[i].name != 'Sulfuras, Hand of Ragnaros') {
  //           // ordinary products decrease by 1, if quality is greater than 0
  //           console.log(`item: ${item.name} decreasing quality by 1`);
  //           this.items[i].quality = this.items[i].quality - 1;
  //         } 
  //       } else {
  //         console.log(`item: ${item.name} the quality is already 0`);
  //       }
  //     } else {
  //       // this code deals with aged brie or backstage passes
  //       if (this.items[i].quality < 50) {
  //         this.items[i].quality = this.items[i].quality + 1;
  //         if (this.items[i].name == 'Backstage passes to a TAFKAL80ETC concert') {
  //           if (this.items[i].sellIn < 11) {
  //             if (this.items[i].quality < 50) {
  //               this.items[i].quality = this.items[i].quality + 1;
  //             }
  //           }
  //           if (this.items[i].sellIn < 6) {
  //             if (this.items[i].quality < 50) {
  //               this.items[i].quality = this.items[i].quality + 1;
  //             }
  //           }
  //         }
  //       }
  //     }


  //     if (this.items[i].name != 'Sulfuras, Hand of Ragnaros') {
  //       // any item that isn't sufuras, sell in decreases by 1 
  //       this.items[i].sellIn = this.items[i].sellIn - 1;
  //     }


  //     if (this.items[i].sellIn < 0) {
  //       // this code deals with if sell in is below 0 
  //       if (this.items[i].name != 'Aged Brie') {
  //         // not aged brie
  //         if (this.items[i].name != 'Backstage passes to a TAFKAL80ETC concert') {
  //           // not backstage passes 
  //           if (this.items[i].quality > 0) {
  //             // but the quality is over 0
  //             if (this.items[i].name != 'Sulfuras, Hand of Ragnaros') {
  //               // but if it is not sulfuras then the quality decreases by 1 
  //               // this applies to a standard item - any item that is not stated above 
  //               console.log(`item: ${item.name} decreasing quality by 1 (again as sellin is less than 0)`);
  //               this.items[i].quality = this.items[i].quality - 1;
  //             }
  //           }
  //         } else {
  //           // if it is backstage passes to the concert then the quality = 0  
  //           this.items[i].quality = this.items[i].quality - this.items[i].quality;
  //         }
  //       } else {
  //         //if it is aged brie
  //         if (this.items[i].quality < 50) {
  //           // if the quality is less than 50 then it increases by 1
  //           this.items[i].quality = this.items[i].quality + 1;
  //         }
  //       }
  //     }
  //   }

  //   return this.items;
  // }
}
module.exports = {
  Item,
  Shop
}


// TO DELETE AT THE END 

// add update functionality for each type of item one at a time 
// current item varaiable 

// adding one function that deals with one item type. (extracting). do for each item type .

//then can get ride of the else big chunk 




// class Shop {
//   constructor(items = []) {
//     this.items = items
//   }

//  


// // ...

//   updateQuality() {
//     for (let i = 0; i < this.items.length; i++) {
//       const currentItem = this.items[i]

//       if (currentItem.name.includes('Conjured')) {
//         this.updateConjuredItem(currentItem)
//       } else {
//         if ( ... original code
//       }
//    }
//  } to start me off


 // updateConjuredItem(item) {
    //     item.sellIn -= 1
    //     if (item.sellIn < 0) {
    //       item.quality -= 4
    //     } else if (item.sellIn > 0) {
    //       item.quality -= 2
    //     } else {
    //       if(item.quality < 0) {
    //         item.quality = 0
    //       }
    //     }

    //   }
