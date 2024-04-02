import { Resend } from 'resend';

const resend = new Resend('re_82mrmkxU_CPhmmDrq5oriZACcXugJpuJi');
const nombre = document.querySelector('#nombre') 
const email = document.querySelector('#email') 
const mensaje = document.querySelector('#mensaje') 


export const correo = (async function () {
  const { data, error } = await resend.emails.send({
    from: `<${email}>`,
    to: ['contacto.renpi@gmail.com'],
    subject: `${nombre}`,
    html: `${mensaje}`,
  });

  if (error) {
    return console.error({ error });
  }

  console.log({ data });
})();
