let NPL = {

    run() {

        var api_key = nl_plugin.getAttribute('api_key')
        api_key     = trim(api_key)
        console.log(api_key)

        var url = "http://127.0.0.1:8000/api/public/plugin/" + api_key + "/collect/?slug=/la-navigation-privee-rend-elle-vraiment-incognito/"
        console.log(url)

        // var response = [this.get_Data(url)]

        var demo_response = [
            {
                "pk": 4,
                "source": "<p>Pour la seconde édition de l’appel à l’action du Christchurch créé suite aux attentats du 15 mars 2019 contre la communauté musulmane de Christchurch en Nouvelle Zélande, Jean-Claude Ghinozzi, CEO de Qwant, a pu porter, vendredi 14 mai, en présence de 15 chefs d'état, la parole de Qwant.</p>",
                "occurence": 268,
                "substitute": "<p>Pour la seconde <a href=\"https://ugc.com/\" rel=\"sponsored\">édition </a>de l'appel à l'action du Christchurch créé suite aux attentats du 15 mars 2019 contre la communauté musulmane de Christchurch en Nouvelle Zélande, Jean-Claude Ghinozzi, CEO de Qwant, a pu porter, vendredi 14 mai, en présence de 15 chefs d'état, la parole de Qwant.</p>",
                "hash15": "<md5 HASH object @ 0x7f94c05acbc0>"
            }
        ]

        var source      = demo_response[0].source
        console.log(source)

        var old         = document.getElementById("nl")
        // old.innerHTML   = "";
        var substitute  = demo_response[0].substitute
        // old.innerHTML   = substitute



        var elements    = document.querySelectorAll('p')
        console.log(elements)
    
        for (var key in elements) {
            console.log(elements[key].outerHTML) 
            var search = elements[key].outerHTML.search(source)
            console.log(search)
            if (search == 0) {
                console.log("this one")
                elements[key].outerHTML = substitute
                console.log(elements[key])
            }
        }




    },

    get_Data(url) {

        return Axios.get(url)
    },

    certify() {
        axios.post('/api/public/plugin/d88f561f37d97c0f0146b46b83f75ce33694db9302327e77ccac5d8055f7a4fc/certify')
            .then(response => response.data)
            console.log(response.data)
    }
}

export default NPL



// const CURRENT_URL = $(location).attr('href')
        // const SLUG        = window.location.pathname



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
// function certify() {
//     axios.post('/api/public/plugin/d88f561f37d97c0f0146b46b83f75ce33694db9302327e77ccac5d8055f7a4fc/certify')
//         .then(response => response.data)
//         console.log(response.data)
// }

// export default NPL