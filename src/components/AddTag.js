export default function AddTag(props) {
  return(
    <>
      <form id="add_a_tag" data-id={props.id} onSubmit={props.onSubmit}>
        <input type="text" placeholder="Add a tag" />
      </form>
    </>
  )
}
