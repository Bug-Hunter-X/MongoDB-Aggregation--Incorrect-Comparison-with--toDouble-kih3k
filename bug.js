```javascript
const query = {
  $expr: {
    $gt: [ { $toDouble: "$price" }, 100 ] //Incorrect comparison
  }
}
db.collection.find(query); 
```