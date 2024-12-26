```javascript
const query = {
  $expr: {
    $gt: [ {$toDouble: '$price'}, 100 ] //Correct comparison
  }
}
db.collection.find(query); 
```