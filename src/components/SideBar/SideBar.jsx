import styles from "./SideBar.module.css";
import { Formik, Form, Field } from "formik";

// Very simple Formik form using native checkbox/radio inputs (no arrays/constants)
const SideBar = () => {
  const handleSubmit = (values, actions) => {
    console.log(values);

    actions.resetForm();
  };
  return (
    <aside className={styles.sidebar}>
      <Formik
        initialValues={{ location: "", equipment: [], type: "" }}
        onSubmit={handleSubmit}
      >
        <Form className={styles.form}>
          <div className={styles.locationBox}>
            <label className={styles.locationLabel} htmlFor="location">
              Location
            </label>
            <Field id="location" name="location" className={styles.locationInput} />
          </div>

          <div className={styles.filtersHeader}>Filters</div>

          <h4 className={styles.sectionTitle}>Vehicle equipment</h4>

          <div className={styles.grid}>
            <label className={styles.card}>
              <Field className={styles.inputHidden} type="checkbox" name="equipment" value="AC" />
              <img src="../../../wind.svg" alt="wind" />
              AC
            </label>

            <label className={styles.card}>
              <Field className={styles.inputHidden} type="checkbox" name="equipment" value="Automatic" />
              <img src="../../../diagram.svg" alt="diagram" />
              
              Automatic
            </label>

            <label className={styles.card}>
              <Field className={styles.inputHidden} type="checkbox" name="equipment" value="Kitchen" />
              <img src="../../../cup-hot.svg" alt="" />
              Kitchen
            </label>

            <label className={styles.card}>
              <Field className={styles.inputHidden} type="checkbox" name="equipment" value="TV" />
              <img src="../../../tv.svg" alt="" />
              TV
            </label>

            <label className={styles.card}>
              <Field className={styles.inputHidden} type="checkbox" name="equipment" value="Bathroom" />
              <img src="../../../ph_shower.svg" alt="" />
              Bathroom
            </label>
          </div>

          <h4 className={styles.sectionTitle}>Vehicle type</h4>

          <div className={styles.grid}>
            <label className={styles.card}>
              <Field className={styles.inputHidden} type="radio" name="type" value="Van" />
              <img src="../../../bi_grid-1x2.svg" alt="" />
              Van
            </label>

            <label className={styles.card}>
              <Field className={styles.inputHidden} type="radio" name="type" value="Fully Integrated" />
              <img src="../../../bi_grid.svg" alt="" />
              Fully Integrated
            </label>

            <label className={styles.card}>
              <Field className={styles.inputHidden} type="radio" name="type" value="Alcove" />
              <img src="../../../bi_grid-3x3-gap.svg" alt="" />
              Alcove
            </label>
          </div>

          <button className={styles.searchBtn} type="submit">
            Search
          </button>
        </Form>
      </Formik>
    </aside>
  );
};

export default SideBar;
