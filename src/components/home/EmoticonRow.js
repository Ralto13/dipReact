import Text from '../shared/Text'

function EmoticonRow({ rank, title, subTitle, imageUrl }) {
  return (
    <li style={{ display: 'flex', alignItems: 'center' }}>
      <div style={{ flex: '1' }}>
        <Text>{rank}</Text>
      </div>
      <div style={{ flex: '2', display: 'flex', flexDirection: 'column' }}>
        <Text bold="true">{title}</Text>
        <Text typograph="t7">{subTitle}</Text>
      </div>
      <div style={{ flex: '1' }}>
        <img src={imageUrl} />
      </div>
    </li>
  )
}

export default EmoticonRow
