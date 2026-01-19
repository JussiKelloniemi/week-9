import React, {useState} from "react"
import MyList from "./MyList"

type TItem = {
    id: string
    text: string
    clicked: boolean
}



function MyContainer (){
    const header: string = 'This is list header'
    const [items, setItems] = useState<TItem[]>([
        { id: '1', text: 'This is first task', clicked: false },
        { id: '2', text: 'This is second task', clicked: false }
    ])
    
    const [content, setContent] = useState<string>("")

     const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault()
        const newItem: TItem = {
            id: Math.floor(Math.random() * 1000000 + 1000).toString(),
            text: content,
            clicked: false
        }
        setItems([...items, newItem])
        setContent('')
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <label>Item</label>
                <textarea placeholder="Add item..." onChange={(e) => setContent(e.target.value)} value={content}/>
                <button type="submit">Add Item</button>
                <MyList header={header} items={items}/>
            </form>
        </div>
    )
}

export default MyContainer