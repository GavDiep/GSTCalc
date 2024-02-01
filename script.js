// Event Listener
document.getElementById("btn").addEventListener("click", cost);

// Function
function cost() {
  // Input
  let i1 = +document.getElementById("item1").value;
  let i2 = +document.getElementById("item2").value;
  let i3 = +document.getElementById("item3").value;
  let i4 = +document.getElementById("item4").value;
  let i5 = +document.getElementById("item5").value;
  let i6 = +document.getElementById("item6").value;
  let discount = +document.getElementById("disc").value;

  // Process
  let price = i1 + i2 + i3 + i4 + i5 + i6;
  let adj = price * discount;
  price = price - adj;

  // Output
  document.getElementById("total").innerHTML = price;
  console.log(price);
  console.log(adj);
  console.log(discount);
}
