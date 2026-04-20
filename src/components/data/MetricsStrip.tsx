import { motion, useReducedMotion } from "framer-motion";

const metrics = [
  {
    value: "1,200+",
    label: "pacientes longitudinales",
    detail: "seguimiento clínico superior a 6 meses."
  },
  {
    value: "6,000+",
    label: "mediciones pupilares estructuradas",
    detail: "capturadas bajo protocolo."
  },
  {
    value: "Intraindividual",
    label: "modelado clínico",
    detail: "cada paciente se analiza respecto a su propio baseline."
  }
];

export default function MetricsStrip() {
  const prefersReducedMotion = useReducedMotion();

  return (
    <motion.div
      className="metrics-grid"
      initial={prefersReducedMotion ? false : "hidden"}
      whileInView={prefersReducedMotion ? undefined : "visible"}
      viewport={{ once: true, amount: 0.25 }}
      variants={{
        hidden: {},
        visible: {
          transition: {
            staggerChildren: 0.12
          }
        }
      }}>
      {metrics.map((metric, index) => (
        <motion.article
          key={metric.label}
          className="metric-card"
          variants={{
            hidden: { opacity: 0, y: 50 },
            visible: { opacity: 1, y: 0 }
          }}
          transition={{ duration: 0.65, delay: index * 0.02, ease: "easeOut" }}
        >
          <span className="metric-card__value">{metric.value}</span>
          <h3 className="metric-card__label">{metric.label}</h3>
          <p className="metric-card__detail">{metric.detail}</p>
        </motion.article>
      ))}
    </motion.div>
  );
}
