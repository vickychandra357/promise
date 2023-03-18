function PromiseAPI1() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      fetch('https://dummyjson.com/posts')
        .then(response => response.json())
        .then(data => {
            console.log("DATA>>>", data);
          let table = document.getElementById('data-table');
          const dataArray = Object.values(data);
          dataArray.forEach(item => {
            let row = table.insertRow();
            let titleCell = row.insertCell();
            let bodyCell = row.insertCell();
            titleCell.innerText = item.title;
            bodyCell.innerText = item.body;
          });
          resolve(true);
        })
        .catch(error => {
          console.error('Error fetching data from API 1:', error);
          reject(false);
        });
    }, 1000);
  });
}

// function to fetch data from API 2
function PromiseAPI2() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      fetch('https://dummyjson.com/products')
        .then(response => response.json())
        .then(data => {
            console.log("DATA>>>", data);
          let table = document.getElementById('data-table');
          const dataArray = Object.values(data);
          dataArray.forEach(item => {
            let row = table.insertRow();
            let nameCell = row.insertCell();
            let priceCell = row.insertCell();
            nameCell.innerText = item.name;
            priceCell.innerText = item.price;
          });
          resolve(true);
        })
        .catch(error => {
          console.error('Error fetching data from API 2:', error);
          reject(false);
        });
    }, 2000);
  });
}

// function to fetch data from API 3
function PromiseAPI3() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      fetch('https://dummyjson.com/todos')
        .then(response => response.json())
        .then(data => {
            console.log("DATA>>>", data);
          let table = document.getElementById('data-table');

          const dataArray = Object.values(data);
          dataArray.forEach(item => {
            let row = table.insertRow();
            let titleCell = row.insertCell();
            let completedCell = row.insertCell();
            titleCell.innerText = item.title;
            completedCell.innerText = item.completed;
          });
          resolve(true);
        })
        .catch(error => {
          console.error('Error fetching data from API 3:', error);
          reject(false);
        });
    }, 3000);
  });
}

// add event listener to fetch data button
document.getElementById('fetch-data-btn').addEventListener('click', () => {
  PromiseAPI1()
    .then((result) => {
      if (result) {
        return PromiseAPI2();
      } else {
        console.error('PromiseAPI1 returned false');
      }
    })
    .then((result) => {
      if (result) {
        return PromiseAPI3();
      } else {
        console.error('PromiseAPI2 returned false');
      }
    })
    .then((result) => {
      if (result) {
        console.log('All promises resolved successfully');
      } else {
        console.error('PromiseAPI3 returned false');
      }
    })
    .catch(error => console.error(error));
});