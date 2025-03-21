import NewsLatterBox from './NewsLatterBox';

const Contact = () => {
  return (
    <section id="contact" className="overflow-hidden py-16 md:py-20 lg:py-28">
      <div className="container">
        <div className="-mx-4 flex flex-wrap">
          <div className="w-full px-4 lg:w-7/12 xl:w-8/12">
            <div
              className="mb-12 rounded-sm bg-gray-dark px-8 py-11 shadow-three sm:p-[55px] lg:mb-5 lg:px-8 xl:p-[55px]"
              data-wow-delay=".15s"
            >
              <h2 className="mb-3 text-2xl font-bold text-white sm:text-3xl lg:text-2xl xl:text-3xl">
                ¿Necesitas ayuda? Abre un ticket
              </h2>
              <p className="mb-12 text-base font-medium text-body-color-dark">
                Nuestro equipo de soporte te responderá lo antes posible por
                correo electrónico.
              </p>
              <form>
                <div className="-mx-4 flex flex-wrap">
                  <div className="w-full px-4 md:w-1/2">
                    <div className="mb-8">
                      <label
                        htmlFor="name"
                        className="mb-3 block text-sm font-medium text-white"
                      >
                        Tu nombre
                      </label>
                      <input
                        type="text"
                        placeholder="Introduce tu nombre"
                        className="border-stroke w-full rounded-sm border bg-[#2C303B] px-6 py-3 text-base text-body-color-dark outline-none focus:border-primary shadow-two focus:shadow-none"
                      />
                    </div>
                  </div>
                  <div className="w-full px-4 md:w-1/2">
                    <div className="mb-8">
                      <label
                        htmlFor="email"
                        className="mb-3 block text-sm font-medium text-white"
                      >
                        Tu correo electrónico
                      </label>
                      <input
                        type="email"
                        placeholder="Introduce tu correo electrónico"
                        className="border-stroke w-full rounded-sm border bg-[#2C303B] px-6 py-3 text-base text-body-color-dark outline-none focus:border-primary shadow-two focus:shadow-none"
                      />
                    </div>
                  </div>
                  <div className="w-full px-4">
                    <div className="mb-8">
                      <label
                        htmlFor="message"
                        className="mb-3 block text-sm font-medium text-white"
                      >
                        Tu mensaje
                      </label>
                      <textarea
                        name="message"
                        rows={5}
                        placeholder="Introduce tu mensaje"
                        className="border-stroke w-full resize-none rounded-sm border bg-[#2C303B] px-6 py-3 text-base text-body-color-dark outline-none focus:border-primary shadow-two focus:shadow-none"
                      ></textarea>
                    </div>
                  </div>
                  <div className="w-full px-4">
                    <button className="rounded-sm bg-primary px-9 py-4 text-base font-medium text-white shadow-submit-dark duration-300 hover:bg-primary/90">
                      Enviar Ticket
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
          <div className="w-full px-4 lg:w-5/12 xl:w-4/12">
            <NewsLatterBox />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
