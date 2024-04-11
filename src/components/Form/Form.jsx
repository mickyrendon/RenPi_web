import {useState, useRef} from 'react';
import emailjs from '@emailjs/browser';

export const ContactUs = () => {
  const [message, setMessage] = useState('');
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
    .sendForm('service_uwclzh3', 'template_1ff9654', form.current, {
        publicKey: 'xwg6deS15w83_fZh9',
      })
      .then(
        () => {
          setMessage('SUCCESS! Your message has been sent.');
          console.log('SUCCESS!');
          alert('SUCCESS!');
        },
        (error) => {
          setMessage(`FAILED... Error: ${error.text}`);
          console.log('FAILED...', error.text);
          alert('FAILED...', error.text);
        },
      );
  };

  return (
    <form 
    target="_self"
    ref={form}
    onSubmit={sendEmail}
    class="p-4 w-11/12 max-w-md mx-auto js-scroll fade-in-bottom"
    >
     {message && <p className="message">{message}</p>}
      <div class="mb-4">
        <label class="block font-semibold mb-2 text-start" for="nombre">Nombre</label>
        <input 
        id="nombre"
        type="text"
        name="user_name"
        class="w-full h-8 px-4 py-2 border rounded-md focus:outline-none bg-transparent focus:ring-2 focus:ring-blue-500"
        placeholder="Jhon Doe"
        required/>
      </div>
      <div class="mb-4">
        <label class="block font-semibold mb-2 text-start" for="email">Correo</label>
        <input 
        id="email" 
        type="email" 
        name="user_email"
        class="w-full h-8 px-4 py-2 border rounded-md focus:outline-none bg-transparent focus:ring-2 focus:ring-blue-500"
        placeholder="jhonDoe@gmail.com"
        required/>
      </div>
      <div class="mb-4">
        <label class="block font-semibold mb-2 text-start" for="message">Mensaje</label>
        <textarea 
        id="message"
        name="message" 
        class="w-full h-32 px-4 py-2 bg-transparent border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" 
        rows="4" 
        placeholder="Deja tu mensaje" 
        required/>
      </div>
      <label class="text-center w-full h-auto" for="submit"></label>
      <input 
      type="submit" 
      value="Send" 
      class="submit-btn max-w-fit self-center bg-gradient-to-r from-sky-400 to-blue-500 text-white py-2 px-4 rounded-md inline-block text-center md:hover:shadow-lg md:hover:transition-all scale-125 md:cursor-pointer"
      />
    </form>
  );
};


/* 
 <form target="_self" action="https://formsubmit.co/contacto.renpi@gmail.com" method="POST" name="formulario"class="p-4 w-11/12 max-w-md mx-auto js-scroll   fade-in-bottom ">
      <!-- Nombre -->
      <div class="mb-4">
        <label class="block font-semibold mb-2 text-start" for="nombre">{nombre}</label>
        <input
          class="w-full h-8 px-4 py-2 border rounded-md focus:outline-none bg-transparent focus:ring-2 focus:ring-blue-500 "
          type="text"
          id="nombre"
          name="nombre"
          placeholder="Name"
          required
        >
      </div>
      <!-- Email -->
      <div class="mb-4">
        <label class="block font-semibold mb-2 text-start" for="email">{email}</label>
        <input
          class="w-full h-8 px-4 py-2 border bg-transparent rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          type="email"
          id="email"
          name="email"
          placeholder="Email Address"
          required
        >
        <input 
          type="hidden" 
          name="_subject" 
          value="¡Nuevo Correo!"
        >
        <input
          type="hidden"
          name="_autoresponse"
          value="Gracias por contactarte con nosotros, en breve uno de nuestros asesores se encargará de atender tu solicitud."
        > 
      </div>

      <!-- Mensaje -->
      <div class="mb-4">
        <label class="block font-semibold mb-2 text-start" for="mensaje">{content}</label>
        <textarea
          class="w-full h-32 px-4 py-2 bg-transparent border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          id="mensaje"
          name="mensaje"
          rows="4"
          required
        ></textarea>
      </div>

      <!-- Botón de enviar -->
      <label class="text-center w-full h-auto" for="submit"></label>
        <div>
          <input
          type="submit"
          value="Enviar"
          id="submit"
          class="submit-btn max-w-fit self-center bg-gradient-to-r from-sky-400 to-blue-500 text-white py-2 px-4 rounded-md inline-block text-center md:hover:shadow-lg md:hover:transition-all scale-125 md:cursor-pointer"
        >
        <!-- <button 
        type="submit"
        id="submit"
        class="submit-btn  max-w-fit self-center bg-gradient-to-r from-sky-400 to-blue-500 text-white py-2 px-4 rounded-md inline-flex gap-x-2 text-center md:hover:shadow-lg md:hover:transition-all scale-125 md:cursor-pointer"
        >
        Enviar
        <Loader clase='hidden'/>
        </button> -->
      </div>
      <input type="hidden" name="_next" value="https://renpi.netlify.app/pages/thanksPage.astro">
    </form>

*/