"use client";

import { useState } from "react";
import { Container } from "@/components/ui/container";
import { motion, AnimatePresence } from "framer-motion";
import { MessageCircle, CalendarClock, ArrowRight, CheckCircle2, AlertCircle } from "lucide-react";
import { submitContactForm } from "@/app/actions";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";

const ContactFormSchema = z.object({
    nombre: z.string().min(2, "Por favor, ingresa tu nombre (mínimo 2 caracteres)."),
    email: z.string().email("Ingresa un correo electrónico válido."),
    tipoProyecto: z.string().min(1, "Selecciona una opción."),
    mensaje: z.string().min(10, "Cuéntame un poco más (mínimo 10 caracteres)."),
});

type ContactFormValues = z.infer<typeof ContactFormSchema>;

export function Contact() {
    const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle");
    const [errorMessage, setErrorMessage] = useState("");

    const {
        register,
        handleSubmit,
        formState: { errors, isSubmitting },
        reset
    } = useForm<ContactFormValues>({
        resolver: zodResolver(ContactFormSchema),
        defaultValues: {
            nombre: "",
            email: "",
            tipoProyecto: "",
            mensaje: ""
        }
    });

    const onSubmit = async (data: ContactFormValues) => {
        setSubmitStatus("idle");
        setErrorMessage("");

        const result = await submitContactForm(data);

        if (result.success) {
            setSubmitStatus("success");
            reset();
        } else {
            setSubmitStatus("error");
            setErrorMessage(result.error || "Ocurrió un error inesperado.");
        }
    };

    return (
        <section id="contacto" className="bg-brand-light dark:bg-brand-wine py-24 md:py-32 transition-colors duration-500 overflow-hidden">
            <Container className="grid gap-16 lg:grid-cols-[0.8fr,1.2fr] items-start">

                {/* Left Column: Direct Action Links */}
                <motion.div
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="flex flex-col gap-8"
                >
                    <div className="space-y-6">
                        <h2 className="font-serif text-5xl md:text-6xl text-brand-dark dark:text-brand-light leading-tight">
                            Inicia la <br /> <span className="italic text-brand-gold">conversación.</span>
                        </h2>
                        <p className="font-sans text-lg text-brand-dark/70 dark:text-white/70 max-w-sm">
                            ¿Listo para escalar? Elige tu canal preferido y hablemos de tu próximo movimiento.
                        </p>
                    </div>

                    <div className="flex flex-col gap-4 max-w-sm">
                        {/* WhatsApp Card */}
                        <motion.a
                            href="https://wa.me/5213317432164?text=Hola%20Estefanía.%20Vi%20tu%20web%20y%20estoy%20listo%2Fa%20para%20escalar%20mi%20negocio.%20Me%20gustar%C3%ADa%20agendar%20una%20consulta%20estrat%C3%A9gica%20contigo."
                            target="_blank"
                            rel="noopener noreferrer"
                            whileHover={{ y: -5 }}
                            className="flex items-center gap-6 p-8 rounded-3xl border border-brand-wine/10 dark:border-white/10 hover:border-brand-gold/40 transition-colors bg-white/5 backdrop-blur-sm group"
                        >
                            <div className="w-14 h-14 rounded-2xl bg-brand-gold/10 flex items-center justify-center text-brand-gold">
                                <MessageCircle size={32} />
                            </div>
                            <div className="flex flex-col">
                                <span className="font-serif text-xl text-brand-wine dark:text-brand-light">Chat Directo</span>
                                <span className="font-sans text-xs tracking-widest uppercase font-bold text-brand-wine/60 dark:text-white/40">Respuesta rápida</span>
                            </div>
                            <ArrowRight className="ml-auto opacity-0 group-hover:opacity-100 transition-opacity text-brand-gold" size={20} />
                        </motion.a>

                        {/* Google Calendar Card */}
                        <motion.a
                            href="https://calendar.app.google/Fr9Y8yLNPop24jhP9"
                            target="_blank"
                            rel="noopener noreferrer"
                            whileHover={{ y: -5 }}
                            className="flex items-center gap-6 p-8 rounded-3xl bg-brand-wine dark:bg-brand-light shadow-2xl group"
                        >
                            <div className="w-14 h-14 rounded-2xl bg-white/10 dark:bg-brand-wine/10 flex items-center justify-center text-brand-light dark:text-brand-wine">
                                <CalendarClock size={32} />
                            </div>
                            <div className="flex flex-col">
                                <span className="font-serif text-xl text-brand-light dark:text-brand-wine">Agendar Sesión</span>
                                <span className="font-sans text-xs tracking-widest uppercase font-bold text-brand-light/60 dark:text-brand-wine/40">Bloquea tu espacio hoy</span>
                            </div>
                            <ArrowRight className="ml-auto text-brand-gold" size={20} />
                        </motion.a>
                    </div>
                </motion.div>

                {/* Right Column: Minimalist Form */}
                <motion.div
                    initial={{ opacity: 0, x: 30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="bg-white/40 dark:bg-white/5 backdrop-blur-xl rounded-[40px] p-8 md:p-12 lg:p-16 border border-white/20"
                >
                    <AnimatePresence mode="wait">
                        {submitStatus === "success" ? (
                            <motion.div
                                key="success-message"
                                initial={{ opacity: 0, scale: 0.95 }}
                                animate={{ opacity: 1, scale: 1 }}
                                className="flex flex-col items-center justify-center text-center gap-6 py-12"
                            >
                                <div className="w-20 h-20 rounded-full bg-brand-gold/20 flex items-center justify-center text-brand-gold mb-4">
                                    <CheckCircle2 size={40} />
                                </div>
                                <h3 className="font-serif text-3xl md:text-4xl text-brand-dark dark:text-brand-light">
                                    ¡Gracias por tu mensaje!
                                </h3>
                                <p className="font-sans text-lg text-brand-dark/70 dark:text-white/70 max-w-sm">
                                    Revisaré tu visión y te contactaré en breve.
                                </p>
                            </motion.div>
                        ) : (
                            <motion.form
                                key="contact-form"
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                exit={{ opacity: 0 }}
                                onSubmit={handleSubmit(onSubmit)}
                                className="flex flex-col gap-10"
                            >
                                <div className="group relative">
                                    <label className="block text-[10px] font-bold tracking-[0.2em] uppercase text-brand-wine/60 dark:text-white/40 mb-2 transition-colors group-focus-within:text-brand-gold">
                                        Tu Nombre
                                    </label>
                                    <input
                                        type="text"
                                        placeholder="Escribe tu respuesta aquí..."
                                        className={`w-full bg-transparent border-b py-4 font-serif text-2xl text-brand-dark dark:text-brand-light focus:outline-none transition-all placeholder:text-brand-dark/10 dark:placeholder:text-white/10 ${errors.nombre ? "border-red-500/50" : "border-brand-dark/20 dark:border-white/20 focus:border-brand-gold"
                                            }`}
                                        {...register("nombre")}
                                    />
                                    {errors.nombre && (
                                        <p className="text-red-500/80 text-xs mt-2 font-sans">{errors.nombre.message}</p>
                                    )}
                                </div>

                                <div className="group relative">
                                    <label className="block text-[10px] font-bold tracking-[0.2em] uppercase text-brand-wine/60 dark:text-white/40 mb-2 transition-colors group-focus-within:text-brand-gold">
                                        Tu Email
                                    </label>
                                    <input
                                        type="email"
                                        placeholder="ejemplo@email.com"
                                        className={`w-full bg-transparent border-b py-4 font-serif text-2xl text-brand-dark dark:text-brand-light focus:outline-none transition-all placeholder:text-brand-dark/10 dark:placeholder:text-white/10 ${errors.email ? "border-red-500/50" : "border-brand-dark/20 dark:border-white/20 focus:border-brand-gold"
                                            }`}
                                        {...register("email")}
                                    />
                                    {errors.email && (
                                        <p className="text-red-500/80 text-xs mt-2 font-sans">{errors.email.message}</p>
                                    )}
                                </div>

                                <div className="group relative">
                                    <label className="block text-[10px] font-bold tracking-[0.2em] uppercase text-brand-wine/60 dark:text-white/40 mb-4 transition-colors group-focus-within:text-brand-gold">
                                        Tipo de Proyecto
                                    </label>
                                    <div className="flex flex-wrap gap-3">
                                        {["Estrategia", "Web Design", "Branding", "Otro"].map((type) => (
                                            <label key={type} className="relative cursor-pointer group/choice">
                                                <input
                                                    type="radio"
                                                    value={type}
                                                    {...register("tipoProyecto")}
                                                    className="sr-only peer"
                                                />
                                                <span className="inline-block px-5 py-2 rounded-full border border-brand-dark/10 dark:border-white/10 font-sans text-sm text-brand-dark/60 dark:text-white/60 peer-checked:bg-brand-gold peer-checked:text-brand-wine peer-checked:border-brand-gold transition-all">
                                                    {type}
                                                </span>
                                            </label>
                                        ))}
                                    </div>
                                    {errors.tipoProyecto && (
                                        <p className="text-red-500/80 text-xs mt-2 font-sans">{errors.tipoProyecto.message}</p>
                                    )}
                                </div>

                                <div className="group relative">
                                    <label className="block text-[10px] font-bold tracking-[0.2em] uppercase text-brand-wine/60 dark:text-white/40 mb-2 transition-colors group-focus-within:text-brand-gold">
                                        Cuéntame más
                                    </label>
                                    <textarea
                                        placeholder="Un breve resumen de tu visión..."
                                        rows={3}
                                        className={`w-full bg-transparent border-b py-4 font-serif text-2xl text-brand-dark dark:text-brand-light focus:outline-none transition-all resize-none placeholder:text-brand-dark/10 dark:placeholder:text-white/10 ${errors.mensaje ? "border-red-500/50" : "border-brand-dark/20 dark:border-white/20 focus:border-brand-gold"
                                            }`}
                                        {...register("mensaje")}
                                    />
                                    {errors.mensaje && (
                                        <p className="text-red-500/80 text-xs mt-2 font-sans">{errors.mensaje.message}</p>
                                    )}
                                </div>

                                {/* Main Error Message fallback */}
                                {submitStatus === "error" && (
                                    <motion.div
                                        initial={{ opacity: 0, y: 10 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        className="flex items-center gap-3 p-4 rounded-xl bg-red-500/10 border border-red-500/20 text-red-700 dark:text-red-400"
                                    >
                                        <AlertCircle size={20} />
                                        <p className="font-sans text-sm font-medium">{errorMessage}</p>
                                    </motion.div>
                                )}

                                <div className="flex justify-end pt-4">
                                    <button
                                        type="submit"
                                        disabled={isSubmitting}
                                        className="group flex items-center gap-4 text-brand-wine dark:text-brand-gold font-bold tracking-[0.2em] uppercase text-xs disabled:opacity-50 disabled:cursor-not-allowed"
                                    >
                                        <span>{isSubmitting ? "ENVIANDO..." : "ENVIAR PROPUESTA"}</span>
                                        <div className="w-12 h-12 rounded-full border border-brand-wine/20 dark:border-brand-gold/20 flex items-center justify-center group-hover:bg-brand-gold group-hover:text-brand-wine transition-all duration-500">
                                            {isSubmitting ? (
                                                <div className="w-4 h-4 rounded-full border-2 border-brand-wine/20 dark:border-brand-gold/20 border-t-brand-wine dark:border-t-brand-gold animate-spin" />
                                            ) : (
                                                <ArrowRight size={18} />
                                            )}
                                        </div>
                                    </button>
                                </div>
                            </motion.form>
                        )}
                    </AnimatePresence>
                </motion.div>
            </Container>
        </section>
    );
}
