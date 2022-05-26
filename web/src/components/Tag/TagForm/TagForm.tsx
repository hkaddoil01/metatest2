import {
  Form,
  FormError,
  FieldError,
  Label,
  RadioField,
  TextField,
  Submit,
} from '@redwoodjs/forms'

import  { TagType } from 'types/graphql'
type TagTypeMap = {[type in TagType]: String}
const TagTypeNames:TagTypeMap = {
  "CHARACTER": "Character",
  "EVENT": "Event",
  "PLACE": "Place",
  "OTHER": "Other"
}

const TagForm = (props) => {
  const onSubmit = (data) => {








    props.onSave(data, props?.tag?.id)
  }

  for (var enumMember in TagTypeNames) {
    console.log("enum member: ", enumMember);
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
          name="type"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Type
        </Label>



        <div className="rw-check-radio-items">
          <RadioField
            id="tag-type-0"
            name="type"
            defaultValue="CHARACTER"
            defaultChecked={props.tag?.type?.includes('CHARACTER')}
            className="rw-input"
            errorClassName="rw-input rw-input-error"
          />
          <div>
            Character
          </div>
        </div>

        <div className="rw-check-radio-items">
          <RadioField
            id="tag-type-1"
            name="type"
            defaultValue="EVENT"
            defaultChecked={props.tag?.type?.includes('EVENT')}
            className="rw-input"
            errorClassName="rw-input rw-input-error"
          />
          <div>
            Event
          </div>
        </div>

        <div className="rw-check-radio-items">
          <RadioField
            id="tag-type-2"
            name="type"
            defaultValue="PLACE"
            defaultChecked={props.tag?.type?.includes('PLACE')}
            className="rw-input"
            errorClassName="rw-input rw-input-error"
          />
          <div>
            Place
          </div>
        </div>

        <div className="rw-check-radio-items">
          <RadioField
            id="tag-type-3"
            name="type"
            defaultValue="OTHER"
            defaultChecked={props.tag?.type?.includes('OTHER')}
            className="rw-input"
            errorClassName="rw-input rw-input-error"
          />
          <div>
            Other
          </div>
        </div>



        <FieldError name="type" className="rw-field-error" />

        <Label
          name="name"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Name
        </Label>

          <TextField
            name="name"
            defaultValue={props.tag?.name}
            className="rw-input"
            errorClassName="rw-input rw-input-error"
            validation={{ required: true }}
          />


        <FieldError name="name" className="rw-field-error" />

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

export default TagForm
