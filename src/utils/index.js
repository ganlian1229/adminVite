/**
 * @Description: 对象、数组深拷贝
 * @param {*} source
 */
export function deepCopy(source) {
    if (!source) return;
    let target;
    if (typeof source === 'object') {
        // 根据source类型判断是新建一个数组还是对象
        target = Array.isArray(source) ? [] : {};
        // 遍历source，并且判断是source的属性才拷贝
        for (let key in source) {
            // eslint-disable-next-line no-prototype-builtins
            if (source.hasOwnProperty(key)) {
                if (typeof source[key] !== 'object') {
                    target[key] = source[key];
                } else {
                    // 如果内部属性存在复杂数据类型，使用递归实现深拷贝
                    target[key] = deepCopy(source[key]);
                }
            }
        }
    } else {
        target = source;
    }
    return target;
}
/**
 * @Description: 数组去重方法
 * @param {*} arr
 */
export function delArr(arr) {
    var newArr = [];
    for (var i = 0; i < arr.length; i++) {
        let item = arr[i];
        if (newArr.indexOf(arr[i]) == -1) {
            newArr.push(arr[i]);
            if (item.children && item.children.length) {
                item.children = delArr(item.children);
            }
        }
    }
    return newArr;
}

/**
 * @Description: 获取本地图片
 * @param {*} name
 */
export function getAssetsImage(name) {
    return new URL(`/src/assets/image/${name}`, import.meta.url).href;
}

