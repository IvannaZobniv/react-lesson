import {Simpsons} from "./components/Simpsons/Simpsons";

import {RickMortys} from "./components/RickMortys/RickMortys";

const App = () => {

  return (
      <div>
          <Simpsons/>
          <RickMortys/>
          {/*це коменти просто для мого розуміння, як змінюється.*/}
          {/*simpsons.map(simpsons => < Simpson key={simpsons.id} simpson={simpsons}/>)*/}
          {/*simpson.map(simpson => <Simpson key={simpson.id} name={simpson.name} surname={simpson.surname} image={simpson.image}/>)*/}
          {/*<Simpson key={1} name={'Homer'} surname={'Simpson'} image={'https://upload.wikimedia.org/wikipedia/en/0/02/Homer_Simpson_2006.png'}/>,*/}
          {/*<Simpson key={2} name={'Marge'} surname={'Simpson'} image={'https://upload.wikimedia.org/wikipedia/ru/0/0b/Marge_Simpson.png'}/>,*/}
          {/*<Simpson key={3} name={'Bart'} surname={'Simpson'} image={'https://upload.wikimedia.org/wikipedia/en/a/aa/Bart_Simpson_200px.png'}/>,*/}
          {/*<Simpson key={4} name={'Lisa Marie'} surname={'Simpson'} image={'https://upload.wikimedia.org/wikipedia/en/e/ec/Lisa_Simpson.png'}/>,*/}
          {/*<Simpson key={5} name={'Maggie'} surname={'Simpson'} image={'https://upload.wikimedia.org/wikipedia/en/9/9d/Maggie_Simpson.png'}/>*/}
      </div>
  );
};

export {App} ;
