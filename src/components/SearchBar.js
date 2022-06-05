export function SearchBar(props) {

  return(
    <>
      <form id={props.id} onSubmit={props.onKeyUp}>
        <input type='text' placeholder={props.placeholder} onKeyUp={props.onKeyUp} pattern={props.pattern}/>
      </form>
    </>
  )
}
