/**
 * [自定义 hook]
 * 功能
 * use 开头
 * 返回值   
 * 
 * let debounceFn = debounce(fn, 3000);
 * 
 * let [debouncedQuery] = useMyDebounce(fn, 3000);
 * 
 * //
 */

function useMyDebounce(value, delay) {
    const [debouncedQuery, setDebouncedQuery] = useState(value);
    useEffect(() => {
        const timer = setTimeout(() => {
            setDebouncedQuery(value);
        }, delay);

        return (() => {
            clearTimeout(timer);
        })
    }, [value, delay])

    return [debouncedQuery];
}
/**
 * // 使用示例：
 * import React, { useState, useEffect } from 'react';
    import useDebounce from './useDebounce';

    const SearchComponent = () => {
    const [query, setQuery] = useState('');
    const debouncedQuery = useDebounce(query, 500); // 设置500ms的防抖延迟

    useEffect(() => {
        if (debouncedQuery) {
        // 当 debouncedQuery 变化时执行搜索
        console.log(`搜索关键词：${debouncedQuery}`);
        // 可以在这里执行搜索请求或其他逻辑
        }
    }, [debouncedQuery]); // 仅在 debouncedQuery 改变时执行

    return (
        <div>
        <input
            type="text"
            placeholder="输入搜索内容..."
            value={query} // query 是用户的实时输入
            onChange={(e) => setQuery(e.target.value)}
        />
        </div>
    );
    };

    export default SearchComponent;
* 
* 代码解析
* 输入和防抖值的分离：query 是用户的实时输入，debouncedQuery 是防抖后的值。每当用户停止输入超过 500 毫秒，debouncedQuery 才会更新为最新的 query 值。
* 
* 执行防抖后的逻辑：useEffect 中监听 debouncedQuery，只有 debouncedQuery 更新时才会执行搜索逻辑。这样可以避免频繁搜索，提高性能。
* 
* 即时更新：用户在输入时不会立即触发搜索请求，而是等用户停止输入并经过 500 毫秒才执行
 */