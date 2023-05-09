const React = require('react');

class VegetableShow extends React.Component {
    render()
    {
        const vegetable = this.props.vegetable;

        return (

            <div>
                <h1>Show page (vegetables)</h1>
                {vegetable ? <h1>This {vegetable.name} is {vegetable.color} and </h1> : <div>nothing was sent</div>}
                {vegetable.readyToEat ? <h1>ready to eat</h1> : <h1>is not ready to eat ... can't touch this</h1>}
            </div>

        )
    }
}

module.exports = VegetableShow;
