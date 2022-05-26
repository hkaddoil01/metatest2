import {
  Form,
  FormError,
  FieldError,
  Label,
  TextField,
  CheckboxField,
  DatetimeLocalField,
  Submit,
} from '@redwoodjs/forms'

import { PickerInline } from 'filestack-react'
import { useState } from 'react'
import TagInput from 'src/components/Taginput/Taginput'
import {TagTypeNames} from 'src/components/Taginput/Taginput'


const formatDatetime = (value) => {
  if (value) {
    return value.replace(/:\d{2}\.\d{3}\w/, '')
  }
}


const PostForm = (props) => {
  const [url, setUrl] = useState(props?.image?.url)
  const [tags, setTags] = useState(props?.post?.tags)
  const attr = {
    "CHARACTER" : [{value : "c-v1", label: "c-key1"}, {value : "c-v2", label: "c-key2"}],
    "PLACE" : [{value : "p-v1", label: "p-key1"}, {value : "p-v2", label: "p-key2"}],
  }

  var tagOptions = {}

  const onSubmit = (data) => {
    const create = {title:data.title, ... {url}}
    const mfile = {create}

    console.group("*** onSubmit ***")
    console.log(" -- mfile = ", mfile)
    console.log(" -- tags = ", tags)

    var tagsOnPost = []
    for (var t in tags) {
        for (var e of tags[t])
            tagsOnPost.push({where: {name: e.value}, create: {type: t , name: e.value}})
    }
    console.log(" -- tagsOnPost = ", tagsOnPost)
    console.groupEnd()

    const postWithTagMFile = Object.assign(data, {mfile}, {tags : {connectOrCreate: tagsOnPost}})
    console.log("*** onSubmit - postWithTagMFile = ", postWithTagMFile)

    props.onSave(postWithTagMFile, props?.post?.id)
  }

  const onFileUpload = (response) => {
    //console.info(response)
    setUrl(response.filesUploaded[0].url)
  }

  const update_tag = (tagtype, newValue) => {
    var newTagVals = {}
    newTagVals[tagtype] = newValue
    console.group("***TagInput --- Update Tag **** ")
    console.log(tagtype)
    console.log(newValue)
    console.log("-- newTagVals = ", newTagVals)
    console.log("-- old tags = ", tags)

    var newtags = newTagVals

    if (tags)
       newtags = Object.assign(tags, newTagVals)
    console.log("-- newtags = ", newtags)
    setTags(newtags)
    //setTags({...tags, ...newTagVals})
    //setTags({{tagtype}: newValue})
    console.log("-- updated tags = ", tags)
    console.groupEnd();

  }

  console.log("*** Before Looping  -- TagTypeNames: ", TagTypeNames)
  var tagTypeNameList = []
  Object.entries(TagTypeNames).forEach(
    ([type, taglabel]) => {
      console.log("*** Looping  -- type: ", type)
      console.log("*** Looping  -- taglabel: ", taglabel)
      tagTypeNameList.push({"tagtype": type, "taglabel": taglabel})
      tagOptions[type] = []

  })
  console.log("*** Looping  -- tagTypeNameList: ", tagTypeNameList)

  console.log("*** PostForm -- props = ", props)
  if (props.tagPosts) {
      for (var t of props.tagPosts) {
          console.log("*** PostForm -- tagPosts -- t = ", t)
          //tagOptions[t.type].push({"id": t.id, "label":t.type + "|" + t.name, "value": t.name})
          tagOptions[t.type].push({"id": t.id, "label": t.name, "value": t.name})

      }
  }
  console.log("*** PostForm -- tagPosts -- tagOptions = ", tagOptions)
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
            defaultValue={props.post?.title}
            className="rw-input"
            errorClassName="rw-input rw-input-error"
            validation={{ required: true }}
          />


        <FieldError name="title" className="rw-field-error" />

        <Label
          name="author"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Author
        </Label>

          <TextField
            name="author"
            defaultValue={props.post?.author}
            className="rw-input"
            errorClassName="rw-input rw-input-error"
            validation={{ required: true }}
          />


        <FieldError name="author" className="rw-field-error" />

        <Label
          name="body"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Body
        </Label>

          <TextField
            name="body"
            defaultValue={props.post?.body}
            className="rw-input"
            errorClassName="rw-input rw-input-error"
            validation={{ required: true }}
          />


        <FieldError name="body" className="rw-field-error" />

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

        <Label
          name="published"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Published
        </Label>

          <CheckboxField
            name="published"
            defaultChecked={props.post?.published}
            className="rw-input"
            errorClassName="rw-input rw-input-error"
          />


        <FieldError name="published" className="rw-field-error" />

        <Label
          name="publisheddAt"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Publishedd at
        </Label>

          <DatetimeLocalField
            name="publisheddAt"
            defaultValue={formatDatetime(props.post?.publisheddAt)}
            className="rw-input"
            errorClassName="rw-input rw-input-error"
          />


        <FieldError name="publisheddAt" className="rw-field-error" />
        {
          tagTypeNameList.map((tagTypeName) => (
            <div className="taginputcontainer" key={tagTypeName.tagtype} >
              <span className="typeinput">標籤-{tagTypeName.taglabel}</span>
              <span className="valueinput"><TagInput update={update_tag} tagtype={tagTypeName.tagtype} taglabel={tagTypeName.taglabel} options={tagOptions}/></span>
            </div>

          ))
        }


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

export default PostForm
