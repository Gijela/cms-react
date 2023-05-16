import { Avatar, Space } from 'antd';
import React from 'react';
import { useSelector } from 'react-redux';

const url = 'https://api2.mubu.com/v3/document_image/53916ab5-f8f7-455b-83be-db6a7372673b-11752736.jpg';


const AvatarPic: React.FC = () => {
  let username = useSelector(state => state.user.username);
  // 页面刷新会丢失全局保存的 username，我们可以从浏览器本地存储中获得
  if (!username) username = localStorage.getItem('username')
  return (
    <div>
      <label style={{marginRight: 5}}>{username}</label>
      <Space size={16} wrap>
        <Avatar src={<img src={url} alt="avatar" />} />
      </Space>
    </div>
  )
};

export default AvatarPic;