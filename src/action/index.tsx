//这个todo共有三种行为触发

//第一种：输入todo，每个todo携带唯一的标识id，在点击add的时候触发
//设置初始值，后续会在state的快照中累加
let nexTodoId = 0;  
export const addTodo = (text) => ({
    type:"ADD_TODO",
    id:nexTodoId++,
    text
})


//第二种：点击不同的按钮，过滤出对应的todo
export const setVisibilityFilter = (filter) => ({
    type: 'SET_VISIBILITY_FILTER',
    filter
  })


//第三种：点击todo，被点击的todo会被划掉，再次点击恢复

export const toggleTodo = (id) => ({
    type: 'TOGGLE_TODO',
    id
})