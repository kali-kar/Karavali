import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

const CultureHeritage = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const heritageItems = [
    {
      title: "Ancient Temples",
      description: "Discover the spiritual heart of Udupi with famous Krishna Temple and ancient traditions.",
      image: "./images/kudroli.jpeg",
      features: [
        { name: "Krishna Temple", link: "https://www.google.com/maps/place/Udupi+Shri+Krishna+Matha/@13.340991,74.752296,3a,75y,141.67h,90t/data=!3m8!1e1!3m6!1sCIHM0ogKEICAgICkvIv-nQE!2e10!3e11!6shttps:%2F%2Flh3.googleusercontent.com%2Fgpms-cs-s%2FAPRy3c_Zx8MxztOrp-CynqfDSO0JcGFDJX4SJxC0X1LV7GrNp2-UQKyfDoyCG77cM68wx-Xg_YwtXrsfrelOS5j7z8Fz-MnUpWErbdkHOoQWzus-Ut2Sxqj2ZWXSksZh-Tr-i1u-16cM%3Dw900-h600-k-no-pi0-ya123.67270949501724-ro0-fo100!7i3840!8i1919!4m14!1m7!3m6!1s0x3bbcbba1fb4b68f1:0xf6b5da87d182612e!2sUdupi+Shri+Krishna+Matha!8m2!3d13.3411662!4d74.7520446!16s%2Fg%2F11h6wlhy7c!3m5!1s0x3bbcbba1fb4b68f1:0xf6b5da87d182612e!8m2!3d13.3411662!4d74.7520446!16s%2Fg%2F11h6wlhy7c?entry=ttu&g_ep=EgoyMDI1MTAyMi4wIKXMDSoASAFQAw%3D%3D" },
        { name: "Kudroli Temple", link: "https://www.google.com/maps/place/Kudroli+Sri+Gokarnanatha+Kshetra/@12.8758802,74.8314743,3a,75y,340.51h,90t/data=!3m8!1e1!3m6!1sCIHM0ogKEICAgICGk6_K9AE!2e10!3e11!6shttps:%2F%2Flh3.googleusercontent.com%2Fgpms-cs-s%2FAPRy3c8ZvJ2UddaLRfj1wVfUL8TCmYpjPqqoAaU7pKvvT_xqXmsQpHNsM49oWy72ekXDrvef1Q2lKg_6CNPSNXoTzKrMgaS_Lu3gzQZtK-4Q0tqCn1B1x_-gZ3rxFUeN2s3KHtcKMOrDEA%3Dw900-h600-k-no-pi0-ya340.5105-ro0-fo100!7i6080!8i3040!4m14!1m7!3m6!1s0x3ba35bc3cc026e85:0x14d6faf193086cb6!2sKudroli+Sri+Gokarnanatha+Kshetra!8m2!3d12.8759327!4d74.8314552!16zL20vMGNyN3No!3m5!1s0x3ba35bc3cc026e85:0x14d6faf193086cb6!8m2!3d12.8759327!4d74.8314552!16zL20vMGNyN3No?entry=ttu&g_ep=EgoyMDI1MTAyMi4wIKXMDSoASAFQAw%3D%3D" },
        { name: "Kadri Manjunatha Temple", link: "https://www.google.com/maps/place/Kadri+Shree+Manjunatha+Temple/@12.885755,74.8558383,3a,75y,233.21h,90t/data=!3m8!1e1!3m6!1sCIHM0ogKEICAgIDutrv3Bg!2e10!3e11!6shttps:%2F%2Flh3.googleusercontent.com%2Fgpms-cs-s%2FAPRy3c_ii3NH6uuCF2AoyQj2DRq8R39w2WHfyXvoXAgCYeZyKQ3Mln36R5nJ7Ahirh1G4mYbtCs7ccyk5hFo2Jbxgs4kj7kTS2Ue8Tg_m76I-fGMoP40xWNmqTkL334zQYnau-_hjwWa%3Dw900-h600-k-no-pi0-ya322.21166483309526-ro0-fo100!7i4608!8i2304!4m14!1m7!3m6!1s0x3ba35a3e64773ad1:0xe35d05aed8ff9308!2sKadri+Shree+Manjunatha+Temple!8m2!3d12.8857227!4d74.8556295!16zL20vMGM2M25n!3m5!1s0x3ba35a3e64773ad1:0xe35d05aed8ff9308!8m2!3d12.8857227!4d74.8556295!16zL20vMGM2M25n?entry=ttu&g_ep=EgoyMDI1MTAyMi4wIKXMDSoASAFQAw%3D%3D" }
      ]
    },
    {
      title: "Sacred Churches",
      description: "Colonial-era churches showcasing Christian heritage and artistic interiors.",
      image: "./images/church.jpg",
      features: [
        { name: "Kalmadi Church", link: "https://www.google.com/maps/@13.3479916,74.7189353,3a,75y,333.95h,116.13t/data=!3m8!1e1!3m6!1sCIHM0ogKEICAgIDU8bnPRA!2e10!3e11!6shttps:%2F%2Flh3.googleusercontent.com%2Fgpms-cs-s%2FAPRy3c8zrANfxVuukrvRmSwSp7IB5vGcy-SMjXy-i8OWrdpou6B8pIMhwYQ6TtS2S1wv6rKONUlwD6uJ54WoNaKiGc-579bNCiD_yRqB6NvBvcxbw1KKM8Ygve4gwlhVb6a02aTRgkuZ%3Dw900-h600-k-no-pi-26.132861877381757-ya339.9531977686064-ro0-fo100!7i8704!8i4352?authuser=0&entry=ttu&g_ep=EgoyMDI1MTAyMi4wIKXMDSoASAFQAw%3D%3D" },
        { name: "Milagres Church", link: "https://www.google.com/maps/place/Milagres+Church/@12.8674748,74.8439071,3a,75y,95.04h,129.33t/data=!3m8!1e1!3m6!1sCIHM0ogKEICAgICEiZa7ygE!2e10!3e11!6shttps:%2F%2Flh3.googleusercontent.com%2Fgpms-cs-s%2FAPRy3c8V3FfrPrxUyyqbhKznLZ1WhBu1IQ1khGPreKBu6J7DTtg3u-9mewgU7Kyzq_r-h2nd8oYclGJBl3WYf9wh_AypSFgRljI_rNgqMeXfTe04akZt7SrMOnAbOtRvbdaF-vHDAVsSSQ%3Dw900-h600-k-no-pi-39.334301354654514-ya356.18662151752335-ro0-fo100!7i6912!8i3456!4m6!3m5!1s0x3ba35a4b7d2c5673:0x112b0a5f996fa04d!8m2!3d12.867448!4d74.8444552!16s%2Fg%2F12qfkd6l5?authuser=0&entry=ttu&g_ep=EgoyMDI1MTAyMi4wIKXMDSoASAFQAw%3D%3D" },
        { name: "Rosario Cathedral", link: "https://www.google.com/maps/place/St.+Lawrence+Minor+Basilica+(Shrine)/@13.2062416,74.9721146,3a,16.3y,220.32h,98.19t/data=!3m11!1e1!3m9!1sCIHM0ogKEICAgICEqYSZ4AE!2e10!3e11!6shttps:%2F%2Flh3.googleusercontent.com%2Fgpms-cs-s%2FAPRy3c8TEhTpAgFPIwN3fsRuSdpWph4v5-octweIZkToI8bbq0-4bgNKvccbzjXKX0FyvljmfnHQ0149Fy26qwoGOcfELNv0w_4cVZNHBoVd392oeKfNXQz0Hxj5K2FY2-sWDAVNt8wo7Q%3Dw900-h600-k-no-pi-8.189832955056374-ya347.31530816596234-ro0-fo100!7i10240!8i5120!9m2!1b1!2i44!4m7!3m6!1s0x3bbb561ee0f9b0db:0x855325913b0906d!8m2!3d13.205966!4d74.9720868!10e5!16s%2Fm%2F0640jx6?authuser=0&entry=ttu&g_ep=EgoyMDI1MTAyMi4wIKXMDSoASAFQAw%3D%3D" }
      ]
    },
    {
      title: "Jain Basadis",
      description: "Serene temples that continue centuries of Jain spirituality.",
      image: "../images/basadi.jpg",
      features: [
        { name: "Moodbidri 100 Pillars Basadi", link: "https://www.google.com/maps/place/Thousand+Pillar+Temple/@13.073977,74.9979125,3a,75y,331.29h,98.8t/data=!3m10!1e1!3m8!1sCIHM0ogKEICAgICkovCeKw!2e10!6shttps:%2F%2Flh3.googleusercontent.com%2Fgpms-cs-s%2FAPRy3c-34eygUCBwrlCEMCO6XFCg5R75MverZB5Kj1oQqPri0Wp6kqR-neVU3TN0fLfYi4OoDeLlJYq_Vwk9Ahhd7Xg4SOJ4lGbD9fEb_5_Jm5KsQJK0BU0n0qrG5Fl-2f0lQeZygGpa%3Dw900-h600-k-no-pi-8.797106281118062-ya223.79400275549136-ro0-fo100!7i6912!8i3456!9m2!1b1!2i44!4m14!1m7!3m6!1s0x3ba4ab1db6262673:0xb6da0620c31ac5a!2sThousand+Pillar+Temple!8m2!3d13.0741293!4d74.9978068!16s%2Fg%2F11sd_sz4xn!3m5!1s0x3ba4ab1db6262673:0xb6da0620c31ac5a!8m2!3d13.0741293!4d74.9978068!16s%2Fg%2F11sd_sz4xn?entry=ttu&g_ep=EgoyMDI1MTAyMi4wIKXMDSoASAFQAw%3D%3D" },
        { name: "Chaturmukha Basadi", link: "https://www.google.com/maps/place/Shri+Chaturmukha+Jaina+Basadi/@13.2084417,75.0048871,3a,75y,98.77h,69.1t/data=!3m8!1e1!3m6!1sCIHM0ogKEICAgIDEie7E5wE!2e10!3e11!6shttps:%2F%2Flh3.googleusercontent.com%2Fgpms-cs-s%2FAPRy3c8EuSLx7CCWhIuHKBzw5VzRgRn7xNisjd92MLIOT9diD_8So5_R7KJUexaHsVVQcd4pLgLv6_hlYlQ3hzREhC5n8T-dUxMyMtB_MeS8XsZ8wMGwT2I74EcpyOydmdetHGcQZLRz%3Dw900-h600-k-no-pi20.895920819112064-ya195.76946676127022-ro0-fo100!7i8704!8i4352!4m6!3m5!1s0x3bbb5667afce4e93:0xe1f344fd5c943d81!8m2!3d13.2085613!4d75.0049398!16s%2Fg%2F11bxdt17pz?entry=ttu&g_ep=EgoyMDI1MTAyMi4wIKXMDSoASAFQAw%3D%3D" },
        { name: "Anekere Basadi", link: "https://www.google.com/maps/@13.2066262,74.9978542,3a,75y,117.13h,90t/data=!3m11!1e1!3m9!1sCIHM0ogKEICAgICkvNf--AE!2e10!3e11!6shttps:%2F%2Flh3.googleusercontent.com%2Fgpms-cs-s%2FAPRy3c9nftZrj9pFN-d9YE_vqmcUySpzy0A87DUODpSfehXfIX4ZQRsjxRFqDukasJVhOT-6IA13VqyUj468q-bUm76kYuTAupCDKo7Y6RIKBL1AwQdkFkMYDhGmSIjcfIzrd7ded8dTKA%3Dw900-h600-k-no-pi0-ya200.1310066421275-ro0-fo100!7i8192!8i4096!9m2!1b1!2i44?entry=ttu&g_ep=EgoyMDI1MTAyMi4wIKXMDSoASAFQAw%3D%3D" }
      ]
    },
    {
      title: "Yakshagana",
      description: "Vibrant dance-drama that brings ancient stories alive with color.",
      image: "../images/Yakshagana.jpg",
      features: [
        { name: "Traditional Shows", link: "#" },
        { name: "Colorful Costumes", link: "#" },
        { name: "Mythological Stories", link: "#" }
      ]
    },
    {
  title: "Kambala",
  description: "Traditional buffalo race held in water-filled paddy fields, symbolizing rural festivity and valor.",
  image: "/images/kambala.jpg",
  features: [
    { name: "Buffalo Race", link: "#" },
    { name: "Rural Festivities", link: "#" },
    { name: "Local Competitions", link: "#" }
  ]
},
{
  title: "Bharatanatyam & Folk Dance",
  description: "Classical and regional dances performed during festivals and temple ceremonies, showcasing local storytelling traditions.",
  image: "/images/bharata.avif",
  features: [
    { name: "Temple Performances", link: "#" },
    { name: "Festival Shows", link: "#" },
    { name: "Cultural Storytelling", link: "#" }
  ]
}

  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.2 } }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <section id="culture" className="section-padding bg-gradient-to-br from-amber-50 to-green-50">
      <div className="container-custom">
        <motion.div
          ref={ref}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={containerVariants}
          className="text-center mb-16"
        >
          <motion.h2
            variants={itemVariants}
            className="text-5xl md:text-6xl font-serif font-bold text-emerald-700 mb-6"
          >
            Culture & Heritage
          </motion.h2>

          <motion.p
            variants={itemVariants}
            className="text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed"
          >
            Immerse yourself in the rich cultural tapestry of Udupi and Mangalore.
          </motion.p>
        </motion.div>

        <motion.div
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={containerVariants}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10"
        >
          {heritageItems.map((item, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ scale: 1.03 }}
              className="bg-white rounded-3xl shadow-lg hover:shadow-2xl overflow-hidden transition-all"
            >
              <div className="relative w-full h-56 md:h-64 lg:h-72">
                <img
                  src={item.image}
                  alt={item.title}
                  className="absolute inset-0 w-full h-full object-cover"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/40"></div>
              </div>

              <div className="p-8">
                <h3 className="text-2xl font-serif font-bold text-emerald-800 mb-3">
                  {item.title}
                </h3>
                <p className="text-gray-600 mb-4">{item.description}</p>

                <ul className="space-y-2">
                  {item.features.map((feature, i) => (
                    <li key={i} className="flex items-center text-sm">
                      <span className="w-2 h-2 bg-amber-500 rounded-full mr-3"></span>
                      <a
                        href={feature.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-green-700 hover:text-green-900 hover:underline transition-all"
                      >
                        {feature.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default CultureHeritage;
