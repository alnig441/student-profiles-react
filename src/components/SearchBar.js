export function SearchBar(props) {
  const type = props.search;
  return(
    <>
      <form id={props.id} onSubmit={props.onKeyUp}>
        <input id={type} type='text' placeholder={props.placeholder} onKeyUp={props.onKeyUp} pattern={props.pattern}/>
      </form>
    </>
  )
}
