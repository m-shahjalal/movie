import formImage from './form.png';
import { Formik } from 'formik';
import styles from './form.module.css';

const initialValues = {
	name: '',
	release: '',
	lan: '',
	thumb: '',
	video: '',
};

const onSubmit = (values) => {
	console.log(values);
};

const validate = (value) => {
	let errors = {};

	if (!value.name) errors.name = 'name is required';
	if (!value.release) errors.release = 'release date is required';
	if (!value.lan) errors.lan = 'language is required';

	if (!value.thumb.name) {
		errors.thumb = 'thumbnail is required';
	} else if (!value.thumb.type.match(/\/(jpg|jpeg|png)$/)) {
		errors.thumb = 'select a thumbnail type of jpg or png';
	}

	if (!value.video) {
		errors.video = 'please select a video';
	} else if (!value.video.type.match(/\/(mp4|3gp|webm)$/)) {
		errors.video = 'select a mp4, 3gp or webm video file';
	}

	return errors;
};

const Submit = () => {
	return (
		<div className={styles.formContainer}>
			<div className={styles.formInner}>
				<div className={styles.left}>
					<h1 className={styles.head}>SUBMIT YOUR MOVIE</h1>
					<Formik
						initialValues={initialValues}
						onSubmit={onSubmit}
						validate={validate}>
						{(props) => (
							<form
								onSubmit={props.handleSubmit}
								className={styles.form}>
								<input
									className={styles.input}
									placeholder='Name'
									type='text'
									onChange={props.handleChange}
									onBlur={props.handleBlur}
									value={props.values.name}
									name='name'
								/>
								{props.errors.name && props.touched.name && (
									<div className={styles.feedback}>
										{props.errors.name}
									</div>
								)}

								<input
									className={styles.input}
									placeholder='date'
									type='date'
									name='release'
									onChange={props.handleChange}
									onBlur={props.handleBlur}
									value={props.values.release}
								/>
								{props.errors.release &&
									props.touched.release && (
										<div className={styles.feedback}>
											{props.errors.release}
										</div>
									)}

								<input
									className={styles.input}
									placeholder='Language'
									type='text'
									name='lan'
									value={props.values.lan}
									onChange={props.handleChange}
									onBlur={props.handleBlur}
								/>
								{props.errors.lan && props.touched.lan && (
									<div className={styles.feedback}>
										{props.errors.lan}
									</div>
								)}

								<input
									className={`${styles.input} ${styles.file}`}
									type='file'
									name='thumb'
									onChange={(e) => {
										props.setFieldValue(
											'thumb',
											e.target.files[0]
										);
									}}
									onBlur={props.handleBlur}
								/>
								{props.errors.thumb && props.touched.thumb && (
									<div className={styles.feedback}>
										{props.errors.thumb}
									</div>
								)}

								<input
									className={styles.input}
									type='file'
									name='video'
									onBlur={props.handleBlur}
									onChange={(e) => {
										props.setFieldValue(
											'video',
											e.target.files[0]
										);
									}}
								/>
								{props.errors.video && props.touched.video && (
									<div className={styles.feedback}>
										{props.errors.video}
									</div>
								)}

								<input
									value='submit'
									type='submit'
									className={styles.submit}
								/>
							</form>
						)}
					</Formik>
				</div>
				<div className={styles.right}>
					<img
						className={styles.img}
						src={formImage}
						alt='side appearance'
					/>
				</div>
			</div>
		</div>
	);
};

export default Submit;
