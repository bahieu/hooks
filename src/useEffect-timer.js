import { useState, useEffect } from "react";
//Demo preview  Avatar
function Avatar() {

  const [avatar, setAvatar] = useState()

  useEffect(()=>{
    return ()=>{
      avatar && URL.revokeObjectURL(avatar.preview)
    }
  },[avatar])

  const handlePreviewAvatar = (e)=>{
    const file = e.target.files[0]
    file.preview = URL.createObjectURL(file)
    setAvatar(file)
  }
  return (
        <div>
      <input 
      type = 'file'
      onChange={handlePreviewAvatar}
    ></input>
    {avatar && (
    <img src={avatar.preview} alt = "" width="10%"/>
    )}
    </div>
  )
}
export default Avatar;