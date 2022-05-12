let NPL = {

    run() {

        var api_key = nl_plugin.getAttribute('api_key')
        api_key     = trim(api_key)
        var url = "http://127.0.0.1:8000/api/public/plugin/" + api_key + "/collect/?slug=/la-navigation-privee-rend-elle-vraiment-incognito/"

        // var response = [this.get_Data(url)]

        var demo_response = [
            {
                "pk": 4,
                "source": "<p>Pour la seconde édition de l’appel à l’action du Christchurch créé suite aux attentats du 15 mars 2019 contre la communauté musulmane de Christchurch en Nouvelle Zélande, Jean-Claude Ghinozzi, CEO de Qwant, a pu porter, vendredi 14 mai, en présence de 15 chefs d'état, la parole de Qwant.</p>",
                "occurence": 11000,
                "substitute": "<p>Pour la seconde <a href=\"https://ugc.com/\" rel=\"sponsored\">édition </a>de l'appel à l'action du Christchurch créé suite aux attentats du 15 mars 2019 contre la communauté musulmane de Christchurch en Nouvelle Zélande, Jean-Claude Ghinozzi, CEO de Qwant, a pu porter, vendredi 14 mai, en présence de 15 chefs d'état, la parole de Qwant.</p>",
                "hash15": "<md5 HASH object @ 0x7f94c05acbc0>"
            }
        ]

        var source          = demo_response[0].source
        var html            = document.documentElement.outerHTML
        var occurence       = demo_response[0].occurence
        var substitute      = demo_response[0].substitute
        var elements        = document.querySelectorAll('p')
        var index           = []
        var index_bool      = []
        var bool            = -1
        var closest         = Number.MAX_SAFE_INTEGER
        console.log(closest)
        // ranger les index dans un tableau 
        // closest = max_int 
        // comparables (indexoff => occurence ):
        // if compare < closest :
        // closest.id = true

        var indexes = html.indexOf(source)
        index.push(indexes)
        while (indexes != -1) {
            indexes = html.indexOf(source, indexes + 4)
            index.push(indexes)
        }
        index.splice(-1, 1)

        for (var id in index ) {
            var compare = Math.abs(occurence - index[id])
            if (compare < closest) {
                closest = compare
                index_bool.push(true)
                if (bool >= 0) {
                    index_bool[bool] = false
                } 
                bool = id
            } else {
                index_bool.push(false)
            }
        }
    
        var id = -1

        for (var key in elements) {
            var search = elements[key].outerHTML.search(source)
            if (search == 0) {
                console.log("this one")
                console.log(elements[key])
                id += 1
                if (index_bool[id] == true) {
                    elements[key].outerHTML = substitute
                }
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