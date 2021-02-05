// Unplash API
const count = 10;
const apiKey = config.UNSPLASH_API_KEY;
const apiUrl = `https://api.unsplash.com/photos/random/?client_id=${apiKey}&count=${count}`

// Get Photos from Unsplash API
async function getPhotos() {
    try {
        const response = await fetch(apiUrl);
        const data = await response.json();
        console.log(data);
    } catch(error) {
        console.log(error);
    }
}

// On Load
getPhotos();