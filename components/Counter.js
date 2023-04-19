import PropTypes from 'prop-types';
import { useState } from 'react';

export default function Counter({ animalName }) {
    const [value, setValue] = useState(0);

    const handleClick = () => {
        setValue((prevState) => prevState +1);
    };

    return (
        <>
          <h1>{animalName}'s Counter</h1>
          { value === 5 ? (<h1>YOU DA WEINER</h1>) : (
            <>
              <h2>{value}</h2>
              <button type="button" onClick={handleClick} className={value <= 0 ? 'btn btn-danger' : ''}>Increment</button>
              { value <= 0 ? '' : <button type="button" onClick={() => setValue((prevState) => prevState -1)}>Decrement</button>}
              <button type="button" onClick={() => setValue((0))}>Reset</button>
            </>
          )}
        </>
    );

}

Counter.propTypes = {
    animalName: PropTypes.string,
};

Counter.defaultProps = {
    animalName: 'Default Animal',
};
