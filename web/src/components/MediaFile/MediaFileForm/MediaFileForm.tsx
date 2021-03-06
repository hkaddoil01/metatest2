import {
  Form,
  FormError,
  FieldError,
  Label,
  TextField,
  Submit,
} from '@redwoodjs/forms'

import { PickerInline } from 'filestack-react'
import { useState } from 'react'

const formatDatetime = (value) => {
  if (value) {
    return value.replace(/:\d{2}\.\d{3}\w/, '')
  }
}

const MediaFileForm = (props) => {
  const [url, setUrl] = useState(props?.image?.url)
  console.log("*** MediaFileForm FIRST  --- props = ", props)

  const onSubmit = (data) => {
    console.log("*** onSubmit --- data = ", data)
    console.log("*** onSubmit --- url = ", {url})
    const post = { "title":data.title, ... {url}}
    console.log("*** onSubmit --- post = ", post)
    const dataWithUrl = Object.assign(data, { url })
    console.log("*** onSubmit --- dataWithUrl = ", dataWithUrl)
    console.log("*** onSubmit --- props = ", props)
    props.onSave(dataWithUrl, props?.mediaFile?.id)
  }

  const onFileUpload = (response) => {
    //console.info(response)
    setUrl(response.filesUploaded[0].url)
  }

  return (
    <div className="rw-form-wrapper">
      <Form onSubmit={onSubmit} error={props.error}>
        <FormError
          error={props.error}
          wrapperClassName="rw-form-error-wrapper"
          titleClassName="rw-form-error-title"
          listClassName="rw-form-error-list"
        />

        <Label
          name="title"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Title
        </Label>

          <TextField
            name="title"
            defaultValue={props.mediaFile?.title}
            className="rw-input"
            errorClassName="rw-input rw-input-error"
            validation={{ required: true }}
          />


        <FieldError name="title" className="rw-field-error" />

        <PickerInline
          apikey={process.env.REDWOOD_ENV_FILESTACK_API_KEY}
          onSuccess={onFileUpload}
        >
          <div style={{ display: url ? 'none' : 'block', height: '500px' }}></div>
        </PickerInline>

        {url && (
          <div>
            <img src={url} style={{ display: 'block', margin: '2rem 0' }} />
            <button
              onClick={() => setUrl(null)}
              className="rw-button rw-button-blue"
            >
              Replace Image
            </button>
          </div>
        )}
        <div className="rw-button-group">
          <Submit
            disabled={props.loading}
            className="rw-button rw-button-blue"
          >
            Save
          </Submit>
        </div>
      </Form>
    </div>
  )
}

export default MediaFileForm
