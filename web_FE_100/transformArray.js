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
function convertByMap(arr) {
    const mapArr = new Map();
    const result = [];
    arr.forEach(item => {
        mapArr.set(item.id, {...item, children: []});
    })

    arr.forEach(item => {
        if(item.parent === undefined) {
            result.push(mapArr.get(item.id)); // 这里也是需要从mapArr 中取出来
        } else {
            let matchItem = mapArr.get(item.parent)
            matchItem.children.push(mapArr.get(item.id));// 注意这里的需要是从map取出的对象，而不是item 
        }
    })
}
convertByMap(arr);
function convertByRecursion(arr) {
    // 定义递归函数，用于查找并构建子节点
    function buildTree(node, arr) {
        // 为当前节点查找并构建所有直接子节点
        node.children = arr
            .filter(item => item.parent === node.id)
            .map(item => buildTree(item, arr)); // 递归构建子节点
        // 如果没有子节点，删除 children 属性
        if (node.children.length === 0) {
            delete node.children;
        }
        return node;
    }

    // 构建顶层结构：找到所有没有父节点的顶层节点，并递归构建其子节点
    return arr
        .filter(item => item.parent === undefined)
        .map(item => buildTree(item, arr));
}

const arr333 = [
    { id: 0, name: 'a' },
    { id: 1, name: 'b', parent: 0 },
    { id: 2, name: 'c', parent: 3 },
    { id: 3, name: 'd', parent: 0 },
    { id: 4, name: 'e', parent: 1 },
    { id: 5, name: 'f' },
];

console.log(JSON.stringify(convertByRecursion(arr333), null, 2));
