export default function Tags(props) {
  let {tags} = props;
  return(
    <>
      {tags && tags.length > 0 && tags.map((tag, index) => {
        return (
          <>
            <p className="tag" key={"tag_" + index}>{tag}</p>
          </>
        )
      })}
    </>
  )
}
