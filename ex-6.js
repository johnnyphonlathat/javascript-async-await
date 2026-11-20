// Exercise #6
let getJohnProfile = () => {
  return new Promise(function (resolve) {
    setTimeout(
      () =>
        resolve({
          name: "John",
          age: 20,
          hobbies: ["Coding", "Football"],
        }),
      1000
    );
  });
};

let getJohnOrders = () => {
  return new Promise(function (resolve) {
    setTimeout(
      () =>
        resolve([
          {
            orderId: "001",
            items: ["apple", "banana"],
          },
          {
            orderId: "002",
            items: ["orange", "itim"],
          },
        ]),
      1500
    );
  });
};

// Start coding here
async function profile() {
  try {
    let johnprofile = await getJohnProfile()
    console.log(johnprofile)
  } catch {
    console.log(errorProfile)
  }
}
profile()

async function  order() {
  try {
    let order = await getJohnOrders() 
    console.log(order)
  } catch {
    console.log(errorOrder)
    
  }
}
order();
