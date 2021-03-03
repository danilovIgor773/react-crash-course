import PropTypes from 'prop-types';
import Button from "./Button";

const Header = ({ title, toggleTaskForm, toggleForm }) => {
    const btnText = toggleForm ? 'Close' : 'Add';
    const btnColor = toggleForm ? 'red' : 'green';

    return (
        <header className='header'>
            <h1 >{title}</h1>
            <Button color={btnColor} text={btnText} onClick={toggleTaskForm}/>
        </header>
    );
};

Header.defaultProps = {
    title: "Task Tracker"
}

Header.propTypes = {
    title: PropTypes.string.isRequired
}

export default Header;
