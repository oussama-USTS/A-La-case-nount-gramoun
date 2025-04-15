'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { UserGroupIcon, ClockIcon, MapPinIcon, SparklesIcon, ChevronDownIcon } from '@heroicons/react/24/outline';
import AnimatedBackground from './components/AnimatedBackground';
import ProfileCard from './components/ProfileCard';

const mockProfiles = [
  {
    name: 'Marie Laurent',
    rating: 4.9,
    reviews: 128,
    specialties: ['Aide à domicile', 'Soins', 'Accompagnement'],
    image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    price: 25,
  },
  {
    name: 'Thomas Martin',
    rating: 4.8,
    reviews: 96,
    specialties: ['Transport', 'Courses', 'Compagnie'],
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    price: 22,
  },
  {
    name: 'Sophie Dubois',
    rating: 4.7,
    reviews: 84,
    specialties: ['Ménage', 'Cuisine', 'Garde'],
    image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    price: 23,
  },
];

export default function Home() {
  const [formData, setFormData] = useState({
    sector: '',
    date: '',
    startTime: '',
    endTime: '',
    personGender: '',
    helperPreference: '',
    immediateSearch: false,
  });

  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log(formData);
  };

  const features = [
    {
      icon: UserGroupIcon,
      title: "Mise en relation instantanée",
      description: "Trouvez l'aidant idéal en quelques clics"
    },
    {
      icon: ClockIcon,
      title: "Disponibilité 24/7",
      description: "Des aidants disponibles à tout moment"
    },
    {
      icon: MapPinIcon,
      title: "Proximité",
      description: "Des aidants près de chez vous"
    },
    {
      icon: SparklesIcon,
      title: "Service personnalisé",
      description: "Une aide adaptée à vos besoins"
    }
  ];

  const steps = [
    {
      number: "01",
      title: "Remplissez le formulaire",
      description: "Indiquez vos besoins et préférences en quelques clics",
      color: "from-orange-500 to-yellow-500"
    },
    {
      number: "02",
      title: "Trouvez l'aidant idéal",
      description: "Consultez les profils et choisissez l'aidant qui vous correspond",
      color: "from-yellow-500 to-orange-600"
    },
    {
      number: "03",
      title: "Prenez contact",
      description: "Échangez directement avec l'aidant et planifiez votre première rencontre",
      color: "from-orange-600 to-red-500"
    }
  ];

  const faqs = [
    {
      question: "Comment choisir le bon aidant ?",
      answer: "Nous vous recommandons de bien lire les profils, les évaluations et les commentaires des autres utilisateurs. Vous pouvez également filtrer les aidants selon vos critères spécifiques comme la localisation, l'expérience et les disponibilités."
    },
    {
      question: "Quelles sont les qualifications des aidants ?",
      answer: "Tous nos aidants sont soigneusement sélectionnés et doivent fournir leurs certifications professionnelles. Nous vérifions leurs antécédents et leurs références pour garantir un service de qualité."
    },
    {
      question: "Comment fonctionne la tarification ?",
      answer: "Les tarifs sont fixés par les aidants et clairement affichés sur leurs profils. Vous pouvez comparer les différents tarifs et choisir celui qui correspond à votre budget."
    },
    {
      question: "Que faire en cas de problème ?",
      answer: "Notre service client est disponible 24/7 pour vous accompagner. En cas de difficulté, vous pouvez nous contacter directement via la messagerie ou par téléphone."
    }
  ];

  return (
    <>
      <AnimatedBackground />
      <main className="relative min-h-screen">
        {/* Hero Section with Form */}
        <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-16">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="flex flex-col justify-center"
          >
            <motion.h1 
              className="text-6xl font-bold text-gray-900 mb-6"
            >
              Trouvez votre{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-yellow-500">
                aidant idéal
              </span>
            </motion.h1>
            <motion.p 
              className="text-xl text-gray-600"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Une plateforme innovante qui connecte les personnes ayant besoin d'aide avec des aidants qualifiés et bienveillants.
            </motion.p>

            {/* Statistics in Hero Section */}
            <motion.div className="grid grid-cols-2 gap-4 mt-12">
              {[
                { number: "2000+", label: "Utilisateurs actifs" },
                { number: "500+", label: "Aidants certifiés" },
                { number: "15000+", label: "Heures de service" },
                { number: "98%", label: "Clients satisfaits" }
              ].map((stat, index) => (
                <motion.div
                  key={index}
                  className="bg-white/10 backdrop-blur-lg rounded-xl p-4 text-left"
                >
                  <motion.h3 className="text-2xl font-bold text-orange-500">
                    {stat.number}
                  </motion.h3>
                  <motion.p className="text-sm text-gray-600">
                    {stat.label}
                  </motion.p>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* Form Section */}
          <motion.div className="relative">
            <div className="sticky top-8">
              <form onSubmit={handleSubmit} className="bg-gradient-to-br from-orange-50 to-yellow-50/50 backdrop-blur-xl shadow-[0_8px_30px_rgb(0,0,0,0.12)] rounded-3xl p-8 space-y-8 border border-orange-100/20">
                <div className="text-center mb-8">
                  <h2 className="text-3xl font-bold bg-gradient-to-r from-orange-500 to-yellow-500 bg-clip-text text-transparent">
                    Trouvez votre aidant
                  </h2>
                  <p className="text-gray-500 mt-2">Remplissez le formulaire ci-dessous</p>
                </div>

                <div className="space-y-6">
                  <div className="group">
                    <label htmlFor="sector" className="block text-sm font-medium text-gray-700 mb-2 transition-colors group-focus-within:text-orange-500">
                      Secteur d'intervention
                    </label>
                    <div className="relative rounded-xl shadow-sm transition-all duration-200 focus-within:shadow-md">
                      <input
                        type="text"
                        id="sector"
                        className="block w-full rounded-xl border-0 bg-white/60 pl-4 pr-12 py-3.5 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-orange-500 sm:text-sm sm:leading-6 transition-all duration-200"
                        value={formData.sector}
                        onChange={(e) => setFormData({ ...formData, sector: e.target.value })}
                        required
                        placeholder="Ex: Paris 15ème"
                      />
                      <div className="absolute inset-y-0 right-0 flex items-center pr-4">
                        <MapPinIcon className="h-5 w-5 text-gray-400 transition-colors group-focus-within:text-orange-500" />
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center justify-between p-4 bg-orange-50/50 rounded-xl">
                    <div>
                      <h3 className="text-sm font-medium text-gray-900">Recherche immédiate</h3>
                      <p className="text-sm text-gray-500">Activer pour trouver un aidant disponible maintenant</p>
                    </div>
                    <button
                      type="button"
                      onClick={() => setFormData(prev => ({ ...prev, immediateSearch: !prev.immediateSearch }))}
                      className={`relative inline-flex h-6 w-11 flex-shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2 ${
                        formData.immediateSearch ? 'bg-orange-500' : 'bg-gray-200'
                      }`}
                    >
                      <span className="sr-only">Activer la recherche immédiate</span>
                      <span
                        className={`pointer-events-none relative inline-block h-5 w-5 transform rounded-full bg-white shadow ring-0 transition duration-200 ease-in-out ${
                          formData.immediateSearch ? 'translate-x-5' : 'translate-x-0'
                        }`}
                      >
                        <span
                          className={`absolute inset-0 flex h-full w-full items-center justify-center transition-opacity ${
                            formData.immediateSearch ? 'opacity-0' : 'opacity-100'
                          }`}
                        >
                          <svg className="h-3 w-3 text-gray-400" fill="none" viewBox="0 0 12 12">
                            <path
                              d="M4 8l2-2m0 0l2-2M6 6L4 4m2 2l2 2"
                              stroke="currentColor"
                              strokeWidth={2}
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                          </svg>
                        </span>
                        <span
                          className={`absolute inset-0 flex h-full w-full items-center justify-center transition-opacity ${
                            formData.immediateSearch ? 'opacity-100' : 'opacity-0'
                          }`}
                        >
                          <svg className="h-3 w-3 text-orange-500" fill="currentColor" viewBox="0 0 12 12">
                            <path d="M3.707 5.293a1 1 0 00-1.414 1.414l1.414-1.414zM5 8l-.707.707a1 1 0 001.414 0L5 8zm4.707-3.293a1 1 0 00-1.414-1.414l1.414 1.414zm-7.414 2l2 2 1.414-1.414-2-2-1.414 1.414zm3.414 2l4-4-1.414-1.414-4 4 1.414 1.414z" />
                          </svg>
                        </span>
                      </span>
                    </button>
                  </div>

                  {!formData.immediateSearch && (
                    <div className="grid grid-cols-2 gap-6">
                      <div className="group">
                        <label htmlFor="date" className="block text-sm font-medium text-gray-700 mb-2 transition-colors group-focus-within:text-orange-500">
                          Date
                        </label>
                        <input
                          type="date"
                          id="date"
                          className="block w-full rounded-xl border-0 bg-white/60 px-4 py-3.5 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-orange-500 sm:text-sm sm:leading-6 transition-all duration-200"
                          value={formData.date}
                          onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                          required={!formData.immediateSearch}
                        />
                      </div>
                      <div className="group">
                        <label htmlFor="startTime" className="block text-sm font-medium text-gray-700 mb-2 transition-colors group-focus-within:text-orange-500">
                          Heure de début
                        </label>
                        <input
                          type="time"
                          id="startTime"
                          className="block w-full rounded-xl border-0 bg-white/60 px-4 py-3.5 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-orange-500 sm:text-sm sm:leading-6 transition-all duration-200"
                          value={formData.startTime}
                          onChange={(e) => setFormData({ ...formData, startTime: e.target.value })}
                          required={!formData.immediateSearch}
                        />
                      </div>
                    </div>
                  )}

                  <div className="space-y-6">
                    <fieldset className="group">
                      <legend className="block text-sm font-medium text-gray-700 mb-3">État civil de la personne à garder</legend>
                      <div className="grid grid-cols-2 gap-4">
                        {['Homme', 'Femme'].map((gender) => (
                          <motion.div
                            key={gender}
                            whileHover={{ scale: 1.02 }}
                            whileTap={{ scale: 0.98 }}
                          >
                            <input
                              type="radio"
                              id={`person${gender}`}
                              name="personGender"
                              value={gender.toLowerCase()}
                              className="sr-only peer"
                              onChange={(e) => setFormData({ ...formData, personGender: e.target.value })}
                              required
                            />
                            <label
                              htmlFor={`person${gender}`}
                              className="flex items-center justify-center p-4 text-gray-500 rounded-xl border-2 border-gray-200 cursor-pointer peer-checked:border-orange-500 peer-checked:bg-orange-50 peer-checked:text-orange-600 hover:border-orange-200 hover:bg-orange-50/50 transition-all duration-200"
                            >
                              {gender}
                            </label>
                          </motion.div>
                        ))}
                      </div>
                    </fieldset>

                    <fieldset className="group">
                      <legend className="block text-sm font-medium text-gray-700 mb-3">Préférence de l'aidant</legend>
                      <div className="grid grid-cols-2 gap-4">
                        {['Homme', 'Femme'].map((gender) => (
                          <motion.div
                            key={`helper${gender}`}
                            whileHover={{ scale: 1.02 }}
                            whileTap={{ scale: 0.98 }}
                          >
                            <input
                              type="radio"
                              id={`helper${gender}`}
                              name="helperPreference"
                              value={gender.toLowerCase()}
                              className="sr-only peer"
                              onChange={(e) => setFormData({ ...formData, helperPreference: e.target.value })}
                              required
                            />
                            <label
                              htmlFor={`helper${gender}`}
                              className="flex items-center justify-center p-4 text-gray-500 rounded-xl border-2 border-gray-200 cursor-pointer peer-checked:border-orange-500 peer-checked:bg-orange-50 peer-checked:text-orange-600 hover:border-orange-200 hover:bg-orange-50/50 transition-all duration-200"
                            >
                              {gender}
                            </label>
                          </motion.div>
                        ))}
                      </div>
                    </fieldset>
                  </div>
                </div>

                <motion.button
                  whileHover={{ scale: 1.02, boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)" }}
                  whileTap={{ scale: 0.98 }}
                  type="submit"
                  className="w-full flex justify-center py-4 px-4 border border-transparent rounded-xl text-sm font-semibold text-white bg-gradient-to-r from-orange-500 to-yellow-500 hover:from-orange-600 hover:to-yellow-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-orange-500 transition-all duration-200 shadow-lg"
                >
                  Trouver mon aidant
                </motion.button>
              </form>
            </div>
          </motion.div>
        </div>

        {/* Features Grid */}
        <motion.div 
          className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-20"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ 
                  scale: 1.05,
                  boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)"
                }}
                className="bg-white/80 backdrop-blur-lg rounded-2xl p-6 shadow-lg"
              >
                <feature.icon className="h-8 w-8 text-orange-500 mb-4" />
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Profiles Section */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-20">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-3xl font-bold text-center text-gray-900 mb-12"
          >
            Nos aidants les mieux notés
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {mockProfiles.map((profile, index) => (
              <ProfileCard key={index} {...profile} />
            ))}
          </div>
        </div>

        {/* Testimonials Section */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-20"
        >
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Ce que disent nos utilisateurs
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                text: "Un service exceptionnel qui m'a permis de trouver rapidement une aide à domicile compétente et attentionnée.",
                author: "Isabelle M.",
                role: "Cliente satisfaite",
                image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
              },
              {
                text: "La plateforme est très intuitive et le processus de mise en relation est simple et efficace.",
                author: "Pierre D.",
                role: "Aidant professionnel",
                image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
              },
              {
                text: "Grâce à ce service, j'ai pu trouver l'aide dont ma mère avait besoin. Je recommande vivement !",
                author: "Sophie L.",
                role: "Cliente régulière",
                image: "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
              }
            ].map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                className="bg-white/80 backdrop-blur-lg rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow"
              >
                <div className="flex items-center mb-4">
                  <img
                    src={testimonial.image}
                    alt={testimonial.author}
                    className="w-12 h-12 rounded-full object-cover"
                  />
                  <div className="ml-4">
                    <h3 className="font-semibold text-gray-900">{testimonial.author}</h3>
                    <p className="text-sm text-gray-500">{testimonial.role}</p>
                  </div>
                </div>
                <p className="text-gray-600 italic">"{testimonial.text}"</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* How it Works Section */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl font-bold text-gray-900 mb-4">Comment ça marche ?</h2>
              <p className="text-xl text-gray-600">Un processus simple et efficace en trois étapes</p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {steps.map((step, index) => (
                <motion.div
                  key={step.number}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.2 }}
                  viewport={{ once: true }}
                  className="relative"
                >
                  <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow">
                    <div className={`w-12 h-12 rounded-xl bg-gradient-to-r ${step.color} flex items-center justify-center text-white font-bold mb-6`}>
                      {step.number}
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-4">{step.title}</h3>
                    <p className="text-gray-600">{step.description}</p>
                  </div>
                  {index < steps.length - 1 && (
                    <div className="hidden md:block absolute top-1/2 right-0 transform translate-x-1/2 -translate-y-1/2">
                      <div className="w-8 h-0.5 bg-gray-300"></div>
                    </div>
                  )}
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-20">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl font-bold text-gray-900 mb-4">Questions fréquentes</h2>
              <p className="text-xl text-gray-600">Tout ce que vous devez savoir sur notre service</p>
            </motion.div>

            <div className="space-y-4">
              {faqs.map((faq, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-white rounded-xl shadow-sm"
                >
                  <button
                    onClick={() => setOpenFaq(openFaq === index ? null : index)}
                    className="w-full px-6 py-4 flex items-center justify-between text-left"
                  >
                    <span className="text-lg font-semibold text-gray-900">{faq.question}</span>
                    <ChevronDownIcon
                      className={`w-5 h-5 text-gray-500 transition-transform ${
                        openFaq === index ? 'transform rotate-180' : ''
                      }`}
                    />
                  </button>
                  <motion.div
                    initial={false}
                    animate={{ height: openFaq === index ? 'auto' : 0 }}
                    className="overflow-hidden"
                  >
                    <p className="px-6 pb-4 text-gray-600">{faq.answer}</p>
                  </motion.div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
