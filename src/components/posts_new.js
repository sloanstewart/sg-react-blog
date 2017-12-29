import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
// import { fieldPropTypes } from 'redux-form/lib/propTypes';

class PostsNew extends Component {
  renderField(field) {
    return (
      <div className="form-group">
        <label>{field.label}</label>
        <input className="form-control" type="text" {...field.input} />
        {field.meta.error}
      </div>
    );
  }

  render() {
    return (
      <div>
        <h3>Add a Post</h3>
        <form>
          <Field label="Title" name="title" component={this.renderField} />
          <Field
            label="Categories"
            name="categories"
            component={this.renderField}
          />
          <Field label="Content" name="content" component={this.renderField} />
        </form>
      </div>
    );
  }
}

function validate(values) {
  const errors = {};

  if (!values.title || !values.content.length < 3) {
    errors.title = 'Enter a valid title';
  }
  if (!values.categories) {
    errors.categories = 'Enter some categories';
  }
  if (!values.content || !values.content.length < 10) {
    errors.content = 'Enter some content for your post';
  }

  return errors;
}

export default reduxForm({
  validate,
  form: 'PostNewForm',
})(PostsNew);
