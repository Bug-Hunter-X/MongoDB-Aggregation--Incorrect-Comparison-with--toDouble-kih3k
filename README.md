# MongoDB Aggregation: Incorrect Comparison with $toDouble
This example demonstrates an uncommon error when using `$toDouble` within the `$expr` operator in a MongoDB aggregation query. The incorrect comparison using `$toDouble` can lead to unexpected results.
## Bug
The following query attempts to find documents where the price (stored as a string) is greater than 100. However, the comparison is performed incorrectly, resulting in unexpected results.
```javascript
const query = {
  $expr: {
    $gt: [ { $toDouble: "$price" }, 100 ] //Incorrect comparison
  }
}
db.collection.find(query); 
```
## Solution
The correct way to compare the converted double to 100 is to use `$toDouble` on the `$price` field and then compare it to 100. 
```javascript
const query = {
  $expr: {
    $gt: [ { $toDouble: "$price" }, 100 ] 
  }
}
db.collection.find(query);
```