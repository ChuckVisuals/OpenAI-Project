const submitIcon = document.querySelector("#submit-icon")
const inputElement = document.querySelector("input")
var API_key = ""

// Process the keys from the json file
async function fetchData() {
    try {
      const response = await fetch('keys.json');
      const key_data = await response.json();
  
      // Process the data from the JSON file
      console.log(key_data.keys);
      API_Key = key_data.keys;
  
    } catch (error) {
      // Handle any errors that occur during the fetch
      console.error('Error:', error);
    }
  }
  
  fetchData();


  const getImages = async () => {

    const options = {
        method: "POST",
        headers: {
            "Authorization": `Bearer ${API_Key}`,
            "Content-Type": "application/json"
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