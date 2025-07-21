import { motion } from "framer-motion"

export function TestimonialsSection() {
  const testimonials = [
    {
      author: {
        name: "Anna N.",
        handle: "",
        avatar: "/18.jpg"
      },
      text: "Współpraca z Mainly to czysta przyjemność. Strona powstała błyskawicznie, a efekt przerósł nasze oczekiwania!"
    },
    {
      author: {
        name: "Michał K.",
        handle: "",
        avatar: "/75.jpg"
      },
      text: "Profesjonalizm, świetny kontakt i pełne zrozumienie potrzeb klienta. Polecam każdemu, kto chce mieć nowoczesną stronę."
    },
    {
      author: {
        name: "Katarzyna Z.",
        handle: "",
        avatar: "/7.jpg"
      },
      text: "Zespół Mainly zadbał o każdy detal. Strona jest szybka, piękna i skutecznie generuje leady."
    },
    {
      author: {
        name: "Tomasz U.",
        handle: "",
        avatar: "/avatars/tomek.png"
      },
      text: "Świetna komunikacja, elastyczność i kreatywność. Mainly to partner, na którego można liczyć na każdym etapie projektu."
    },
    {
      author: {
        name: "Ewelina M.",
        handle: "",
        avatar: "/avatars/ewelina.png"
      },
      text: "Zespół Mainly wykazał się ogromnym zaangażowaniem i kreatywnością. Efekt końcowy przerósł nasze oczekiwania!"
    },
    {
      author: {
        name: "Paweł L.",
        handle: "",
        avatar: "/avatars/pawel.png"
      },
      text: "Bardzo sprawna realizacja i świetny kontakt. Strona działa bez zarzutu i wygląda profesjonalnie."
    },
    {
      author: {
        name: "Joanna K.",
        handle: "",
        avatar: "/avatars/joanna.png"
      },
      text: "Dzięki Mainly nasz portal zyskał nowoczesny wygląd i intuicyjną obsługę. Polecam!"
    },
    {
      author: {
        name: "Grzegorz W.",
        handle: "",
        avatar: "/avatars/grzegorz.png"
      },
      text: "Wysoka jakość usług, terminowość i pełne wsparcie na każdym etapie projektu."
    },
    {
      author: {
        name: "Marcin C.",
        handle: "",
        avatar: ""
      },
      text: "Polecam do współpracy firmę Mainly. Byłem w kropce z czasem, moje kłopoty rozwiązał ów człowiek. Mój zarys i pomysł i materiały obrobił łącząc kropki ...dodał elementy AI i wyszedł materiał który wywołał łzy wzruszenia, uśmiech, okrzyki radości. Czas operacyjny to bardzo szybka realizacja. Polecam jeśli brak Ci czasu i chcesz wzbogacić swój materiał o materiały z AI"
    },
    {
      author: {
        name: "Paulina O.",
        handle: "",
        avatar: ""
      },
      text: "Chciałabym serdecznie podziękować za współpracę. Pan Stanislaw jest niezwykle uprzejmy i pomocny. Efekt pracy przerósł moje najśmielsze oczekiwania. Zdecydowanie polecam współpracę."
    }
  ];

  return (
    <div className="mb-32">
      {/* Statyczny nagłówek */}
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold mb-4 text-white">Co mówią nasi klienci?</h2>
        <p className="text-xl text-gray-400 max-w-3xl mx-auto">
          Zobacz, jak nasze projekty pomagają rozwijać biznesy i budować silną markę w internecie.
        </p>
      </div>

      {/* Przewijające się opinie */}
      <div className="overflow-hidden">
        <motion.div
          initial={{ x: 0 }}
          animate={{ x: "-25%" }}
          transition={{
            x: {
              repeat: Infinity,
              repeatType: "loop",
              duration: 40,
              ease: "linear",
            },
          }}
          className="flex gap-8"
        >
          {([...testimonials, ...testimonials, ...testimonials, ...testimonials]).map((testimonial, i) => (
            <div key={i} className="flex-shrink-0 w-80">
              <div className="bg-zinc-950 border border-[#FA6503]/20 p-6 rounded-xl">
                <p className="text-gray-300 mb-4">&ldquo;{testimonial.text}&rdquo;</p>
                <div className="flex items-center">
                  {testimonial.author.avatar ? (
                    <img
                      src={testimonial.author.avatar}
                      alt={testimonial.author.name}
                      className="w-10 h-10 rounded-full object-cover mr-3"
                    />
                  ) : (
                    <div className="w-10 h-10 bg-zinc-800 rounded-full mr-3"></div>
                  )}
                  <div>
                    <p className="font-medium text-white">{testimonial.author.name}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  )
} 