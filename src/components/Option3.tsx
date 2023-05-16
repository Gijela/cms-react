import React from "react"

import UploadComponent from "./Upload.tsx"
import UploadClick from "./UploadClick.tsx"

function Option3() {
  return (
    <div>
      <h2 style={{marginBottom: '20px'}}>文件上传下载</h2>
      <p style={{fontSize: '12px'}}>tip: 这里接口默认是拒绝接受文件的</p>
      <UploadComponent />
      <UploadClick />
    
    </div>
  )
}

export default Option3
