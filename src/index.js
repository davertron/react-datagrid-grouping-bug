let React = require('react');
let DataGrid = require('react-datagrid');

const App = React.createClass({
    getInitialState() {
        let data = [];

        for (let i = 0; i < 10; i++) {
            for (let j = 0; j < 10; j++) {
                data.push({
                    group: i,
                    name: `Item ${i} ${j}`
                });
            }
        }

        return {
            data: data
        };
    },

    render() {
        console.table(this.state.data);
        return (
                <DataGrid
                    idProperty="name"
                    dataSource={this.state.data}
                    columns={[{name: 'name'}]}
                    groupBy={['group']} />

        );
    }
});

React.render(<App/>, document.getElementById('app'));
