# Hooks

- Là những hàm được cung cấp bởi reactJS. Mỗi cái hàm này có những tính năng nhất định, 
- Hooks chỉ dùng cho function component
- Component đơn giản và trở nên dễ hiểu
    - Không bị chia logic ra như methods trong lifecycle của Class Component
    - Không cần sử dụng "this"
- Sử dụng Hooks khi nào?
    - Dự án mới => Hooks
    - Dự án cũ 
        - Component mới => Function component + Hooks
        - Component cũ => Giữ nguyên, có thời gian tối ưu sau
    - Logic nghiệp vụ cần sử dụng các tính chất của OOP => Class Component
- Người mới nên bắt đầu với Function component vì nó dễ tiếp cận hơn
- Có thể kết hợp sử dụng Function component & Class component

## useState

### Dùng khi nào?
- Khi muốn dữ liệu thay đổi thì giao diện tự động được cập nhật ( render lại dữ liệu)

### Cách dùng

import {useState} from 'react'

function Component(){
const [state,setState]=useState(initState)
...
}

### Lưu ý
- Component được re-render sau khi setState
- Initial state chỉ dùng lần đầu
- Set state là thay thế state bằng giá trị mới
-------------------------------------------------------------
## useEffect()

 - khi thực hiện các side effects 

- Nó có thể giúp viết các đoạn code:
    - Update DOM
    - Call API
    - Listen DOM events
        - Scroll
        - Resize
- Cleanup
    - Remove listener / Unsubscribe 
    - Clear timer

- Có 3 trường hợp :
    - useEffect(callback)
        -  Gọi callback mỗi khi component re-render
        - Gọi callback sau khi component thêm element vào DOM
    - useEffect(callback,[])
        - Chỉ gọi lại callback 1 lần sau khi component mounted
    - useEffect(callback,[deps])
        - Callback luôn được gọi lại mỗi khi deps thay đổi

---------------------------
#### Đúng với cả 3 trường hợp
1. Gọi callback sau khi component thêm element vào DOM
2. Callback luôn được gọi sau khi component mounted
3. Cleanup function luôn được gọi trước khi component unmounted
4. Cleanup function luôn được gọi trước khi callback được gọi (trừ lần mounted)

Lưu ý : 
- Tránh viết nhiều logic trong 1 useEffect()

------------------------------------------------------

## useLayoutEffect()

-------------------------------------------------------

## useRef()
- Là 1 hàm trả về một đối tượng ref có thể thay đổi thuộc tính .current được khởi tạo cho dối số được truyền vào (initialValue). Đối tượng được trả về sẽ tồn tại trong toàn bộ thời gian tồn tại của thành phần
----------------------------------------------------

## React.memo()

- memo() -> Higher Oder Component 
- Hoạt động giống như React.PureComponent(), nhưng nó là function Component thay vì là class Component.
- Được sử dụng để bọc các component, React sẽ bỏ qua việc render lại component và sử dụng kết quả đã render lần cuối cùng nếu component render cùng kết quả với cùng props


--------------------------------------------

## useCallback()

- useCallback tập trung giải quyết vấn đề về performance, khi mà các callback function được tạo ở functional component cha pass xuống component con luôn bị tạo mới, khiến cho con luôn bị re-render

------------------------------------------

## useMemo()

- useMemo là hàm giống như helper cho phép chỉ định:lưu lại kết quả của hàm nào và những giá trị nào sẽ thay đổi kết quả đó
- Tập trung vào việc tránh lặp đi lặp lại các logic tính toán nặng nề

------------------------------------------
 
## useReducer()

1. Init state 
2. Action: 
3. Reducer
4. Dispatch 
