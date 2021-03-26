const Emoji = (props: { label?: string; symbol: string }) => (
    <span
        className="emoji"
        role="img"
        aria-label={props.label ? props.label : ''}
        aria-hidden={props.label ? 'false' : 'true'}
    >
        {props.symbol}
    </span>
)

export default Emoji
