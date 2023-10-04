import Image404 from '../images/404.png';

function NotFound({container}) {

    container.current.style.setProperty('height','400px');

    return (
        <div className="not-found fadeIn">
            <img src={Image404}/>
            <p>Oops! Invalid location :/</p>
        </div>
    )
}

export default NotFound;