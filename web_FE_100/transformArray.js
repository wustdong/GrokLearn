const arr = [
    {
        id: 0,
        name: 'a',
    },
    {
        id: 1,
        name: 'b',
        parent: 0,
    },
    {
        id: 2,
        name: 'c',
        parent: 3,
    },
    {
        id: 3,
        name: 'd',
        parent: 0,
    },
    {
        id: 4,
        name: 'e',
        parent: 1,
    },
    {
        id: 5,
        name: 'f',
    },
];
const arr2 = [
    {
        id: 0,
        name: 'a',
        children: [
            {
                id: 1,
                name: 'b',
                children: [
                    {
                        id: 4,
                        name: 'e'
                    }
                ]
            },
            {
                id: 3,
                name: 'b',
                children: [
                    {
                        id: 2,
                        name: 'c',
                    }
                ],
            },
        ],
    },
    {
        id: 5,
        name: 'b',
    },
]
// 找到 arr中是node 父节点的节点
function findParent(node,arr, result) {
    console.log('find parent', node)
   if (node.parent || node.parent=== 0) {
    arr.map(item => {
        // console.log('item--', item)
        if (item.id === node.parent) {
            if (!item.children) item.children = [];
            item.children.push(node);
            console.log('找到了', result)
        } else if(item.children) {
            findParent(node, item.children);
        } else {
            console.log('没有找到')
        }
     })
   }
}

function convert(arr) {
    let idArr = [];
    let result = [];
    // 把首层无父节点的节点梳理出来
    for(let i =0;i< arr.length;i++) {
        idArr.push(arr[i].id);
        if (!arr[i].parent && arr[i].parent !== 0) {
            result.push(arr[i]);
        }
    }
    console.log('result---half', result);
    for(let i =0;i< arr.length;i++) {
        if (arr[i].parent || arr[i].parent === 0) {
            // 在result 首层找到对应的父节点
            findParent(arr[i],arr, result);
        }
    }
    console.log('result-----', JSON.stringify(result))
}

convert(arr)