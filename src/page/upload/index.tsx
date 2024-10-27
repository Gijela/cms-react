import React, { useState } from 'react'
import { AutoComplete } from 'antd'

const App = () => {

  const options = [
    { value: '1111', label: '测试一' },
    { value: '222', label: '这是二' },
    { value: '33333', label: 'this is three' },
  ]

  const [selected, setSelected] = useState(null)
  const [allOptions, setAllOptions] = useState(options)

  const handleSearch = (inputValue) => {
    // setAllOptions(options) // 显示全部可选项

    // 模糊搜索逻辑
    const filteredOptions = options.filter(option => option.label.includes(inputValue))
    setAllOptions(filteredOptions)
  }

  return (
    <AutoComplete
      style={{ width: 200 }}
      value={selected}
      options={allOptions}
      onSearch={handleSearch}
      onChange={value => setSelected(value)}
      onSelect={(value, option) => setSelected(option.label)}
      placeholder='模糊搜索，选中一项点击时可清空选中项'
      onFocus={() => {
        setSelected(null)
        setAllOptions(options)
      }} // 聚焦时清空已选项
    />
  )
}

export default App
