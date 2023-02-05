import {Component} from "react";

class ClassComponent extends Component {
    constructor(props) {
        // першим запускається constructor
        console.log('constructor');
        super(props);
        this.state={a: 0, b: 25}
    }

    componentDidMount() {
        // третім запускається componentDidMount
        console.log('componentDidMount');
    }
    getSnapshotBeforeUpdate(prevProps, prevState) {
        // спочатку запуститься getSnapshotBeforeUpdate (можна передати будь,що
        // за чим ми хочемо слідкувати), а уже потім componentDidUpdate
        if (prevState.a >= 7) {
            // це і є snapshot
            return 'a>=7'
        }
        return null
    }

    componentWillUnmount() {
        // коли компонента зникає з react DOM, отже коли вона перестає рендеритись -
        // метод componentWillUnmount. Метод виконається перед тим як компонента перестане
        // показуватись в render
        console.log('componentWillUnmount');
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        // четверти запускається componentDidUpdate, він відстежує всі оновлення,
        // за допомогою snapshot-можна передати будь яке значення, але тільки за
        // допомогою методу getSnapshotBeforeUpdate
        console.log('componentDidUpdate');
        console.log('prevProps', prevProps);
        console.log('prevState', prevState);
        console.log('snapshot', snapshot);
    }

    // inc(){
    //     this.setState({a:55})
    // }

    inc(){
        this.setState(prev=>({a:prev.a+1, b:prev.b-1}))
    }

    render() {
        // другим запускається render
        console.log('render');
        return (
            <div>
                <div>A:{this.state.a}</div>
                <div>B:{this.state.b}</div>
                <div>NameFromProps: {this.props.name}</div>
                <button onClick={()=> this.inc()}>inc</button>
            </div>
        )
    }
}
export {ClassComponent}