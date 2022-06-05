export default function Tags(props) {
  let tags = props.tags;
  return(
    <>
      {tags && tags.length > 0 && tags.map((tag, index) => {
        return (
          <>
            <p className="tag" key={index}>{tag}</p>
          </>
        )
      })}
    </>
  )
}
