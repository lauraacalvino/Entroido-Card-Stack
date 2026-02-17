import React, { useState } from "react"; 
import { motion, AnimatePresence } from "framer-motion";

const TRADICIONES = [
    {
        id: 1,
        name: "Peliqueiros",
        place: "Laza",
        image: "https://upload.wikimedia.org/wikipedia/commons/a/ac/Peliqueiros_de_Laza_3.jpg",
        description: "Os peliqueiros son as figuras máis emblemáticas do Entroido de Laza, recoñecibles pola súa máscara ríxida, as chocas na cintura e o látego co que impoñen respecto."
    },
    {
        id: 2,
        name: "Xenerais",
        place: "Ulla",
        image: "https://s3.turismoriasbaixas.com/c3-cms-pro/inline-images/xenerais%20ulla_59_LucasTerceiro.jpg",
        description: 'Os Xenerais do Ulla son personaxes do Entroido tradicional da comarca do Ulla que, montados a cabalo e con vistosos uniformes, protagonizan enfrontamentos orais satíricos chamados atranques.'
    },
    {
        id: 3,
        name: "Pantallas",
        place: "Xinzo de Limia",
        image: "https://blog.mundo-r.com/embed/70e811ba6829c80d0594b6368f714275111685355997/entroido-carnaval-galicia-pantallas-xinzo-de-limia",
        description: "As Pantallas son os símbolos do Entroido de Xinzo de Limia, distinguidas pola súa máscara sorrinte, a vexiga inflada na man e as campaíñas que anuncian a súa presenza polas rúas."
    },
    {
        id: 4,
        name: "Cigarróns",
        place: "Verín",
        image: "https://www.vivirgaliciaturismo.com/wp-content/uploads/2013/01/11.jpg",
        description: "Os Cigarróns son personaxes típicos do Entroido de Verín, recoñecibles polos seus traxes a raias, máscaras de madeira e campás que levan atadas."
    }
];

export default function CardStack() {
    const [cards, setCards] = useState(TRADICIONES);

    const handleNext = () => {
        setCards((prev) => {
            const [first, ...rest] = prev;
            return [...rest, first];
        });
    };

    return (
        <div className="stack-wrapper">
            <AnimatePresence initial={false} mode="popLayout">
                {cards.map((item, index) => {
                    const isFirst = index === 0;

                    return (
                        <motion.div
                            key={item.id}
                            className="entroido-card"
                            onClick={isFirst ? handleNext : undefined}
                            
                            initial={{
                                scale: 1 - (cards.length - 1) * 0.05,
                                y: (cards.length - 1) * 12,
                                x: (cards.length - 1) * -25,
                                rotateZ: (cards.length - 1) * -8,
                                opacity: 0
                            }}

                            animate={{
                                scale: 1 - index * 0.05,
                                y: index * 12,
                                x: index * -25,
                                rotateZ: index * -8,
                                zIndex: cards.length - index,
                                filter: `blur(${index * 1.5}px)`,
                                opacity: 1 - index * 0.2
                            }}

                            exit={{
                                scale: 1 - (cards.length - 1) * 0.05,
                                y: (cards.length - 1) * 12,
                                x: (cards.length - 1) * -25,
                                rotateZ: (cards.length - 1) * -8,
                                opacity: 0,
                                zIndex: 0,
                                transition: { 
                                    duration: 0.5,
                                    ease: "easeOut"
                                }
                            }}

                            transition={{
                                type: "spring",
                                stiffness: 100,
                                damping: 30,
                                mass: 1,
                                rotateZ: { 
                                    type: "spring", 
                                    stiffness: 60,
                                    damping: 35
                                },
                                filter: { duration: 0.5 },
                                opacity: { duration: 0.4 }
                            }}
                            
                            style={{ 
                                transformOrigin: "center bottom",
                                cursor: isFirst ? "pointer" : "default"
                            }}
                            
                            whileTap={isFirst ? { scale: 0.95, rotateZ: -2 } : {}}
                        >
                            <div className="card-header">
                                <span className="badge">{item.place}</span>
                                <h2>{item.name}</h2>
                            </div>

                            <div className="card-image-container">
                                <img src={item.image} alt={item.name} />
                            </div>

                            <div className="card-footer">
                                <p>{item.description}</p>
                            </div>
                        </motion.div>
                    );
                })}
            </AnimatePresence>
        </div>
    );
}