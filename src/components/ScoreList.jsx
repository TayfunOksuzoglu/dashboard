import { Card, List, ListItem, Title } from '@tremor/react';

function ScoreList() {
    const cities = [
        {
            city: 'Athens',
            rating: '2 open PR',
        },
        {
            city: 'Luzern',
            rating: '1 open PR',
        },
        {
            city: 'Zürich',
            rating: '0 open PR',
        },
        {
            city: 'Vienna',
            rating: '1 open PR',
        },
        {
            city: 'Ermatingen',
            rating: '0 open PR',
        },
        {
            city: 'Lisbon',
            rating: '0 open PR',
        },
    ];

    return (
        <Card className="max-w-full">
            <Title>Tremor&lsquo;s Hometowns</Title>
            <List>
                {cities.map((item) => (
                    <ListItem key={item.city}>
                        <span>{item.city}</span>
                        <span>{item.rating}</span>
                    </ListItem>
                ))}
            </List>
        </Card>
    );
}

export default ScoreList;
