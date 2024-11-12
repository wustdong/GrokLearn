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
    arr.map(item => {
        mapArr.set(item.id, {...item, children: []});
    })

    arr.map(item => {
        if(item.parent === undefined) {
            result.push(mapArr.get(item.id)); // 这里也是需要从mapArr 中取出来
        } else {
            let matchItem = mapArr.get(item.parent)
            matchItem.children.push(mapArr.get(item.id));// 注意这里的需要是从map取出的对象，而不是item 
        }
    })
}
convertByMap(arr)