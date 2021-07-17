//! struktur data dengan pemetaan hubungan antar data

function createNode(key) {
    const neighbors = [];
    return {
        key,
        //! taman atau node berikutnya yang berelasi dengan node saat ini
        neighbors,

        addNeighbors: function(node) {
            neighbors.push(node)
        }
    }
}


// ada tipe dari struktur data graph yang sifatnya undirected artinya tidak memiliki hubungan timbal balik
function createGraph(directed = false) {
    const nodes = []
    const edges = []
    return {
        // memetakan directed dan undirected
        directed,
        // titik titik dari data
        nodes,
        // memetakan satu titik dengan titik berikutnya atau hubungan satu node dengan node yang lain
        edges,
        addNode: function (key) {
            const newNode = createNode(key)
            nodes.push(newNode)
        },
        getNode: function (key) {
            return nodes.find(node => {
                return node.key === key
            })
        },
        addEdge: function (nodeKey1, nodeKey2) {
            const node1 = this.getNode(nodeKey1)
            const node2 = this.getNode(nodeKey2)

            node1.addNeighbors(node2)

            if(!directed) {
                node2.addNeighbors(node1)
            }
        },
        print: function () {
             // return dalam bentuk type data string
            return nodes.map(function({key, neighbors}) {
                let result = key

                if(neighbors.length) {
                   result += ` => ${neighbors.map(negihtbor => {
                        return negihtbor.key
                    }).join(' ')}`;
                }

                return result
            }).join('\n')
        }
    }
}

const graaph = createGraph(true);

graaph.addNode('Ani')
graaph.addNode('Banu')
graaph.addNode('Cindy')
graaph.addNode('Dina')
graaph.addNode('Elisa')
graaph.addNode('Fadli')

graaph.addEdge('Ani', 'Banu')
graaph.addEdge('Banu', 'Cindy')
graaph.addEdge('Banu', 'Dina')
graaph.addEdge('Ani', 'Dina')
graaph.addEdge('Dina', 'Fadli')
graaph.addEdge('Elisa', 'Fadli')
graaph.addEdge('Fadli', 'Ani')



console.log(graaph.print())


// contoh stuktur penggunaan deta graph yaitu sistem rekomendasi seperti pada e-commarce, netflix, youtube