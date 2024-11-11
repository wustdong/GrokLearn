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
            for(let j = 0;j<result.length;j++) {
                if(result[j].id === arr[i].parent) {
                    if(!result[j].children) result[j].children = [];
                    result[j].children.push({
                        id: arr[i].id,
                        name: arr[i].name
                    })
                    break;
                } else if (result[j].children) {
                    for(let k;k <result[j].children.length;k++) {
                        if(result[j].children[k].id === arr[i].parent) {
                            if (result[j].children[k].children) {
                                result[j].children[k].children.push({
                                    id: arr[i].id,
                                    name: arr[i].name
                                });
                            }
                        }
                    }
                }
            }
           
        }
    }
    console.log('result-----', result)
}

convert(arr)