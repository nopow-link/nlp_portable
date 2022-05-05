let NPL = {

    run(api_key) {
        const CURRENT_URL = $(location).attr('href')
        const SLUG        = window.location.pathname

        console.log(SLUG)
        console.log(CURRENT_URL)
        console.log(Axios)
    }
}

export default NPL



// /api/public/plugin/379d34e29253b8ba369df1b7580ff89703c371a6963c6053e72d09d88f441469/collect/?slug=/la-navigation-privee-rend-elle-vraiment-incognito/

// Vérifier le site
// /api/public/plugin/d88f561f37d97c0f0146b46b83f75ce33694db9302327e77ccac5d8055f7a4fc/certify

// Récupérer les liens
// /api/public/plugin/2b18fd7065f98e0ff6f46789b61a8ab46fb14bdb91dd99dcb8ac2b229d0bdb51/collect/?slug=/this/is/an/example?test=True



// console.log(current_url)
// console.log(slug)

// let NPL = {
    
//     current_url : $(location).attr('href'),
//     slug        : window.location.pathname

// }

// function get_Data() {
//     axios.get('/api/public/plugin/2b18fd7065f98e0ff6f46789b61a8ab46fb14bdb91dd99dcb8ac2b229d0bdb51/collect/?slug=/this/is/an/example?test=True')
//         .then(response => response.data)
//         console.log(response.data)
// }

// function certify() {
//     axios.post('/api/public/plugin/d88f561f37d97c0f0146b46b83f75ce33694db9302327e77ccac5d8055f7a4fc/certify')
//         .then(response => response.data)
//         console.log(response.data)
// }

// export default NPL