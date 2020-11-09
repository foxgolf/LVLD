import React, { useState } from 'react'
import styled from 'styled-components'
import ProfileComponent from '../shared/components/Profile'
import SearchDate from '../shared/components/SearchDate'

const data = [{name: "Yeezy 350 ZEB", date: "9/25/20", place: '11th', cost: "3.00"},{name: "Yeezy 350 ZEB", date: "9/25/20", place: '11th', cost: "3.00"},{name: "Yeezy 350 ZEB", date: "9/25/20", place: '11th', cost: "3.00"},{name: "Yeezy 350 ZEB", date: "9/25/20", place: '11th', cost: "3.00"},{name: "Yeezy 350 ZEB", date: "9/25/20", place: '11th', cost: "3.00"},{name: "Yeezy 350 ZEB", date: "9/25/20", place: '11th', cost: "3.00"},{name: "Yeezy 350 ZEB", date: "9/25/20", place: '11th', cost: "3.00"},{name: "Yeezy 350 ZEB", date: "9/25/20", place: '11th', cost: "3.00"},{name: "Yeezy 350 ZEB", date: "9/25/20", place: '11th', cost: "3.00"},{name: "Yeezy 350 ZEB", date: "9/25/20", place: '11th', cost: "3.00"},{name: "Yeezy 350 ZEB", date: "9/25/20", place: '11th', cost: "3.00"}]

export default function index() {
    const [transaction, setTransaction] = useState('')
    const [filteredTransaction, setFilteredTransaction] = useState(data)
    const newSearch = (item) => {
        let filtered = data.filter((transaction, index) => transaction.name.toLowerCase().indexOf(item.toLowerCase()) !== -1)
        setFilteredTransaction(filtered)
    }

    const renderItem = ({ item }) => {
        return (
            <RenderItem>
                <LeftText>
                    <LeftUpperText>{item.name}</LeftUpperText>
                    <LeftLowerText>{item.date}</LeftLowerText>
                </LeftText>
                <RightText>
                    <RightUpperText>{`Place: ${item.place}`}</RightUpperText>
                    <RightLowerText>{`Entry Cost: ${item.cost}`}</RightLowerText>
                </RightText>
            </RenderItem>
        )
    }

    return (
        <Container>
            <ProfileComponent />
            <SearchDate newSearch={newSearch} />
            <List 
                data={data}
                keyExtractor={(item, index) => index.toString()}
                renderItem={renderItem}
            />
        </Container>
    )
}

const Container = styled.View`
    flex: 1;
    background-color: #fff;
`
const List = styled.FlatList`
`
const RenderItem = styled.View`
    border-color: #979797;
    border-bottom-width: 1px;
    background-color: #ffffff;
    padding: 15px 50px 15px 20px;
    flex-direction: row;
    justify-content: space-between;
`
const LeftText = styled.View`
`
const LeftLowerText = styled.Text`
`
const LeftUpperText = styled.Text`
`
const RightText = styled.View`
`
const RightLowerText = styled.Text`
`
const RightUpperText = styled.Text`
`