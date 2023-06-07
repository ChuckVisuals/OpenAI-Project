const API_Key = ""
const URL = ""
const submitIcon = document.querySelector("#submit-icon")



getImages = () => {

    const options = {
        method:  "POST",
        headers: {
            "Authorization": 'Bearer ${API_Key}',
            
        }
    }

    try {
        fetch(URL, options)
    } catch (error) {
        console.error(error)
    }
}


submitIcon.addEventListener('click', getImages)