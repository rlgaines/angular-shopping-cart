

var inventoryDB = [
    {
        "_id": "55c8ee82152165d244b98300",
        "name": "Bayard stew",
        "ingredients": "concentrated gluten, jewelry, dill, beetle nut, toast",
        "caffeineScale": 244,
        "price": 15.40,
        "inStock": true,
        "rating": 1,
        "imageUrl": "http://s7d5.scene7.com/is/image/Teavana/32664_d?$cimg$",
        "__v": 0,
        "categories": [ "dark", "cold"]
    },

    {
        "_id": "55c8ee82152165d244b98301",
        "name": "Incompactness syrup",
        "ingredients": "fennel, nutmeg leaves, parsley, cream of 'cream of cream', blarney",
        "caffeineScale": 49,
        "price": 73.48,
        "inStock": true,
        "rating": 2,
        "imageUrl": "http://s7d5.scene7.com/is/image/Teavana/32303_d?$cimg$",
        "__v": 0,
        "categories": ["awesome"]
    },
    {
        "_id": "55c8ee82152165d244b98302",
        "name": "Flexner white tea",
        "ingredients": "hot sauce, iron, beetle nut, fresco, blarney, raw mashed potato",
        "caffeineScale": 38,
        "price": 49.91,
        "inStock": true,
        "rating": 4,
        "imageUrl": "http://s7d5.scene7.com/is/image/Teavana/31358_d?$cimg$",
        "__v": 0,
        "categories": ["cold"]
    },
    {
        "_id": "55c8ee82152165d244b98303",
        "name": "Pressor leaf",
        "ingredients": "purina chow, flavorings, pepper, acorns, quality tallow, old sock, bay leaf",
        "caffeineScale": 153,
        "price": 54.96,
        "inStock": true,
        "rating": 1,
        "imageUrl": "http://s7d5.scene7.com/is/image/Teavana/31358_d?$cimg$",
        "__v": 0,
        "categories": ["dry", "hot", "awesome"]
    },
    {
        "_id": "55c8ee82152165d244b98304",
        "name": "Flexner veggie tea",
        "ingredients": "cream of tartar, eggplant, cake, deer antler",
        "caffeineScale": 181,
        "price": 24.45,
        "inStock": true,
        "rating": 1,
        "imageUrl": "http://s7d5.scene7.com/is/image/Teavana/32621_d?$cimg$",
        "__v": 0,
        "categories": ["summer"]
    },
    {
        "_id": "55c8ee82152165d244b98305",
        "name": "Topflighter malt",
        "ingredients": "botox, toast, cream of 'cream of 'cream of cream'', kitchen scraps, beef, aligator tongue, lawn clippings",
        "caffeineScale": 241,
        "price": 44.86,
        "inStock": true,
        "rating": 3,
        "imageUrl": "http://s7d5.scene7.com/is/image/Teavana/31359_d?$cimg$",
        "__v": 0,
        "categories": ["dry","lucid","warm"]
    },
    {
        "_id": "55c8ee82152165d244b98306",
        "name": "Cooking mix",
        "ingredients": "flavorings, roasted mushrooms, toast, tumeric",
        "caffeineScale": 230,
        "price": 69.73,
        "inStock": true,
        "rating": 3,
        "imageUrl": "http://s7d5.scene7.com/is/image/Teavana/32303_d?$cimg$",
        "__v": 0,
        "categories": ["summer"]
    },
    {
        "_id": "55c8ee82152165d244b98307",
        "name": "Cooking stew",
        "ingredients": "eggplant",
        "caffeineScale": 122,
        "price": 60.03,
        "inStock": true,
        "rating": 2,
        "imageUrl": "http://s7d5.scene7.com/is/image/Teavana/31358_d?$cimg$",
        "__v": 0,
        "categories": ["dry","winter","lucid"]
    },
    {
        "_id": "55c8ee82152165d244b98308",
        "name": "Prevenient herb tea",
        "ingredients": "cream of tartar, cream of cream, kitchen scraps, flavorings",
        "caffeineScale": 196,
        "price": 13.74,
        "inStock": true,
        "rating": 3,
        "imageUrl": "http://s7d5.scene7.com/is/image/Teavana/32174_d?$cimg$",
        "__v": 0,
        "categories": ["lucid","hot"]
    },
    {
        "_id": "55c8ee82152165d244b98309",
        "name": "Angular mix",
        "ingredients": "hot sauce, lawn clippings, fennel, parsley, quinine",
        "caffeineScale": 196,
        "price": 41.58,
        "inStock": true,
        "rating": 2,
        "imageUrl": "http://s7d5.scene7.com/is/image/Teavana/32621_d?$cimg$",
        "__v": 0,
        "categories": ["spring", "warm","winter"]
    }

];
    
	





app.service("ShoppingService", ['chargesService',function(chargesService){
	var ordertotal = 0;
	var result = {};
  var chargePageArray = []; 
	// getInventory()
	// getCategories()

	return {
		getOrderTotal: function () {
			return ordertotal;
		},
		getInfo: function (){
			return inventoryDB;
		},
        //creates array usable for details.html
		concatArray: function () {
			var newArr = []
			return inventoryDB.reduce(function(prev, curr){
				return prev.concat(curr.categories);
			},[])
			.reduce(function (acc, category) {
				if ( acc.indexOf(category) === -1 ) { acc.push(category); }
				return acc;
			}, []);
		},
        //creates total price
		totalPrice: function(amount, price){
			// console.log("service:",amount, price)
			var total = amount * price
				ordertotal += total;
				// console.log("ordertotal",ordertotal)
				return ordertotal
		},
        //generates array of all items selected
		chargesPage: function(name, price, image, caffeineScale, ingredients, rating, amount){
			result.name = name;
            result.individualPrice = price;
			result.totalPrice = price * amount;
			result.image = image;
			result.caffeineScale = caffeineScale;
			result.ingredients = ingredients;
			result.rating = rating;
			result.amount = amount;
			chargePageArray.push(result)
			result = {}
			console.log('chargePageArray:',chargePageArray)
			return chargePageArray
		},
        //returns array of all infomation from each item selected
		getChargesPage: function(){
			return chargePageArray
		}

	}
}])

app.service("chargesService", [function(){
	var newTotal = 0;
    var newAmount = 0;
	return {
		//switches subtotal on charges.html
		newChargePrice: function(amount, price, name, info, totalPrice){
			console.log('amount:',amount,'price:', price, 'name:',name, 'info:', info, 'total:', totalPrice )

			for(i=0; i<info.length; i++){
				if (name === info[i].name){
					var newSubTotal = amount * info[i].individualPrice
                    info[i].totalPrice = newSubTotal
                    // console.log('newSubTotal:', info[i].totalPrice)
				}
			}
                return newSubTotal
			
		},
        //HERE
        //updates total price when editing amount
		returnNewTotal: function(price, info){
			console.log('SERVICE', price, info)
            for(i=0; i<info.length; i++){
                newAmount += info[i].amount;
                newTotal+= info[i].totalPrice
            }
            console.log(newTotal)
		},
        //removes the item from charges.html
		allGone: function(object, array){
			// console.log('SERVICE:', object, array)
				 for ( i = 0; i<array.length; i++){
					// console.log(array[i])
					if (object === array[i]){
						// console.log('win')
				     array.splice(i,1)
					} else{
				    // console.log('lose')
		      	}
		    }
		}
	}
}])

