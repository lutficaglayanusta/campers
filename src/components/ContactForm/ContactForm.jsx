import styles from "./ContactForm.module.css";
import { Formik, Form, Field } from "formik";

const ContactForm = () => {
  const handleSubmit = (values, actions) => {
    console.log(values);
    actions.resetForm();
  };

  return (
      <div className={styles.contactForm}>
          <h3>Book your campervan now</h3>
          <p>
              Stay connected! We are always ready to help you.
          </p>
      <Formik
        initialValues={{ name: "", email: "", date: "", message: "" }}
        onSubmit={handleSubmit}
      >
        <Form className={styles.form}>
          <Field name="name" placeholder="Name*" />
          <Field type="email" name="email" placeholder="Email*" />
          <Field name="date" placeholder="Booking Date*" />
          <Field as="textarea" name="message" placeholder="Comment*" />

          <button className={styles.searchBtn} type="submit">
            Search
          </button>
        </Form>
      </Formik>
    </div>
  );
};

export default ContactForm;
