import React, { useState } from 'react';
import { DatePicker, Space, Input, Select  } from 'antd';

import './filter.scss'

const { RangePicker } = DatePicker;

const Filter: React.FC = () => {
  const [dateRange, setDateRange] = useState([]);

  // 日期范围
  const handleDateRangeChange = (dates) => {
    setDateRange(dates);
    // 获取选中的开始时间和结束时间，并且将格式转换为年月日
    let startTime = dates[0].$d.toLocaleString()
    let endTime = dates[1].$d.toLocaleString()
    console.log('时间选择器获得的起止时间：', startTime, endTime);
  };

  // 游戏名称
  const handleInputChange = (e) => {
    console.log(e.target.value, 'inputValue-游戏名称'); // 获取输入框的值【游戏名称】
  }

  // 游戏模式
  const handleChange = (value: string) => {
    console.log(`selected ${value}`); // 获得选中的值
  };

  // 模糊查询
  const handleShowSearch = (value) => {
    // 获得索引
    console.log(value, '获得 option: [{value: number, label: string}] 数组中的索引 value'); 
  }

  return (
    <>
      <div className='firstLine'>
        <div className='item'>
          {/* 日期选择器 */}
          日期：
          <Space direction="vertical" size={12}>
            <RangePicker className='RangePicker' onChange={handleDateRangeChange} format="YYYY-MM-DD HH:mm:ss"/>
          </Space>
        </div>
        <div className='item'>
          {/* 输入框：游戏名称 */}
          游戏名称：<Input className='input-first' placeholder="请输入游戏名称" onChange={handleInputChange} />
        </div>
        <div className='item'>
          {/* 选择 */}
          游戏模式：
          <Space wrap>
            <Select
              defaultValue="单机"
              style={{ width: 220 }}
              onChange={handleChange}
              options={[
                { value: '单机', label: '单机' },
                { value: '联机', label: '联机' },
                { value: '开房间', label: '开房间' },
              ]}
            />
          </Space>
        </div>
      </div>
      <div className='secondLine'>
        模糊查询：
        <Select
          showSearch
          style={{ width: 200 }}
          placeholder="模糊查询"
          optionFilterProp="children"
          filterOption={(input, option) => (option?.label ?? '').includes(input)}
          filterSort={(optionA, optionB) =>
            (optionA?.label ?? '').toLowerCase().localeCompare((optionB?.label ?? '').toLowerCase())
          }
          onChange={handleShowSearch}
          options={[
            {
              value: '1',
              label: 'Not Identified',
            },
            {
              value: '2',
              label: 'Closed',
            },
            {
              value: '3',
              label: 'Communicated',
            },
            {
              value: '4',
              label: 'Identified',
            },
            {
              value: '5',
              label: 'Resolved',
            },
            {
              value: '6',
              label: 'Cancelled',
            },
          ]}
        />
      </div>
    </>
  )
};

export default Filter;