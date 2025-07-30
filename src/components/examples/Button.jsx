export default (props) => {
    console.log('props:', props)
    return <button>Button {props.children} {props.label}</button>
}