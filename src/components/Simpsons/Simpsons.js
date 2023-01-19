import {Simpson} from "../Simpson/Simpson";

const Simpsons = () => {
    const simpsons =[
        {
            id:1,
            name:'Homer',
            surname:'Simpson',
            image:'https://upload.wikimedia.org/wikipedia/en/0/02/Homer_Simpson_2006.png'
        },
        {
            id:2,
            name:'Marge',
            surname:'Simpson',
            image:'https://upload.wikimedia.org/wikipedia/ru/0/0b/Marge_Simpson.png'
        },
        {
            id:3,
            name:'Bart',
            surname:'Simpson',
            image:'https://upload.wikimedia.org/wikipedia/en/a/aa/Bart_Simpson_200px.png'
        },
        {
            id:4,
            name:'Lisa Marie',
            surname:'Simpson',
            image:'https://upload.wikimedia.org/wikipedia/en/e/ec/Lisa_Simpson.png'
        },
        {
            id:5,
            name:'Maggie',
            surname:'Simpson',
            image:'https://upload.wikimedia.org/wikipedia/en/9/9d/Maggie_Simpson.png'
        },
    ]
    return (
        <div>
            {
                simpsons.map(simpson => < Simpson key={simpson.id} simpson={simpson}/>)
            }
        </div>
    );
};

export {Simpsons};