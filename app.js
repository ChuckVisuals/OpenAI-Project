const submitIcon = document.querySelector("#submit-icon")
const inputElement = document.querySelector("input")

// Process the keys from the json file
fetch('keys.json')
  .then(response => response.json())
  .then(data => {
    // Process the data from the JSON file
    console.log(data);
    const API_Key = data
  })
  .catch(error => {
    // Handle any errors that occur during the fetch
    console.error('Error:', error);
  });



  const getImages = async () => {

    const options = {
        method: "POST",
        headers: {
            "Authorization": `Bearer ${API_Key}`,
            "Context-Type": "application/json"
        },
        body: JSON.stringify({
            "prompt": inputElement.value,
            "n": 4,
            "size": "1024x1024"
        })
    }

    try {
        const response = await fetch('https://api.openai.com/v1/images/generations', options)
        const data = await response.json()
        console.log(data)

    } catch (error){
        console.log(error)
    }
  }

submitIcon.addEventListener('click', getImages)