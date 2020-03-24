import React from "react";
import { Field, reduxForm } from "redux-form";

class StreamCreate extends React.Component {
  renderError({ error, touched }) {
    if (touched && error) {
      return (
        <div className="ui error message">
          <div className="header">{error}</div>
        </div>
      );
    }
  }

  renderInput = ({ input, label, meta }) => {
    // what actually show on the screen
    // console.log(meta); // meta contains the error message
    const className = `field ${meta.error && meta.touched ? "error" : ""}`;
    return (
      <div className={className}>
        <label>{label}</label>
        <input autoComplete="off" placeholder={label} {...input} />
        {this.renderError(meta)}
      </div>
    ); //take all key value pairs and add them as propoerties to the input element
  };

  onSubmit(formValues) {
    //submit form PUT api request
    console.log(formValues);
  }

  render() {
    // console.log(this.props);
    return (
      <form
        onSubmit={this.props.handleSubmit(this.onSubmit)} //handleSubmit
        className="ui form error" // error className can show the error msg
      >
        <Field name="title" component={this.renderInput} label="Enter Title" />
        <Field
          name="description"
          component={this.renderInput}
          label="Enter Description"
        />
        <button className="ui button primary">Submit</button>
      </form>
    );
  }
}

const validate = formValues => {
  const errors = {};
  if (!formValues.title) {
    errors.title = "You must enter a title";
  }

  if (!formValues.description) {
    errors.description = "You must enter a description";
  }
  return errors;
};

export default reduxForm({
  form: "streamCreate",
  validate
})(StreamCreate); //return a function and immediately call that function with StreamCreate
