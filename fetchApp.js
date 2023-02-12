async function getData() {
  try {
    const response = await fetch(`https://catfact.ninja/fact`);
    const data = await response.json();
    console.log(data);
    for (const obj of data) {
      if (obj) {
        console.log(obj);
      }
    }
  } catch (error) {
    console.log(error);
  }
}
getData();
