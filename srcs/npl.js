let NPL = {

    run() {
    
        const DEBUG     = false
        const PROTOCOLE = "https://"
        const HOST      = "www.nopow-link.com"
        const API_KEY   = trim(nl_plugin.getAttribute('API_KEY')) 
        const SLUG      = window.location.pathname


        /*
        *   Fonction de récupération de données 
        */
        function getData() {
            return Axios.get(PROTOCOLE + HOST + "/api/public/plugin/" + API_KEY + "/collect/?slug=" + SLUG)
        }

         /*
        *   Fonction de trie des données reçus de l'api
        *   Classement par ordre décroissant des occurences pour eviter que le premier 
        *   élément placé décale l'analyse du fichier.
        */
        function sortData(data) {
            return data.sort((a, b) => (b.occurence > a.occurence) ? 1 : -1)
        }

        /*
        *   Fonction de récupération de la liste de tout les index
        *   existant pour une même source 
        */
        function getViableNode(html, item) {
            var indexes     = html.indexOf(item.source)
            var results     = []

            while (indexes != -1) {
                results.push(indexes)
                indexes = html.indexOf(item.source, indexes + item.source.length)
            }
            return results
        }

        /*
        *   Fonction d'identification du node qui correspond 
        *   à la source (calcul des distances en fonction de item.occurence)
        */
        function getNode(nodes, item) {
            var closest     = Number.MAX_SAFE_INTEGER
            var compare     = Number.MAX_SAFE_INTEGER
            var results     = []
            var bool        = -1

            for (var id in nodes ) {
                compare = Math.abs(item.occurence - nodes[id])
                if (compare < closest) {
                    closest = compare
                    results.push(true)
                    if (bool >= 0) {
                        results[bool] = false
                    } 
                    bool = id
                } else {
                    results.push(false)
                }
            }
            return results
        }

        /*
        *   Fonction de placement du lien dans le document html 
        */
        function place(nodes, item) {
            var node        = new DOMParser().parseFromString(item.source, "text/xml")
            var elements    = document.querySelectorAll(node.firstChild.localName)
            var id          = -1
            var search      = {}

            for (let i = 0; i < elements.length; i++) {        
                search = elements[i].outerHTML.search(item.source)
                if (search == 0) {
                    id++
                    if (nodes[id] == true) 
                        elements[i].outerHTML = item.substitute
                }
            }
        }

        if (!DEBUG) {
            getData()
                .then(response => {
                    var data    = response.data
                    var html    = document.documentElement.outerHTML
                    var nodes   = []
    
    
                    data = sortData(data)
                    for (var item in data) {
                        item = data[item]
                        nodes = getViableNode(html, item)
                        nodes = getNode(nodes, item)
                        place(nodes, item)
                    }
                })
                .catch(error => {
    
                })
        } 
        else {
            var data = [
                {
                    "pk": 4,
                    "source": "<h2>Heading</h2>",
                    "occurence": 1,
                    "substitute": "<h2><a href='#'>Heading</a></h2>",
                    "hash15": "<md5 HASH object @ 0x7f94c05acbc0>"
                },
                {
                    "pk": 4,
                    "source": "<h2>Heading</h2>",
                    "occurence": 11000,
                    "substitute": "<h2><a href='#'>Heading</a></h2>",
                    "hash15": "<md5 HASH object @ 0x7f94c05acbc0>"
                },
            ]
            var html    = document.documentElement.outerHTML
            var nodes   = []

            data = sortData(data)
            for (var item in data) {
                item = data[item]
                nodes = getViableNode(html, item)
                nodes = getNode(nodes, item)
                place(nodes, item)
            }
        }
    },
}

export default NPL