import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import { fieldPropTypes } from 'redux-form/lib/propTypes';

class PostsNew extends Component {
  renderField(field) {
    const { meta: { touched, error } } = field;
    const className = `form-group ${touched && error ? 'has-danger' : ''}`;

    return (
      <div className={className}>
        <label>{field.label}</label>
        <input className="form-control" type="text" {...field.input} />
        <div className="text-help">{touched ? error : ''}</div>
      </div>
    );
  }

  onSubmit(values) {
    console.log(values);
  }

  render() {
    const { handleSubmit } = this.props;

    return (
      <div>
        <h3>Add a Post</h3>
        <form onSubmit={handleSubmit(this.onSubmit.bind(this))}>
          <Field label="Title" name="title" component={this.renderField} />
          <Field
            label="Categories"
            name="categories"
            component={this.renderField}
          />
          <Field label="Content" name="content" component={this.renderField} />
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </form>
      </div>
    );
  }
}

function validate(values) {
  const errors = {};

  if (!values.title) {
    errors.title = 'Enter a valid title';
  }
  if (!values.categories) {
    errors.categories = 'Enter some categories';
  }
  if (!values.content) {
    errors.content = 'Enter some content for your post';
  }

  return errors;
}

export default reduxForm({
  validate,
  form: 'PostNewForm',
})(PostsNew);
