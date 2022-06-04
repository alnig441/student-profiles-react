export function SearchBar(props) {
  console.log('searc bar props ', props)

  return(
    <>
      <form id={props.id} onSubmit={props.onKeyUp}>
        <input type='text' placeholder={props.placeHolder} onKeyUp={props.onKeyUp} pattern={props.pattern}/>
      </form>
    </>
  )
}
