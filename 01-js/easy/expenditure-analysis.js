/*
  Implement a function `calculateTotalSpentByCategory` which takes a list of transactions as parameter
  and return a list of objects where each object is unique category-wise and has total price spent as its value.
  transactions is an array where each
  Transaction - an object like 
        {
		id: 1,
		timestamp: 1656076800000,
		price: 10,
		category: 'Food',
		itemName: 'Pizza',
	}
  Output - [{ category: 'Food', totalSpent: 10 }] // Can have multiple categories, only one example is mentioned here
*/

function calculateTotalSpentByCategory(expences){
  temp_list = []
  for (let i=0; i < expences.length; i++){
      existing_expence = temp_list.find(expence => expence.category == expences[i].category)
      if(existing_expence){
          existing_expence.totalSpent = existing_expence.totalSpent + expences[i].price
      }else{
          temp_list.push({category: expences[i].category, totalSpent: expences[i].price})
      }
  }
  // final_list = []
  // for(let j = 0; j < temp_list.length; j++){
  //     final_list.push(temp_list[j].category + " - " + temp_list[j].price)
  // }
  console.log(`final_list = ${JSON.stringify(temp_list)}`);
  return temp_list
}

module.exports = calculateTotalSpentByCategory;
