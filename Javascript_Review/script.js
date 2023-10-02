fetch("https://api.example.com/data")
  .then((response) => {
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    return response.json(); // Parse the response as JSON
  })
  .then((data) => {
    // Work with the data
    console.log(data);
  })
  .catch((error) => {
    console.error("Fetch error:", error);
  });
