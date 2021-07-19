//! structure data tree hampir mirip seperti structure data graph, hanya saja tidak memiliki timbal balik seperti structure data graph. Contohnya seperti silsilah keluarga memiliki hirarki dan memiliki induk dan anak (Parent Child), bentuknya bisa di ibaratkan seperti ranting pohon

function createNode(key) {
    //! children mengandung tree branches dari sebuah node atau anak dari sebuah root atau parent
    const children = [];
    return {
        key,
        children,

        addChild(childKey) {
            //! di push berupa node bukan child atau key
            const childNode = createNode(childKey);
            children.push(childNode)
            return childNode
        }
    }
}

//! setiap structure data tree harus memiliki root dan root atau akarnya harus satu

function createTree(rootKey) {
    const root = createNode(rootKey);
    return {
        //! parentnya
        root,
        //! melihat visualisasi
        //! melakukan trasverse atau berpindah dari satu node ke node lain
        print() {
            let result = ''
            //! memiliki 3 parameter yaitu node (node saat ini), visitFn (berada di node yang mana), dept (kedalaman level yang mana)
            function trasverse(node, visitFn, depth) {
                visitFn(node, depth);

                if(node.children.length) {
                    node.children.forEach(child => {
                        trasverse(child, visitFn, depth + 1)
                    });
                }
            }

            function addKeyToResult(node, depth) {
                //! concatination
                //! jika result sudah 0, maka return node.key jika tidak maka buat baris baru
                result += result.length === 0 ? node.key : `\n${' '.repeat(depth * 2)}${node.key}`
            }

            trasverse(root, addKeyToResult, 1);
            return result;
        }
    }
}


const dom = createTree('html')
const head = dom.root.addChild('head')
const title = head.addChild('title')

const body = dom.root.addChild('body')
const header = body.addChild('header')
const main = body.addChild('main')
const footer = body.addChild('footer')

const h1 = header.addChild('h1')
const p = main.addChild('p')
const copy = footer.addChild('Copyright 2021.')

console.log(dom.print())

//! selain di gunakan pada struktur data di HTML, struktur data tree banyak di gunakan di berbagai tempat, salah satunya struktur directori dari sebuah sistem operasi (OS) yang berbasis UNIX