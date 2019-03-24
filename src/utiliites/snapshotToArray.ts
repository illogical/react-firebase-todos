export const snapshotToArray = (snapshot: firebase.database.DataSnapshot) => {
  var returnArr: any[] = [];

  snapshot.forEach(function(childSnapshot) {
    var item = childSnapshot.val();
    item.key = childSnapshot.key;

    returnArr.push(item);
  });

  return returnArr;
};
