import React from "react"


type TItem = {
    id: string
    text: string
}

interface ListProps {
    header: string,
    items: TItem[]
}




const List: React.FC<ListProps> = ({header, items}) => {
    const listItems = items.map(item => <li key={item.id}>{item.text}</li>)
    return (
        <div>
            <h1>{header}</h1>
            <ol>
                {listItems}
            </ol>
        </div>
    )
}

export default List