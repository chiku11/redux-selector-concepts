import React, {useState, Fragment} from 'react';
import SimpleForm from './Form';
import ThankYou from './ThankYou';

export const App = () => {
    const [show,setShow] = useState(true);

    const onSubmit = props => {
        setShow(false);
    }
    return (<Fragment>
        {show && <SimpleForm onSubmit={onSubmit} />}
        {!show && <ThankYou />}
    </Fragment>)
}

export default App;