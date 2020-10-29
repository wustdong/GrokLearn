/**
 *
 * 以下数据结构中，id 代表部门编号，name 是部门名称，parentId 是父部门编号，
 * 为 0 代表一级部门，现在要求实现一个 convert 方* 法，把原始 list 转换成树形结构，
 * parentId 为多少就挂载在该 id 的属性 children 数组下，结构如下：
 */
let list = [
	{ id: 1, name: '部门A', parentId: 0 },
	{ id: 2, name: '部门B', parentId: 0 },
	{ id: 3, name: '部门C', parentId: 1 },
	{ id: 4, name: '部门D', parentId: 1 },
	{ id: 5, name: '部门E', parentId: 2 },
	{ id: 6, name: '部门F', parentId: 3 },
	{ id: 7, name: '部门G', parentId: 2 },
	{ id: 8, name: '部门H', parentId: 4 },
];

function convert(arr) {
	let tree = []; // 输出要求是数组，注意题目要求

	arr.map((it, idx, array) => {
		let parent = it.parentId;

		if (parent === 0) {
			// 根节点
			tree.push(it);
		} else {
			array.map((item) => {
				//  因为array 里的 item 是对象，这里更改了item，其实就是直接改了 array 对象
				if (item.id === parent) {
					// 以上，也是为什么输出是 tree ，但是赋值只有一个地方
					if (!item.children) {
						item.children = [];
					}

					item.children.push(it);
				}
			});
		}
	});

	return tree;
}

const result = convert(list);

console.log('result:', result, '方便在 vscode 中打印的result:', JSON.stringify(result));


/**
 * 输出结果：对象数组
  [{
	"id": 1,
	"name": "部门A",
	"parentId": 0,
	"children": [{
		"id": 3,
		"name": "部门C",
		"parentId": 1,
		"children": [{
		"id": 6,
		"name": "部门F",
		"parentId": 3
		}]
	}, {
		"id": 4,
		"name": "部门D",
		"parentId": 1,
		"children": [{
		"id": 8,
		"name": "部门H",
		"parentId": 4
		}]
	}]
	}, {
	"id": 2,
	"name": "部门B",
	"parentId": 0,
	"children": [{
		"id": 5,
		"name": "部门E",
		"parentId": 2
	}, {
		"id": 7,
		"name": "部门G",
		"parentId": 2
	}]
	}]
 */
