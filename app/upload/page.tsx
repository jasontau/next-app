'use client'
import React, { useState } from 'react'
import { CldUploadWidget, CldImage } from 'next-cloudinary'

interface CloudinaryResult {
  public_id: string;
}

const UploadPage = () => {
  const [publicId, setPublicId] = useState('');


  return (
    <>
      {publicId && <CldImage src={publicId} width={270} height={180} alt="a coffee image" />}
      <CldUploadWidget
        uploadPreset={process.env.CLOUDINARY_UPLOAD_PRESET}
        options={{
          sources: ['local'],
          multiple: false
        }}
        onUpload={(result, widget) => {
          if (result.event != 'success') return
          const info = result.info as CloudinaryResult
          setPublicId(info.public_id)
        }}>
        {
          ({ open }) => <button
            className='btn btn-primary'
            onClick={() => open()}>Upload</button>
        }
      </CldUploadWidget>
    </>
  )
}

export default UploadPage