// import StarRatings from 'react-star-ratings'
//
// function StarsRating({vote_average}) {
//
//     return (
//         <div className="App">
//             <div className="Wrapper">
//                 <StarRatings
//                     rating={vote_average}
//                     starRatedColor="#FFD700"
//                     starEmtyColor="#999999"
//                     starHoverColor="#FFD700"
//                     starSpacing="5px"
//                     starDimension="15px"
//                     numberOfStars={10}
//                     changeRating={null}
//                     name={'rating'}
//                 />
//             </div>
//         </div>
//     );
// }
//
// export {StarsRating};

import StarRatings from "react-star-ratings";
const StarsRating = ({vote_average}) => {
    const ratings = (vote_average) / 2

    return (

        <StarRatings
            rating= {ratings}
            starDimension="25px"
            starSpacing="0px"
            starRatedColor="gold"
        />

    );
};

export {StarsRating};