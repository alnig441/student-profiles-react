export default function Tags(props) {
  let tags = props.tags;
  return(
    <>
      {tags && tags.length > 0 && tags.map((tag) => {
        return (
          <>
            <p className="tag">{tag}</p>
          </>
        )
      })}
    </>
  )
}
