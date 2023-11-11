import CardItem from './CardItem';
import ChartItem from './ChartItem';
import TableItem from './TableItem';

function LeftColumn() {
    return (
        <div className="w-full flex flex-col justify-between p-2">
            <div className="flex flex-col lg:flex-row gap-2 w-full">
                <CardItem />
                <CardItem />
                <CardItem />
            </div>
            <div className="flex-auto w-full overflow-none">
                <ChartItem />
                <TableItem />
            </div>
        </div>
    );
}

export default LeftColumn;
