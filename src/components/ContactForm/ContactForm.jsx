import styles from "./ContactForm.module.css";
import { Formik, Form, Field,ErrorMessage } from "formik";
import toast from "react-hot-toast";
 import * as Yup from 'yup';

const ContactForm = () => {
  const handleSubmit = (values, actions) => {
    console.log(values);

    toast.success("Your message has been sent successfully!");

    actions.resetForm();
    
  };
  const validationSchema = Yup.object().shape({
    name: Yup.string().required("Required"),
    email: Yup.string().email("Invalid email").required("Required"),
    date: Yup.string().required("Required"),
    message: Yup.string().required("Required"),
  });

  return (
      <div className={styles.contactForm}>
          <h3 className={styles.heading}>Book your campervan now</h3>
          <p className={styles.text}>
              Stay connected! We are always ready to help you.
          </p>
      <Formik
        initialValues={{ name: "", email: "", date: "", message: "" }}
        onSubmit={handleSubmit}
        validationSchema={validationSchema}
      >
        <Form className={styles.form}>
          <Field name="name" placeholder="Name*" />
          <ErrorMessage name="name" component="span" className={styles.error} />
          <Field type="email" name="email" placeholder="Email*" />
          <ErrorMessage name="email" component="span" className={styles.error} />
          <Field name="date" placeholder="Booking Date*" />
          <ErrorMessage name="date" component="span" className={styles.error} />
          <Field as="textarea" name="message" placeholder="Comment*" />
          <ErrorMessage name="message" component="span" className={styles.error} />

          <button className={styles.searchBtn} type="submit">
            Search
          </button>
        </Form>
      </Formik>
    </div>
  );
};

export default ContactForm;
