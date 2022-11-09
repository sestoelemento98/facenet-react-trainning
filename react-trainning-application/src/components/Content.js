import './Content.css'

function Content(props) {
    return (
        <div className="main">
            {props.name}
        </div>
    );
}

export default Content;