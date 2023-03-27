import classes from './Card.module.css'

const Card = (props) => {
    return <>
        <div className={classes.card}>
            <h3>{props.title}</h3>
            <img src={props.imgUrl} alt=':(' className={classes.imgClass} />
            <p>{props.description}</p>
        </div>
    </>
}

export default Card;