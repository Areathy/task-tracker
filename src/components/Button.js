import PropTypes from 'prop-types';

const Button = ({text, color, onClick}) => {
    return (
        <button 
            onClick={onClick}
            className="btn"
            style={{backgroundColor: color}}>
            {text}
        </button>
    )
}

Button.defaultProps = {
    color: 'red',
}

Button.propTypes = {
    color: PropTypes.string,
    text: PropTypes.string,
    onClick: PropTypes.func.isRequired
}

export default Button;
