import emailjs from '@emailjs/browser';
import React, { useRef } from 'react';
import { useForm } from 'react-hook-form';
import './Contact.css';
import '../AboutPage/About.css';

const Form = () => {
  const form = useRef();
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();

  const sendEmail = (data, e) => {
    e.preventDefault();
    console.log(e);

    emailjs
      .sendForm(
        'service_3ddprkd',
        'template_af2fx3u',
        form.current,
        'sKFleaINfjwVf9BGA'
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
  };

  return (
    <div>
      <form
        onSubmit={handleSubmit(sendEmail)}
        className="contact-form"
        ref={form}
      >
        <input
          type="text"
          name="user_name"
          placeholder="name"
          {...register('user_name', { required: true })}
          aria-invalid={errors.user_name ? 'true' : 'false'}
        />
        {errors.user_name?.type === 'required' && (
          <p className="form-error" role="alert">
            name is required
          </p>
        )}

        <input
          type="email"
          name="user_email"
          placeholder="email"
          {...register('user_email', { required: 'email address is required' })}
          aria-invalid={errors.user_email ? 'true' : 'false'}
        />
        {errors.user_email && (
          <p className="form-error" role="alert">
            {errors.user_email?.message}
          </p>
        )}

        <textarea
          type="message"
          name="message"
          placeholder="message"
          {...register('message', { required: 'a message is required' })}
          aria-invalid={errors.message ? 'true' : 'false'}
        />
        {errors.message && (
          <p className="form-error" role="alert">
            {errors.message?.message}
          </p>
        )}
        <input className="carousel-btn" type="submit" value="send" />
      </form>
    </div>
  );
};

export default Form;
