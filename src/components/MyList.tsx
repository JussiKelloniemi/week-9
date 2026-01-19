import React from "react"

const header: string = 'This is list header'

type TItem = {
    id: string
    text: string
}

interface ListProps {
    header: string,
    items: TItem[]
}