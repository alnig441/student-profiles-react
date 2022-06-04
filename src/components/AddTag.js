export default function AddTag(props) {
  return(
    <>
      <form id="add_a_tag_student" data-id={props.id} onSubmit={props.onSubmit}>
        <input type="text" placeHolder="Add a tag" />
      </form>
    </>
  )
}
