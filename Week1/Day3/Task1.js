function simulateApiCall(url) {
    return new Promise((resolve, reject) => {
      console.log(`Making API call to ${url}...`);
      setTimeout(() => {
        const success = Math.random() > 0.3; 
        if (success) {
          resolve({ data: `Response data from ${url}`, status: 200 });
        } else {
          reject({ error: `Failed to fetch data from ${url}`, status: 500 });
        }
      }, 2000);
    });
  }
  simulateApiCall("https://api.example.com/data")
    .then(response => {
      console.log("API call succeeded:", response);
    })
    .catch(error => {
      console.error("API call failed:", error);
    });
    