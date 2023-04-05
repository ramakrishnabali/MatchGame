import './index.css'

const Tabs = props => {
  const {tab, changeFunc} = props

  const {displayText, tabId} = tab

  const onClickTab = () => {
    changeFunc(tabId)
  }

  return (
    <li className="listContainer">
      <button onClick={onClickTab} type="button" className="tabButton">
        {displayText}
      </button>
    </li>
  )
}

export default Tabs
