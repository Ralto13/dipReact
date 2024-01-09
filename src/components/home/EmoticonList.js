import EmoticonRow from './EmoticonRow'

function EmoticonList({ emoticons }) {
  return (
    <ul>
      {emoticons.map(({ title, artist, titleImageUrl }, idx) => {
        return (
          <EmoticonRow
            key={title}
            rank={idx + 1}
            title={title}
            subTitle={artist}
            imageUrl={titleImageUrl}
          />
        )
      })}
    </ul>
  )
}

export default EmoticonList
